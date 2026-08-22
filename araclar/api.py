"""
Fasl-ı Fuzûlî Külliyâtı - Veri Tabanı ve Sorgulama API'si
"""

import json
import random
from pathlib import Path
from typing import List, Dict, Any, Optional

CORPUS_PATH = Path(__file__).parent / "corpus.json"


def load_corpus() -> Dict[str, Any]:
    """Corpus JSON veri tabanını yükler."""
    with open(CORPUS_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


class FuzuliCorpus:
    """Fuzûlî Külliyâtı sorgulama motoru."""

    def __init__(self, data: Optional[Dict[str, Any]] = None):
        self.data = data or load_corpus()

    @property
    def sair(self) -> Dict[str, str]:
        return self.data.get("sair", {})

    @property
    def gazeller(self) -> List[Dict[str, Any]]:
        return self.data.get("gazeller", [])

    @property
    def su_kasidesi(self) -> Dict[str, Any]:
        return self.data.get("su_kasidesi", {})

    @property
    def hikmetli_sozler(self) -> List[Dict[str, str]]:
        return self.data.get("hikmetli_sozler", [])

    @property
    def lugat(self) -> Dict[str, str]:
        return self.data.get("lugat", {})

    def fal_cek(self) -> Dict[str, Any]:
        """
        Fâl-i Fuzûlî: Külliyattan rastgele hikmetli bir beyit ve tahlilini döner.
        """
        havuz = []
        for gazel in self.gazeller:
            for beyit in gazel["beyitler"]:
                havuz.append({
                    "kaynak": f"Gazel: {gazel['baslik']} (Beyit #{beyit['no']})",
                    "vezin": gazel.get("vezin", ""),
                    "metin": beyit["turkce"],
                    "sadelesmis": beyit["sadelesmis"],
                    "sanatlar": beyit.get("sanatlar", [])
                })
        for soz in self.hikmetli_sozler:
            havuz.append({
                "kaynak": soz["kaynak"],
                "vezin": "Serbest / Hikemî",
                "metin": soz["soz"],
                "sadelesmis": soz["anlam"],
                "sanatlar": ["Hikmet", "İrşad"]
            })
        for kb in self.su_kasidesi.get("secme_beyitler", []):
            havuz.append({
                "kaynak": f"Su Kasîdesi (Beyit #{kb['no']})",
                "vezin": self.su_kasidesi.get("vezin", ""),
                "metin": kb["metin"],
                "sadelesmis": kb["anlam"],
                "sanatlar": ["Na't-ı Şerif"]
            })
        return random.choice(havuz)

    def gazel_getir(self, gazel_id_or_index: Any) -> Optional[Dict[str, Any]]:
        """ID veya sıra numarasına göre gazel getirir."""
        if isinstance(gazel_id_or_index, int):
            if 0 <= gazel_id_or_index < len(self.gazeller):
                return self.gazeller[gazel_id_or_index]
            return None
        
        query = str(gazel_id_or_index).lower()
        for gazel in self.gazeller:
            if gazel["id"] == query or query in gazel["baslik"].lower():
                return gazel
        return None

    def ara(self, kelime: str) -> List[Dict[str, Any]]:
        """Külliyat içinde kelime veya kavram araması yapar."""
        sonuclar = []
        kelime_lower = kelime.lower()

        # Gazellerde ara
        for gazel in self.gazeller:
            for beyit in gazel["beyitler"]:
                if kelime_lower in beyit["turkce"].lower() or kelime_lower in beyit["sadelesmis"].lower():
                    sonuclar.append({
                        "tur": "Gazel Beyti",
                        "kaynak": f"{gazel['baslik']} (Beyit #{beyit['no']})",
                        "metin": beyit["turkce"],
                        "anlam": beyit["sadelesmis"]
                    })

        # Su Kasidesinde ara
        for kb in self.su_kasidesi.get("secme_beyitler", []):
            if kelime_lower in kb["metin"].lower() or kelime_lower in kb["anlam"].lower():
                sonuclar.append({
                    "tur": "Su Kasîdesi",
                    "kaynak": f"Su Kasîdesi #{kb['no']}",
                    "metin": kb["metin"],
                    "anlam": kb["anlam"]
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
        for k, v in self.lugat.items():
            if k.lower() == kavram.lower():
                return v
        return None
