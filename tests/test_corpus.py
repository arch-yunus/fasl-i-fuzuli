"""
Fasl-ı Fuzûlî Külliyâtı - Veri Tabanı ve API Test Süiti
"""

import sys
from pathlib import Path

# Add project root to sys.path
sys.path.insert(0, str(Path(__file__).parent.parent))

import unittest
from araclar.api import FuzuliCorpus, load_corpus, hecele


class TestFuzuliCorpus(unittest.TestCase):
    def setUp(self):
        self.corpus = FuzuliCorpus()

    def test_corpus_loading(self):
        """Corpus verilerinin eksiksiz yüklendiğini doğrular."""
        self.assertIn("sair", self.corpus.data)
        self.assertIn("gazeller", self.corpus.data)
        self.assertIn("su_kasidesi", self.corpus.data)
        self.assertIn("mesneviler", self.corpus.data)
        self.assertIn("mensur_eserler", self.corpus.data)
        self.assertIn("rubailer_ve_kitalar", self.corpus.data)
        self.assertIn("hikmetli_sozler", self.corpus.data)
        self.assertIn("lugat", self.corpus.data)
        self.assertIn("aruz_kaliplari", self.corpus.data)
        self.assertIn("quiz_sorulari", self.corpus.data)

        self.assertTrue(len(self.corpus.gazeller) >= 6)
        self.assertEqual(len(self.corpus.su_kasidesi.get("beyitler", [])), 32)
        self.assertTrue(len(self.corpus.lugat) >= 40)

    def test_fal_cek(self):
        """Fâl-i Fuzûlî fonksiyonunun geçerli bir beyit/söz döndüğünü test eder."""
        for _ in range(10):
            fal = self.corpus.fal_cek()
            self.assertIn("metin", fal)
            self.assertIn("sadelesmis", fal)
            self.assertIn("kaynak", fal)
            self.assertTrue(len(fal["metin"]) > 0)

    def test_gazel_getir(self):
        """ID ve index ile gazel getirme işlevini test eder."""
        g1 = self.corpus.gazel_getir("beni-candan-usandirdi")
        self.assertIsNotNone(g1)
        self.assertEqual(g1["id"], "beni-candan-usandirdi")

        g_can = self.corpus.gazel_getir("can-verme-gam-i-aska")
        self.assertIsNotNone(g_can)

        g0 = self.corpus.gazel_getir(0)
        self.assertIsNotNone(g0)

        none_g = self.corpus.gazel_getir("olmayan-gazel-xyz")
        self.assertIsNone(none_g)

    def test_eser_getir(self):
        """Mesnevi, mensur ve kaside getirme fonksiyonunu test eder."""
        sikayet = self.corpus.eser_getir("sikayetname")
        self.assertIsNotNone(sikayet)
        self.assertEqual(sikayet["tur"], "mensur")
        self.assertIn("rüşvet", sikayet["veri"]["metin"])

        leyla = self.corpus.eser_getir("leyla-vu-mecnun")
        self.assertIsNotNone(leyla)
        self.assertEqual(leyla["tur"], "mesnevi")

        sk = self.corpus.eser_getir("su-kasidesi")
        self.assertIsNotNone(sk)
        self.assertEqual(sk["tur"], "kaside")

    def test_arama_motoru(self):
        """Külliyatta kelime ve kavram aramasını test eder."""
        sonuclar = self.corpus.ara("cânân")
        self.assertTrue(len(sonuclar) > 0)

        sonuclar_su = self.corpus.ara("odlara")
        self.assertTrue(len(sonuclar_su) > 0)

        sonuclar_mecnun = self.corpus.ara("Mecnûn")
        self.assertTrue(len(sonuclar_mecnun) >= 2)

        bos = self.corpus.ara("")
        self.assertEqual(len(bos), 0)

    def test_lugat_sorgusu(self):
        """Lügat sorgusunu test eder."""
        aciklama = self.corpus.lugat_sorgula("Rind")
        self.assertIsNotNone(aciklama)
        self.assertTrue("gönül" in aciklama or "ihlas" in aciklama)

        kavram_gamze = self.corpus.lugat_sorgula("Gamze")
        self.assertIsNotNone(kavram_gamze)

        none_k = self.corpus.lugat_sorgula("bilinmeyen-kelime-xyz")
        self.assertIsNone(none_k)

    def test_istatistikler(self):
        """İstatistik fonksiyonunun doğru metrikler döndüğünü test eder."""
        stats = self.corpus.istatistikler()
        self.assertEqual(stats["gazel_sayisi"], 6)
        self.assertEqual(stats["su_kasidesi_beyit_sayisi"], 32)
        self.assertTrue(stats["lugat_kavram_sayisi"] >= 40)
        self.assertTrue(len(stats["en_cok_kullanilan_sanatlar"]) > 0)

    def test_disa_aktar(self):
        """Dışa aktarma fonksiyonunu test eder."""
        json_out = self.corpus.disa_aktar("json")
        self.assertTrue(json_out.startswith("{"))
        self.assertIn("Fuzûlî", json_out)

        md_out = self.corpus.disa_aktar("markdown")
        self.assertIn("# Molla Muhammed bin Süleyman Fuzûlî Külliyâtı", md_out)
        self.assertIn("Su Kasîdesi", md_out)


if __name__ == "__main__":
    unittest.main()
