"""
Fasl-ı Fuzûlî - CLI Komut Satırı Arayüzü Uçtan Uca Test Süiti
"""

import sys
import subprocess
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

import unittest


class TestCLIExecution(unittest.TestCase):
    def run_cli(self, args):
        cmd = [sys.executable, "-m", "araclar.fuzuli_cli"] + args
        res = subprocess.run(
            cmd,
            cwd=str(Path(__file__).parent.parent),
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            encoding="utf-8"
        )
        return res

    def test_cli_fal(self):
        res = self.run_cli(["fal"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("FÂL-I FUZÛLÎ", res.stdout)

    def test_cli_gazel(self):
        res = self.run_cli(["gazel"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("MEVCUT GAZEL LİSTESİ", res.stdout)

        res_g1 = self.run_cli(["gazel", "1"])
        self.assertEqual(res_g1.returncode, 0)
        self.assertIn("BENI CANDAN USANDIRDI", res_g1.stdout.upper())

    def test_cli_su_kasidesi(self):
        res = self.run_cli(["su-kasidesi"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("Su Kasîdesi", res.stdout)

        res_b31 = self.run_cli(["su-kasidesi", "31"])
        self.assertEqual(res_b31.returncode, 0)
        self.assertIn("Dest-bûsi", res_b31.stdout)

    def test_cli_eser(self):
        res = self.run_cli(["eser", "sikayetname"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("ŞIKÂYETNÂME", res.stdout.upper())
        self.assertIn("rüşvet", res.stdout)

    def test_cli_istatistik(self):
        res = self.run_cli(["istatistik"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("FASL-I FUZÛLÎ KÜLLİYÂTI İSTATİSTİKLERİ", res.stdout)

    def test_cli_ara(self):
        res = self.run_cli(["ara", "mecnun"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("ARAMA SONUÇLARI", res.stdout)

    def test_cli_lugat(self):
        res = self.run_cli(["lugat", "Rind"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("KAVRAM: Rind", res.stdout)


if __name__ == "__main__":
    unittest.main()
