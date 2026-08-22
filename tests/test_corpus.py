"""
Fasl-ı Fuzûlî Külliyâtı - Test Süiti
"""

import sys
from pathlib import Path

# Add project root to sys.path
sys.path.insert(0, str(Path(__file__).parent.parent))

import unittest
from araclar.api import FuzuliCorpus, load_corpus


class TestFuzuliCorpus(unittest.TestCase):
    def setUp(self):
        self.corpus = FuzuliCorpus()

    def test_corpus_loading(self):
        """Corpus verilerinin eksiksiz yüklendiğini doğrular."""
        self.assertIn("sair", self.corpus.data)
        self.assertIn("gazeller", self.corpus.data)
        self.assertIn("su_kasidesi", self.corpus.data)
        self.assertIn("lugat", self.corpus.data)
        self.assertTrue(len(self.corpus.gazeller) >= 5)

    def test_fal_cek(self):
        """Fâl-i Fuzûlî fonksiyonunun geçerli bir beyit döndüğünü test eder."""
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

        g0 = self.corpus.gazel_getir(0)
        self.assertIsNotNone(g0)

        none_g = self.corpus.gazel_getir("olmayan-gazel")
        self.assertIsNone(none_g)

    def test_arama_motoru(self):
        """Külliyatta kelime aramasını test eder."""
        sonuclar = self.corpus.ara("cânân")
        self.assertTrue(len(sonuclar) > 0)

        sonuclar_su = self.corpus.ara("odlara")
        self.assertTrue(len(sonuclar_su) > 0)

    def test_lugat_sorgusu(self):
        """Lügat sorgusunu test eder."""
        aciklama = self.corpus.lugat_sorgula("Rind")
        self.assertIsNotNone(aciklama)
        self.assertTrue("gönül" in aciklama or "ihlas" in aciklama)

        none_k = self.corpus.lugat_sorgula("bilinmeyen-kelime-xyz")
        self.assertIsNone(none_k)


if __name__ == "__main__":
    unittest.main()
