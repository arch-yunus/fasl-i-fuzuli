"""
Fasl-ı Fuzûlî Külliyâtı - Veri Tabanı, Poetik Analiz ve Sorgulama API'si
"""

import json
import random
import re
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple, Set

CORPUS_PATH = Path(__file__).parent / "corpus.json"
WEB_DIR = Path(__file__).parent.parent / "web"


def norm_text(s: str) -> str:
    """Arama ve sorgularda şapkalı/aksanlı harfleri yumuşatarak eşleşmeyi artırır."""
    if not s:
        return ""
    trans = str.maketrans("âîûÂÎÛıİşŞçÇğĞöÖüÜ", "aiuaiuiissccggoouu")
    return s.lower().translate(trans)


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


# Edebi Sanat Analizi İçin Referans Sözlük ve Kümeler
TEZAT_CIFTLERI = [
    ({"can", "ten"}, "Can (ruh) ve ten (beden) zıtlığı"),
    ({"yâr", "ağyâr", "agyar"}, "Yâr (sevgili) ve ağyâr (yabancılar/düşmanlar) zıtlığı"),
    ({"vuslat", "hicran", "firkat"}, "Vuslat (kavuşma) ve hicran (ayrılık) zıtlığı"),
    ({"gece", "gündüz", "şeb", "ruz"}, "Gece ve gündüz zıtlığı"),
    ({"ağlamak", "gülmek", "giryan", "handan", "buka", "hande"}, "Ağlamak ve gülmek zıtlığı"),
    ({"zehir", "şeker", "zehr", "şehd"}, "Acı zehir ve tatlı şeker zıtlığı"),
    ({"ateş", "su", "od", "âb"}, "Ateş (od) ve su (âb) zıtlığı"),
    ({"gül", "har", "hâr", "diken"}, "Gül ve diken (hâr) zıtlığı"),
    ({"bimar", "bîmâr", "sıhhat", "derman", "şifa"}, "Hastalık ve sıhhat/derman zıtlığı"),
    ({"fakr", "devlet", "gına"}, "Fakirlik ve zenginlik/devlet zıtlığı"),
    ({"akıl", "akl", "cünun", "cinnet", "şeyda", "divane"}, "Akıl ve divanelik/çılgınlık zıtlığı"),
    ({"zâhid", "zahid", "rind"}, "Kaba sofu (zâhid) ve rind zıtlığı"),
    ({"gam", "safâ", "safa"}, "Gam ve safâ (huzur/neşe) zıtlığı"),
    ({"yanmak", "usanmak"}, "Yanmak (hararet) ve usanmak (bıkıp soğumak) tezat ve tenasübü"),
    ({"uyanmak", "uyarmak", "halk", "karâ baht"}, "Uyanmak ve uyarmak zıtlığı")
]

TENASUP_KUMELERI = [
    ("Su ve Gözyaşı Kümesi", {"su", "eşk", "çeşm", "bahr", "derya", "deryâ", "gözyaşı", "seyl", "ırmak", "cûy", "bulanmak"}),
    ("Ateş ve Hararet Kümesi", {"ateş", "âteş", "od", "şem'", "şem", "yanmak", "kül", "dûd", "şûle", "tâb", "harâret", "şeb-i hicrân"}),
    ("Gül ve Gülistan Kümesi", {"gül", "bülbül", "diken", "hâr", "bâğ", "çemen", "bostân", "gonca", "gül-berg", "fasl-ı gül"}),
    ("Tabip ve Derman Kümesi", {"tabîb", "tabib", "hekim", "derd", "derdim", "devâ", "dermân", "derman", "bîmâr", "maraz", "şifâ"}),
    ("Meyhane ve Rindlik Kümesi", {"mey", "bâde", "sâkî", "sâkıyâ", "câm", "kadeh", "hum", "harâbât", "mest", "sermest", "pîr-i mugân"})
]

