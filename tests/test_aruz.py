"""
Fasl-ı Fuzûlî - Aruz Vezni ve Heceleme Test Süiti
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

import unittest
from araclar.api import FuzuliCorpus, hecele


class TestAruzEngine(unittest.TestCase):
    def setUp(self):
        self.corpus = FuzuliCorpus()

    def test_heceleme(self):
        """Türkçe ve Osmanlıca transkripsiyonlu kelimeleri doğru hecelediğini test eder."""
        self.assertEqual(hecele("Beni"), ["Be", "ni"])
        self.assertEqual(hecele("cândan"), ["cân", "dan"])
        self.assertEqual(hecele("usandırdı"), ["u", "san", "dır", "dı"])
        self.assertEqual(hecele("cefâdan"), ["ce", "fâ", "dan"])
        self.assertEqual(hecele("yâr"), ["yâr"])
        self.assertEqual(hecele("usanmaz"), ["u", "san", "maz"])
        self.assertEqual(hecele("mı"), ["mı"])

    def test_aruz_tahmin(self):
        """Mısranın aruz veznini ve açık/kapalı hece sembollerini test eder."""
        misra = "Beni cândan usandırdı cefâdan yâr usanmaz mı"
        res = self.corpus.aruz_tahmin(misra)
        self.assertNotIn("hata", res)
        self.assertEqual(res["misra"], misra)
        self.assertTrue(len(res["heceler"]) > 10)
        self.assertTrue(len(res["semboller"]) > 10)
        # Son hece kapalı (-) olmalı
        self.assertEqual(res["semboller"][-1], "-")

    def test_aruz_bos_misra(self):
        """Boş mısra kontrolü."""
        res = self.corpus.aruz_tahmin("   ")
        self.assertIn("hata", res)


if __name__ == "__main__":
    unittest.main()
