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

    def test_cli_takti(self):
        res = self.run_cli(["takti", "Beni cândan usandırdı cefâdan yâr usanmaz mı"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("ARUZ TAKTÎ'", res.stdout)
        self.assertIn("Tef'ile", res.stdout)

    def test_cli_kafiye(self):
        res = self.run_cli(["kafiye", "Beni cândan usandırdı cefâdan yâr usanmaz mı / Felekler yandı âhımdan murâdım şem'i yanmaz mı"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("KAFİYE VE REDİF ANALİZ RAPORU", res.stdout)
        self.assertIn("Redif", res.stdout)

    def test_cli_sanat(self):
        res = self.run_cli(["sanat", "Kamu bîmârına cânân devâ-yı derd eder ihsân / Niçin kılmaz bana dermân beni bîmâr sanmaz mı"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("EDEBÎ SANAT TEŞHİS VE TAHLİLİ", res.stdout)
        self.assertIn("Tenasüp", res.stdout)

    def test_cli_tezkire(self):
        res = self.run_cli(["tezkire", "ahdi"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("Ahdî", res.stdout)
        self.assertIn("Gülşen-i Şu'arâ", res.stdout)

    def test_cli_kart(self):
        res = self.run_cli(["kart"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("FASL-I FUZÛLÎ", res.stdout)

    def test_cli_musammat(self):
        res = self.run_cli(["musammat", "Şeb-i hicrân yanar cânım döker kan çeşm-i giryânım"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("MUSAMMAT GAZEL", res.stdout)
        self.assertIn("İç Kafiye", res.stdout)

    def test_cli_nazire(self):
        res = self.run_cli(["nazire", "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün"])
        self.assertEqual(res.returncode, 0)
        self.assertIn("NAZÎRE VE AKRABA BEYİTLER", res.stdout)


if __name__ == "__main__":
    unittest.main()

