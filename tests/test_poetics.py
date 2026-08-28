"""
Fasl-ı Fuzûlî - Poetik Analiz, Kafiye/Redif, Taktî' ve Edebî Sanat Test Süiti
"""

import sys
from pathlib import Path

# Add project root to sys.path
sys.path.insert(0, str(Path(__file__).parent.parent))

import unittest
from araclar.api import FuzuliCorpus, norm_text


class TestPoeticsEngine(unittest.TestCase):
    def setUp(self):
        self.corpus = FuzuliCorpus()

    def test_kafiye_redif_analiz(self):
        """Kafiye ve redif tahlil motorunu test eder."""
        m1 = "Beni cândan usandırdı cefâdan yâr usanmaz mı"
        m2 = "Felekler yandı âhımdan murâdım şem'i yanmaz mı"
        res = self.corpus.kafiye_redif_analiz(m1, m2)

        self.assertNotIn("hata", res)
        self.assertIn("maz", res["redif"])
        self.assertIn("mı", res["redif"])
        self.assertIn(res["kafiye"], ["an", "anmaz"])
        self.assertIn(res["kafiye_turu"], ["Tam Kafiye", "Zengin Kafiye"])
        self.assertIn(res["revi"], ["n", "z"])

    def test_kafiye_redif_sozcuk_redifi(self):
        """Kelime halindeki redif tespitini (Su Kasidesi) test eder."""
        m1 = "Sâçma ey göz eşkden gönlümdeki odlara su"
        m2 = "Kim bu denlü tutuşan odlara kılmaz çâre su"
        res = self.corpus.kafiye_redif_analiz(m1, m2)

        self.assertNotIn("hata", res)
        self.assertIn("su", res["redif"])

    def test_kafiye_gecersiz_girdi(self):
        """Boş mısra durumunda hata yakalamayı test eder."""
        res = self.corpus.kafiye_redif_analiz("", "   ")
        self.assertIn("hata", res)

    def test_takti_motoru(self):
        """Aruz tef'ilelerine göre hece bölümleme (taktî') işlevini test eder."""
        misra = "Beni cândan usandırdı cefâdan yâr usanmaz mı"
        res = self.corpus.takti_et(misra)

        self.assertNotIn("hata", res)
        self.assertIn("takti_metni", res)
        self.assertTrue(len(res["cuzler"]) >= 3)
        self.assertTrue(len(res["takti_metni"]) > 0)
        self.assertIn("/", res["takti_metni"])

        # İlk cüzün hecelerini kontrol et
        cuz0 = res["cuzler"][0]
        self.assertIn("tefile", cuz0)
        self.assertIn("heceler", cuz0)
        self.assertTrue(len(cuz0["heceler"]) > 0)

    def test_edebi_sanat_analiz_tenasup_istifham(self):
        """Tenasüp ve İstifham sanatlarının tespitini test eder."""
        beyit = "Kamu bîmârına cânân devâ-yı derd eder ihsân / Niçin kılmaz bana dermân beni bîmâr sanmaz mı"
        res = self.corpus.edebi_sanat_analiz(beyit)

        sanat_adlari = [s["sanat"] for s in res["sanatlar"]]
        self.assertIn("Tenasüp", sanat_adlari)
        self.assertIn("İstifham", sanat_adlari)

    def test_edebi_sanat_analiz_tecrid(self):
        """Şairin mahlasına seslenmesi (Tecrid) tespitini test eder."""
        beyit = "Fuzûlî rind-i şeydâdır hemîşe halka rüsvâdır"
        res = self.corpus.edebi_sanat_analiz(beyit)

        sanat_adlari = [s["sanat"] for s in res["sanatlar"]]
        self.assertIn("Tecrid", sanat_adlari)

    def test_edebi_sanat_analiz_tezat(self):
        """Tezat (ateş/su veya zıtlıklar) tespitini test eder."""
        beyit = "Sâçma ey göz eşkden gönlümdeki odlara su"
        res = self.corpus.edebi_sanat_analiz(beyit)

        sanat_adlari = [s["sanat"] for s in res["sanatlar"]]
        self.assertIn("Tezat", sanat_adlari)

    def test_tezkireler(self):
        """Tarihî tezkire kayıtlarının sorgulanmasını test eder."""
        tezkireler = self.corpus.tezkireler
        self.assertEqual(len(tezkireler), 5)

        # Ahdi araması
        ahdi_res = self.corpus.tezkire_getir("ahdi")
        self.assertTrue(len(ahdi_res) >= 1)
        self.assertIn("Ahdî", ahdi_res[0]["yazar"])

        # Latifi araması
        latifi_res = self.corpus.tezkire_getir("latifi")
        self.assertTrue(len(latifi_res) >= 1)

    def test_norm_text(self):
        """Şapkalı/aksanlı harf normalizasyonunu test eder."""
        self.assertEqual(norm_text("Ahdî"), "ahdi")
        self.assertEqual(norm_text("Fuzûlî"), "fuzuli")
        self.assertEqual(norm_text("Âşiyân"), "asiyan")


if __name__ == "__main__":
    unittest.main()
