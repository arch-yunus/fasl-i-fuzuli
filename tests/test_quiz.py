"""
Fasl-ı Fuzûlî - Bilgi Yarışması Soru Bankası Test Süiti
"""

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

import unittest
from araclar.api import FuzuliCorpus


class TestQuizEngine(unittest.TestCase):
    def setUp(self):
        self.corpus = FuzuliCorpus()

    def test_quiz_sorulari_yapisi(self):
        """Tüm soruların geçerli bir şablona sahip olduğunu doğrular."""
        sorular = self.corpus.quiz_sorulari
        self.assertTrue(len(sorular) >= 8)

        for s in sorular:
            self.assertIn("id", s)
            self.assertIn("soru", s)
            self.assertIn("secenekler", s)
            self.assertIn("dogru_cevap", s)
            self.assertIn("aciklama", s)
            self.assertEqual(len(s["secenekler"]), 4)
            self.assertIn(s["dogru_cevap"], [0, 1, 2, 3])

    def test_quiz_getir(self):
        """Rastgele soru seti çekmeyi test eder."""
        set1 = self.corpus.quiz_getir(5)
        self.assertEqual(len(set1), 5)


if __name__ == "__main__":
    unittest.main()