ISTIFHAM_EDATLARI = ["mı", "mi", "mu", "mü", "nedür", "nedir", "kim", "kanda", "nice", "niçin", "hangi", "aceb"]
NIDA_EDATLARI = ["ey", "yâ", "ayâ", "heyhât", "yâ rab", "habîbim", "sâkıyâ"]
MUBALAGA_KALIPLARI = ["felekler yandı", "taş deler", "âlem tutuştu", "kan döker", "halkı uyârır", "efgānım"]


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

    @property
    def tezkireler(self) -> List[Dict[str, Any]]:
        return self.data.get("tezkireler", [])

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

    def tezkire_getir(self, query: Optional[str] = None) -> List[Dict[str, Any]]:
        """Şuara tezkirelerindeki Fuzûlî bahislerini döner."""
        if not query:
            return self.tezkireler

        q = norm_text(query.strip())
        return [
            t for t in self.tezkireler
            if q in norm_text(t.get("yazar", "")) or q in norm_text(t.get("eser", "")) or q in norm_text(t.get("metin", "")) or q in norm_text(t.get("onemi", ""))
        ]

    def ara(self, kelime: str) -> List[Dict[str, Any]]:
        """Külliyat genelinde arama yapar."""
        sonuclar: List[Dict[str, Any]] = []
        kelime_norm = norm_text(kelime.strip())
        if not kelime_norm:
            return sonuclar

        # Gazellerde ara
        for gazel in self.gazeller:
            for beyit in gazel.get("beyitler", []):
                if kelime_norm in norm_text(beyit["turkce"]) or kelime_norm in norm_text(beyit["sadelesmis"]):
                    sonuclar.append({
                        "tur": "Gazel Beyti",
                        "kaynak": f"{gazel['baslik']} (Beyit #{beyit['no']})",
                        "metin": beyit["turkce"],
                        "anlam": beyit["sadelesmis"]
                    })

        # Su Kasidesinde ara
        for beyit in self.su_kasidesi.get("beyitler", []):
            if kelime_norm in norm_text(beyit["metin"]) or kelime_norm in norm_text(beyit["anlam"]):
                sonuclar.append({
                    "tur": "Su Kasîdesi",
                    "kaynak": f"Su Kasîdesi #{beyit['no']}",
                    "metin": beyit["metin"],
                    "anlam": beyit["anlam"]
                })

        # Mesnevilerde ara
        for mesnevi in self.mesneviler:
            for pasaj in mesnevi.get("pasajlar", []):
                if kelime_norm in norm_text(pasaj["metin"]) or kelime_norm in norm_text(pasaj["anlam"]):
                    sonuclar.append({
                        "tur": "Mesnevî",
                        "kaynak": f"{mesnevi['baslik']} ({pasaj['baslik']})",
                        "metin": pasaj["metin"],
                        "anlam": pasaj["anlam"]
                    })

        # Mensur eserlerde ara
        for me in self.mensur_eserler:
            if kelime_norm in norm_text(me.get("metin", "")) or kelime_norm in norm_text(me.get("ozet", "")):
                sonuclar.append({
                    "tur": "Mensur Eser",
                    "kaynak": me["baslik"],
                    "metin": me.get("metin", "")[:200] + "...",
                    "anlam": me.get("ozet", "")
                })

        # Rübâilerde ara
        for r in self.rubailer:
            if kelime_norm in norm_text(r.get("metin", "")) or kelime_norm in norm_text(r.get("anlam", "")):
                sonuclar.append({
                    "tur": r.get("tur", "Rübâi"),
                    "kaynak": f"{r.get('tur', 'Rübâi')} #{r.get('no', 1)}",
                    "metin": r.get("metin", ""),
                    "anlam": r.get("anlam", "")
                })

        # Tezkirelerde ara
        for t in self.tezkireler:
            if kelime_norm in norm_text(t.get("metin", "")) or kelime_norm in norm_text(t.get("yazar", "")):
                sonuclar.append({
                    "tur": "Tezkire Şerhi",
                    "kaynak": f"{t['yazar']} - {t['eser']}",
                    "metin": t["metin"],
                    "anlam": t.get("anahtar_tespit", "")
                })

        # Lügatte ara
        for kavram, aciklama in self.lugat.items():
            if kelime_norm in norm_text(kavram) or kelime_norm in norm_text(aciklama):
                sonuclar.append({
                    "tur": "Lügat Kavramı",
                    "kaynak": f"Kavram: {kavram}",
                    "metin": kavram,
                    "anlam": aciklama
                })

        return sonuclar

    def lugat_sorgula(self, kavram: str) -> Optional[str]:
        """Sözlükten kavram anlamını döner."""
        k_norm = norm_text(kavram.strip())
        for k, v in self.lugat.items():
            if k_norm == norm_text(k) or k_norm in norm_text(k):
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

    def takti_et(self, misra: str, kalip_str: Optional[str] = None) -> Dict[str, Any]:
        """
        Mısranın hecelerini ve açık/kapalı yapısını Aruz vezninin tef'ile (cüz)
        bölümlerine göre takti' eder (parçalara ayırır).
        """
        aruz_res = self.aruz_tahmin(misra)
        if "hata" in aruz_res:
            return aruz_res

        secilen_kalip = kalip_str or aruz_res["tahmin_edilen_kalip"]
        cuz_adlari = [c.strip() for c in secilen_kalip.split("/")]

        # Kalıbın tef'ile desenlerini bul
        kalip_obj = next((k for k in self.aruz_kaliplari if k["kalip"] == secilen_kalip), None)
        if kalip_obj and "sembol" in kalip_obj:
            cuz_desenleri = [d.strip() for d in kalip_obj["sembol"].split("/")]
        else:
            cuz_desenleri = [". - - -"] * len(cuz_adlari)

        heceler = aruz_res["heceler"]
        semboller = aruz_res["semboller"]

        cuzler = []
        curr_h_idx = 0

        for i, cuz_ad in enumerate(cuz_adlari):
            desen = cuz_desenleri[i] if i < len(cuz_desenleri) else ""
            hece_adedi = len(desen.replace(" ", ""))
            cuz_heceler = heceler[curr_h_idx : curr_h_idx + hece_adedi]
            cuz_semboller = semboller[curr_h_idx : curr_h_idx + hece_adedi]
            curr_h_idx += hece_adedi

            cuzler.append({
                "tefile": cuz_ad,
                "hedef_desen": desen,
                "heceler": cuz_heceler,
                "metin": "-".join(cuz_heceler),
                "semboller": cuz_semboller
            })

        if curr_h_idx < len(heceler) and cuzler:
            kalan = heceler[curr_h_idx:]
            cuzler[-1]["heceler"].extend(kalan)
            cuzler[-1]["metin"] = "-".join(cuzler[-1]["heceler"])

        takti_metni = " / ".join(c["metin"] for c in cuzler if c["metin"])

        return {
            "misra": misra,
            "kalip_adi": secilen_kalip,
            "bahr": aruz_res["kalip_adi"],
            "uyum_orani": aruz_res["benzerlik_orani"],
            "cuzler": cuzler,
            "takti_metni": takti_metni
        }

    def kafiye_redif_analiz(self, misra1: str, misra2: str) -> Dict[str, Any]:
        """
        Verilen iki mısra veya beyit arasında kafiye ve redif tahlili yapar.
        """
        t1 = re.sub(r"[^\w\sâîûÂÎÛ']", "", misra1.strip())
        t2 = re.sub(r"[^\w\sâîûÂÎÛ']", "", misra2.strip())
        k1 = t1.split()
        k2 = t2.split()
        if not k1 or not k2:
            return {"hata": "Her iki mısra da geçerli kelimeler içermelidir."}

        # 1. Sözcük redifi (Mısra sonundaki ortak kelimeler)
        idx1 = len(k1) - 1
        idx2 = len(k2) - 1
        ortak_kelimeler = []
        while idx1 >= 0 and idx2 >= 0 and k1[idx1].lower() == k2[idx2].lower():
            ortak_kelimeler.insert(0, k1[idx1])
            idx1 -= 1
            idx2 -= 1

        word_redif = " ".join(ortak_kelimeler) if ortak_kelimeler else ""

        w1 = k1[idx1].lower() if idx1 >= 0 else ""
        w2 = k2[idx2].lower() if idx2 >= 0 else ""

        # Kalan kelimelerin sonundaki ortak sesler
        suffix = []
        p1 = len(w1) - 1
        p2 = len(w2) - 1
        while p1 >= 0 and p2 >= 0 and w1[p1] == w2[p2]:
            suffix.append(w1[p1])
            p1 -= 1
            p2 -= 1
        suffix_str = "".join(reversed(suffix))

        ek_redifler = [
            "ındadır", "indedir", "ımdadır", "imdedir", "ından", "inden", "ında", "inde",
            "mazmı", "mezmi", "sanmı", "senmi", "maz mı", "mez mi", "san mı", "sen mi",
            "durur", "dürür", "iken", "içün", "ler", "lar", "den", "dan", "ten", "tan",
            "tek", "dür", "dir", "dur", "dır", "mı", "mi", "mu", "mü", "maz", "mez", "ı", "i", "u", "ü"
        ]

        ek_redif = ""
        kafiye_sesi = suffix_str

        if suffix_str:
            for ek in sorted(ek_redifler, key=len, reverse=True):
                if suffix_str.endswith(ek) and len(suffix_str) > len(ek):
                    ek_redif = ek
                    kafiye_sesi = suffix_str[:-len(ek)]
                    break

        toplam_redif_parcalar = []
        if ek_redif:
            toplam_redif_parcalar.append(ek_redif)
        if word_redif:
            toplam_redif_parcalar.append(word_redif)

        toplam_redif = " ".join(toplam_redif_parcalar) if toplam_redif_parcalar else "Yok (Yalın Kafiye)"

        if word_redif and not kafiye_sesi:
            if w1 and w2 and (w1[-1] == w2[-1] or (w1[-1] in "aeıioöuü" and w2[-1] in "aeıioöuü")):
                kafiye_sesi = w1[-1] if w1[-1] == w2[-1] else w1[-1] + "/" + w2[-1]

        uzun_unluler = set("âîûÂÎÛ")
        revi = kafiye_sesi[-1] if kafiye_sesi and kafiye_sesi != "Bulunamadı" else "-"
        ses_puani = len(kafiye_sesi)
        if any(c in uzun_unluler for c in kafiye_sesi):
            ses_puani += 1

        if ses_puani <= 1:
            kafiye_turu = "Yarım Kafiye"
        elif ses_puani == 2:
            kafiye_turu = "Tam Kafiye"
        else:
            kafiye_turu = "Zengin Kafiye"

        return {
            "misra1": misra1,
            "misra2": misra2,
            "redif": toplam_redif,
            "kafiye": kafiye_sesi or "Bulunamadı",
            "kafiye_turu": kafiye_turu,
            "revi": revi
        }

    def edebi_sanat_analiz(self, metin: str) -> Dict[str, Any]:
        """
        Verilen bir mısra veya beyitteki edebî sanatları (Tezat, Tenasüp,
        İstifham, Nidâ, Tecrid, Mübalağa) otomatik teşhis eder.
        """
        metin_temiz = re.sub(r"[^\w\sâîûÂÎÛ']", " ", metin.lower())
        kelimeler = set(metin_temiz.split())
        tam_metin_lower = metin.lower()

        bulunanlar = []

        # 1. Tezat
        for cift, aciklama in TEZAT_CIFTLERI:
            matches = [t for t in cift if any(t == w or (len(t) >= 2 and w.startswith(t)) for w in kelimeler)]
            if len(matches) >= 2:
                bulunanlar.append({
                    "sanat": "Tezat",
                    "kelimeler": matches,
                    "aciklama": aciklama
                })

        # 2. Tenasüp
        for kume_adi, kume_sozcukler in TENASUP_KUMELERI:
            matches = [t for t in kume_sozcukler if any(t == w or (len(t) >= 2 and w.startswith(t)) for w in kelimeler)]
            if len(matches) >= 2:
                bulunanlar.append({
                    "sanat": "Tenasüp",
                    "kume": kume_adi,
                    "kelimeler": matches,
                    "aciklama": f"{kume_adi} bağlamında manaca uyumlu sözcükler kullanılmıştır."
                })

        # 3. İstifham
        bulunan_sorular = [s for s in ISTIFHAM_EDATLARI if f" {s} " in f" {metin_temiz} "]
        if "?" in metin or bulunan_sorular:
            bulunanlar.append({
                "sanat": "İstifham",
                "kelimeler": bulunan_sorular or ["Soru Cümlesi / Edatı"],
                "aciklama": "Cevap beklemeden şairane hayret veya sitemle soru sorma sanatı."
            })

        # 4. Nidâ
        bulunan_nidalar = [n for n in NIDA_EDATLARI if n in tam_metin_lower]
        if bulunan_nidalar:
            bulunanlar.append({
                "sanat": "Nidâ",
                "kelimeler": bulunan_nidalar,
                "aciklama": "Coşkulu sesleniş ve hitap sanatı."
            })

        # 5. Tecrid
        if "fuzûlî" in tam_metin_lower or "fuzuli" in tam_metin_lower:
            bulunanlar.append({
                "sanat": "Tecrid",
                "kelimeler": ["Fuzûlî"],
                "aciklama": "Şairin kendi benliğinden soyunarak mahlasına seslenmesi."
            })

        # 6. Mübalağa
        bulunan_mubalagalar = [m for m in MUBALAGA_KALIPLARI if m in tam_metin_lower]
        if bulunan_mubalagalar:
            bulunanlar.append({
                "sanat": "Mübalağa",
                "kelimeler": bulunan_mubalagalar,
                "aciklama": "Izdırap ve aşk coşkusunu akıl sınırlarını aşacak derecede büyütme sanatı."
            })

        return {
            "metin": metin,
            "tespit_sayisi": len(bulunanlar),
            "sanatlar": bulunanlar
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
        toplam_tezkire = len(self.tezkireler)
        toplam_aruz = len(self.aruz_kaliplari)

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
            "tezkire_sayisi": toplam_tezkire,
            "aruz_kalip_sayisi": toplam_aruz,
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
            lines.append("")
            lines.append("## Tarihî Tezkireler")
            for t in self.tezkireler:
                lines.append(f"### {t['yazar']} - {t['eser']}")
                lines.append(f"> {t['metin']}")
                lines.append(f"> *Anahtar Tespit:* {t.get('anahtar_tespit', '')}")
                lines.append("")
            return "\n".join(lines)
        return ""
