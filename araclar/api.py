"""
Fasl-ı Fuzûlî Külliyâtı - Veri Tabanı, Poetik Analiz ve Sorgulama API'si
"""

import json
import random
import re
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple

CORPUS_PATH = Path(__file__).parent / "corpus.json"


def load_corpus() -> Dict[str, Any]:
    """Corpus JSON veri tabanını yükler."""
    with open(CORPUS_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def hecele(kelime: str) -> List[str]:
    """Türkçe ve Osmanlıca transkripsiyonlu kelimeleri hecelerine ayırır."""
    unluler = set("aeıioöuüAEIİOÖUÜâîûÂÎÛ")
    if not kelime:
        return []

    vowel_indices = [i for i, c in enumerate(kelime) if c in unluler]
    if not vowel_indices:
        return [kelime]

    heceler = []
    start = 0
    for idx in range(len(vowel_indices)):
        v_curr = vowel_indices[idx]
        if idx == len(vowel_indices) - 1:
            heceler.append(kelime[start:])
        else:
            v_next = vowel_indices[idx + 1]
            consonants_count = v_next - v_curr - 1
            if consonants_count <= 1:
                split_point = v_curr + 1
            else:
                split_point = v_next - 1
            heceler.append(kelime[start:split_point])
            start = split_point
    return heceler


class FuzuliCorpus:
    """Fuzûlî Külliyâtı sorgulama ve poetik analiz motoru."""

    def __init__(self, data: Optional[Dict[str, Any]] = None):
        self.data = data or load_corpus()

    @property
    def sair(self) -> Dict[str, Any]:
        return self.data.get("sair", {})

    @property
    def gazeller(self) -> List[Dict[str, Any]]:
        return self.data.get("gazeller", [])

    @property
    def su_kasidesi(self) -> Dict[str, Any]:
        return self.data.get("su_kasidesi", {})

    @property
    def mesneviler(self) -> List[Dict[str, Any]]:
        return self.data.get("mesneviler", [])

    @property
    def mensur_eserler(self) -> List[Dict[str, Any]]:
        return self.data.get("mensur_eserler", [])

    @property
    def rubailer(self) -> List[Dict[str, Any]]:
        return self.data.get("rubailer_ve_kitalar", [])

    @property
    def hikmetli_sozler(self) -> List[Dict[str, str]]:
        return self.data.get("hikmetli_sozler", [])

    @property
    def lugat(self) -> Dict[str, str]:
        return self.data.get("lugat", {})

    @property
    def aruz_kaliplari(self) -> List[Dict[str, str]]:
        return self.data.get("aruz_kaliplari", [])

    @property
    def quiz_sorulari(self) -> List[Dict[str, Any]]:
        return self.data.get("quiz_sorulari", [])

    def fal_cek(self) -> Dict[str, Any]:
        """
        Fâl-i Fuzûlî: Külliyattan rastgele hikmetli bir beyit, kıt'a veya pasaj döner.
        """
        havuz: List[Dict[str, Any]] = []

        # Gazellerden beyitler
        for gazel in self.gazeller:
            for beyit in gazel.get("beyitler", []):
                havuz.append({
                    "tur": "Gazel",
                    "kaynak": f"Gazel: {gazel['baslik']} (Beyit #{beyit['no']})",
                    "vezin": gazel.get("vezin", ""),
                    "metin": beyit["turkce"],
                    "sadelesmis": beyit["sadelesmis"],
                    "sanatlar": beyit.get("sanatlar", [])
                })

        # Su Kasidesinden tüm 32 beyit
        sk_vezin = self.su_kasidesi.get("vezin", "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün")
        for beyit in self.su_kasidesi.get("beyitler", []):
            havuz.append({
                "tur": "Su Kasîdesi",
                "kaynak": f"Su Kasîdesi (Beyit #{beyit['no']})",
                "vezin": sk_vezin,
                "metin": beyit["metin"],
                "sadelesmis": beyit["anlam"],
                "sanatlar": beyit.get("sanatlar", ["Na't-ı Şerif"])
            })

        # Hikmetli Sözler
        for soz in self.hikmetli_sozler:
            havuz.append({
                "tur": "Hikmetli Söz",
                "kaynak": soz["kaynak"],
                "vezin": "Hikemî / İrşad",
                "metin": soz["soz"],
                "sadelesmis": soz["anlam"],
                "sanatlar": ["Hikmet", "İrşad"]
            })

        # Rübâi ve Kıt'alar
        for r in self.rubailer:
            havuz.append({
                "tur": r.get("tur", "Rübâi"),
                "kaynak": f"{r.get('tur', 'Rübâi')} #{r.get('no', 1)}",
                "vezin": r.get("vezin", ""),
                "metin": r.get("metin", ""),
                "sadelesmis": r.get("anlam", ""),
                "sanatlar": ["Hikmet", "Tasavvuf"]
            })

        # Mesnevilerden pasajlar
        for mesnevi in self.mesneviler:
            for pasaj in mesnevi.get("pasajlar", []):
                havuz.append({
                    "tur": "Mesnevî",
                    "kaynak": f"{mesnevi['baslik']} - {pasaj['baslik']}",
                    "vezin": mesnevi.get("vezin", ""),
                    "metin": pasaj["metin"],
                    "sadelesmis": pasaj["anlam"],
                    "sanatlar": ["Mesnevî", "Alegori"]
                })

        if not havuz:
            return {
                "tur": "Hikmet",
                "kaynak": "Dîbâce",
                "vezin": "Mensur",
                "metin": "Şi'r-i bî-ilm esâssız dîvâr olur...",
                "sadelesmis": "İlimsiz şiir temelsiz duvara benzer.",
                "sanatlar": ["Hikmet"]
            }

        return random.choice(havuz)

    def gazel_getir(self, gazel_id_or_index: Any) -> Optional[Dict[str, Any]]:
        """ID veya sıra numarasına göre gazel getirir."""
        if isinstance(gazel_id_or_index, int):
            if 0 <= gazel_id_or_index < len(self.gazeller):
                return self.gazeller[gazel_id_or_index]
            return None

        query = str(gazel_id_or_index).lower().strip()
        for gazel in self.gazeller:
            if gazel["id"] == query or query in gazel["baslik"].lower():
                return gazel
        return None

    def eser_getir(self, eser_id: str) -> Optional[Dict[str, Any]]:
        """Mesnevi veya Mensur eseri ID/başlık ile getirir."""
        query = str(eser_id).lower().strip()

        if "su" in query or "kaside" in query:
            return {"tur": "kaside", "veri": self.su_kasidesi}

        for m in self.mesneviler:
            if m["id"] == query or query in m["baslik"].lower():
                return {"tur": "mesnevi", "veri": m}

        for me in self.mensur_eserler:
            if me["id"] == query or query in me["baslik"].lower():
                return {"tur": "mensur", "veri": me}

        return None

    def ara(self, kelime: str) -> List[Dict[str, Any]]:
        """Külliyat genelinde arama yapar."""
        sonuclar: List[Dict[str, Any]] = []
        kelime_lower = kelime.lower().strip()
        if not kelime_lower:
            return sonuclar

        # Gazellerde ara
        for gazel in self.gazeller:
            for beyit in gazel.get("beyitler", []):
                if kelime_lower in beyit["turkce"].lower() or kelime_lower in beyit["sadelesmis"].lower():
                    sonuclar.append({
                        "tur": "Gazel Beyti",
                        "kaynak": f"{gazel['baslik']} (Beyit #{beyit['no']})",
                        "metin": beyit["turkce"],
                        "anlam": beyit["sadelesmis"]
                    })

        # Su Kasidesinde ara
        for beyit in self.su_kasidesi.get("beyitler", []):
            if kelime_lower in beyit["metin"].lower() or kelime_lower in beyit["anlam"].lower():
                sonuclar.append({
                    "tur": "Su Kasîdesi",
                    "kaynak": f"Su Kasîdesi #{beyit['no']}",
                    "metin": beyit["metin"],
                    "anlam": beyit["anlam"]
                })

        # Mesnevilerde ara
        for mesnevi in self.mesneviler:
            for pasaj in mesnevi.get("pasajlar", []):
                if kelime_lower in pasaj["metin"].lower() or kelime_lower in pasaj["anlam"].lower():
                    sonuclar.append({
                        "tur": "Mesnevî",
                        "kaynak": f"{mesnevi['baslik']} ({pasaj['baslik']})",
                        "metin": pasaj["metin"],
                        "anlam": pasaj["anlam"]
                    })

        # Mensur eserlerde ara
        for me in self.mensur_eserler:
            if kelime_lower in me.get("metin", "").lower() or kelime_lower in me.get("ozet", "").lower():
                sonuclar.append({
                    "tur": "Mensur Eser",
                    "kaynak": me["baslik"],
                    "metin": me.get("metin", "")[:200] + "...",
                    "anlam": me.get("ozet", "")
                })

        # Rübâilerde ara
        for r in self.rubailer:
            if kelime_lower in r.get("metin", "").lower() or kelime_lower in r.get("anlam", "").lower():
                sonuclar.append({
                    "tur": r.get("tur", "Rübâi"),
                    "kaynak": f"{r.get('tur', 'Rübâi')} #{r.get('no', 1)}",
                    "metin": r.get("metin", ""),
                    "anlam": r.get("anlam", "")
                })

        # Lügatte ara
        for kavram, aciklama in self.lugat.items():
            if kelime_lower in kavram.lower() or kelime_lower in aciklama.lower():
                sonuclar.append({
                    "tur": "Lügat Kavramı",
                    "kaynak": f"Kavram: {kavram}",
                    "metin": kavram,
                    "anlam": aciklama
                })

        return sonuclar

    def lugat_sorgula(self, kavram: str) -> Optional[str]:
        """Sözlükten kavram anlamını döner."""
        k_low = kavram.lower().strip()
        for k, v in self.lugat.items():
            if k.lower() == k_low or k_low in k.lower():
                return v
        return None

    def quiz_getir(self, adet: int = 5) -> List[Dict[str, Any]]:
        """Bilgi yarışması için rastgele soru seti döner."""
        sorular = list(self.quiz_sorulari)
        random.shuffle(sorular)
        return sorular[:adet]

    def aruz_tahmin(self, misra: str) -> Dict[str, Any]:
        """
        Verilen bir mısranın hece yapısını (açık/kapalı) sezgisel olarak çözümler
        ve klasik aruz kalıplarıyla eşleştirir.
        """
        temiz = re.sub(r"[^\w\sâîûÂÎÛ']", "", misra.strip())
        kelimeler = temiz.split()
        if not kelimeler:
            return {"hata": "Mısra boş olamaz."}

        unluler = set("aeıioöuüAEIİOÖUÜâîûÂÎÛ")
        uzun_unluler = set("âîûÂÎÛ")

        hece_sembolleri: List[str] = []
        heceler_listesi: List[str] = []

        for k_idx, kelime in enumerate(kelimeler):
            word_heceler = hecele(kelime)
            for h_idx, hece in enumerate(word_heceler):
                is_last_in_line = (k_idx == len(kelimeler) - 1 and h_idx == len(word_heceler) - 1)
                if is_last_in_line:
                    hece_sembolleri.append("-")
                elif any(c in uzun_unluler for c in hece):
                    hece_sembolleri.append("-")
                elif hece[-1] in unluler:
                    hece_sembolleri.append(".")
                else:
                    hece_sembolleri.append("-")
                heceler_listesi.append(hece)

        cikarilan_kaliplar = " ".join(hece_sembolleri)

        en_iyi_eslesme = None
        en_yuksek_skor = -1.0

        for kalip in self.aruz_kaliplari:
            sembol_str = kalip["sembol"].replace(" / ", " ").replace(" ", "")
            hece_str = "".join(hece_sembolleri)

            min_len = min(len(sembol_str), len(hece_str))
            if min_len == 0:
                continue
            eslesen = sum(1 for a, b in zip(sembol_str[:min_len], hece_str[:min_len]) if a == b)
            skor = (eslesen / max(len(sembol_str), len(hece_str))) * 100

            if skor > en_yuksek_skor:
                en_yuksek_skor = skor
                en_iyi_eslesme = kalip

        return {
            "misra": misra,
            "heceler": heceler_listesi,
            "semboller": hece_sembolleri,
            "desen": cikarilan_kaliplar,
            "tahmin_edilen_kalip": en_iyi_eslesme["kalip"] if en_iyi_eslesme else "Bilinmiyor",
            "kalip_adi": en_iyi_eslesme["ad"] if en_iyi_eslesme else "Serbest",
            "benzerlik_orani": f"%{en_yuksek_skor:.1f}" if en_iyi_eslesme else "%0"
        }

    def istatistikler(self) -> Dict[str, Any]:
        """Külliyat istatistiklerini hesaplar."""
        toplam_gazel_beyit = sum(len(g.get("beyitler", [])) for g in self.gazeller)
        toplam_sk_beyit = len(self.su_kasidesi.get("beyitler", []))
        toplam_mesnevi_pasaj = sum(len(m.get("pasajlar", [])) for m in self.mesneviler)
        toplam_rubai = len(self.rubailer)
        toplam_soz = len(self.hikmetli_sozler)
        toplam_kavram = len(self.lugat)
        toplam_quiz = len(self.quiz_sorulari)

        sanat_sayilari: Dict[str, int] = {}
        for g in self.gazeller:
            for b in g.get("beyitler", []):
                for s in b.get("sanatlar", []):
                    sanat_sayilari[s] = sanat_sayilari.get(s, 0) + 1
        for b in self.su_kasidesi.get("beyitler", []):
            for s in b.get("sanatlar", []):
                sanat_sayilari[s] = sanat_sayilari.get(s, 0) + 1

        top_sanatlar = sorted(sanat_sayilari.items(), key=lambda x: x[1], reverse=True)[:5]

        return {
            "sair": self.sair.get("ad"),
            "gazel_sayisi": len(self.gazeller),
            "gazel_beyit_toplami": toplam_gazel_beyit,
            "su_kasidesi_beyit_sayisi": toplam_sk_beyit,
            "mesnevi_sayisi": len(self.mesneviler),
            "mensur_eser_sayisi": len(self.mensur_eserler),
            "rubai_sayisi": toplam_rubai,
            "hikmetli_soz_sayisi": toplam_soz,
            "lugat_kavram_sayisi": toplam_kavram,
            "quiz_soru_sayisi": toplam_quiz,
            "en_cok_kullanilan_sanatlar": top_sanatlar
        }

    def disa_aktar(self, format_tipi: str = "json") -> str:
        """Külliyat verilerini dışa aktarır (json veya markdown)."""
        if format_tipi.lower() == "json":
            return json.dumps(self.data, ensure_ascii=False, indent=2)
        elif format_tipi.lower() in ("md", "markdown"):
            lines = [
                f"# {self.sair.get('ad', 'Fuzûlî')} Külliyâtı",
                f"> **Unvan:** {self.sair.get('unvan', '')}",
                f"> **Muhit:** {self.sair.get('muhit', '')}",
                "",
                "## Gazeller",
                ""
            ]
            for g in self.gazeller:
                lines.append(f"### {g['baslik']}")
                lines.append(f"- **Vezin:** {g.get('vezin')}")
                for b in g.get("beyitler", []):
                    lines.append(f"> **[{b['no']}]** {b['turkce']}")
                    lines.append(f"> *Anlamı:* {b['sadelesmis']}")
                lines.append("")
            lines.append("## Su Kasîdesi (Tam Metin 32 Beyit)")
            for b in self.su_kasidesi.get("beyitler", []):
                lines.append(f"> **[{b['no']}]** {b['metin']}")
                lines.append(f"> *Anlamı:* {b['anlam']}")
            return "\n".join(lines)
        return ""
