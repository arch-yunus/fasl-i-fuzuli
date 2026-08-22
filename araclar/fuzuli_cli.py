#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fasl-ı Fuzûlî - Terminal Komut Satırı Arayüzü (CLI)

Kullanım:
    python -m araclar.fuzuli_cli fal
    python -m araclar.fuzuli_cli gazel [id/index]
    python -m araclar.fuzuli_cli su-kasidesi [beyit_no]
    python -m araclar.fuzuli_cli ara [kelime]
    python -m araclar.fuzuli_cli lugat [kavram]
    python -m araclar.fuzuli_cli bilgi
"""

import sys
import io
import argparse

# Windows console UTF-8 safety
if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
if hasattr(sys.stderr, "reconfigure"):
    try:
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

from araclar.api import FuzuliCorpus

HEADER = """
=================================================================
                       فصل فضولی                                
                F A S L - I   F U Z U L I                       
        Divan-ı Fuzuli Dijital Kulliyatı & Edebiyat Motoru      
=================================================================
"""


def cmd_fal(corpus: FuzuliCorpus):
    fal = corpus.fal_cek()
    print("\n[*] [ FAL-I FUZULI / GUNUN HIKMETLI BEYTI ]")
    print("=" * 63)
    print(f"Kaynak  : {fal['kaynak']}")
    if fal.get("vezin"):
        print(f"Vezin   : {fal['vezin']}")
    if fal.get("sanatlar"):
        print(f"Sanatlar: {', '.join(fal.get('sanatlar', []))}")
    print("-" * 63)
    print(f"\n  \"{fal['metin']}\"\n")
    print("-" * 63)
    print(f"Serh / Anlamı:\n  {fal['sadelesmis']}\n")


def cmd_gazel(corpus: FuzuliCorpus, query: str = None):
    if not query:
        print("\n[*] [ MEVCUT GAZEL LISTESI ]")
        print("=" * 63)
        for i, g in enumerate(corpus.gazeller, 1):
            print(f"  [{i}] {g['id']} -> {g['baslik']}")
        print("\nBir gazeli okumak icin: python -m araclar.fuzuli_cli gazel [no/id]")
        return

    # Sayı mı yoksa ID mi?
    gazel = None
    if query.isdigit():
        idx = int(query) - 1
        gazel = corpus.gazel_getir(idx)
    else:
        gazel = corpus.gazel_getir(query)

    if not gazel:
        print(f"\n[-] '{query}' ile eslesen gazel bulunamadi.")
        return

    print(f"\n[+] [ {gazel['baslik'].upper()} ]")
    print(f"Vezin: {gazel.get('vezin', 'Bilinmiyor')}")
    print(f"Redif: {gazel.get('redif', 'Yok')}")
    print("=" * 63)

    for b in gazel["beyitler"]:
        print(f"\n[Beyit {b['no']}]")
        print(f"  {b['turkce']}")
        print(f"  -> Anlami: {b['sadelesmis']}")
        if b.get("sanatlar"):
            print(f"  -> Edebi Sanatlar: {', '.join(b['sanatlar'])}")
    print("\n" + "=" * 63)


def cmd_su_kasidesi(corpus: FuzuliCorpus, beyit_no: int = None):
    sk = corpus.su_kasidesi
    print(f"\n[~] [ {sk['baslik']} ]")
    print(f"Vezin: {sk['vezin']} | Redif: {sk['redif']}")
    print("=" * 63)

    secme = sk.get("secme_beyitler", [])
    if beyit_no is not None:
        bulunan = [b for b in secme if b["no"] == beyit_no]
        if bulunan:
            b = bulunan[0]
            print(f"\n[Beyit #{b['no']}]")
            print(f"  {b['metin']}")
            print(f"  -> Anlami: {b['anlam']}")
        else:
            print(f"\n[!] #{beyit_no} numarali beyit seckide yer almiyor (Tam metin icin: eserler/divan/kasideler/su-kasidesi.md).")
    else:
        for b in secme:
            print(f"\n[Beyit #{b['no']}]")
            print(f"  {b['metin']}")
            print(f"  -> Anlami: {b['anlam']}")
    print("\n" + "=" * 63)


def cmd_ara(corpus: FuzuliCorpus, kelime: str):
    print(f"\n[?] [ ARAMA SONUCLARI: '{kelime}' ]")
    print("=" * 63)
    sonuclar = corpus.ara(kelime)
    if not sonuclar:
        print("  Eslesen beyit veya kavram bulunamadi.")
        return

    for i, s in enumerate(sonuclar, 1):
        print(f"\n[{i}] {s['tur']} - {s['kaynak']}")
        print(f"  Metin: {s['metin']}")
        print(f"  Aciklama: {s['anlam']}")
    print("\n" + "=" * 63)


def cmd_lugat(corpus: FuzuliCorpus, kavram: str = None):
    if not kavram:
        print("\n[*] [ FUZULI DIVAN LUGATI ]")
        print("=" * 63)
        for k, v in corpus.lugat.items():
            print(f"  • {k:16}: {v}")
        return

    anlam = corpus.lugat_sorgula(kavram)
    if anlam:
        print(f"\n[+] [ KAVRAM: {kavram} ]")
        print("=" * 63)
        print(f"  {anlam}\n")
    else:
        print(f"\n[-] '{kavram}' lugatte bulunamadi.")


def cmd_bilgi(corpus: FuzuliCorpus):
    sair = corpus.sair
    print("\n[i] [ SAIR VE KULLIYAT HAKKINDA ]")
    print("=" * 63)
    print(f"  Sair                 : {sair.get('ad')}")
    print(f"  Unvan                : {sair.get('unvan')}")
    print(f"  Dogum                : {sair.get('dogum')}")
    print(f"  Vefat                : {sair.get('vefat')}")
    print(f"  Gazel Sayisi (Seckin): {len(corpus.gazeller)}")
    print(f"  Lugat Kavram Sayisi  : {len(corpus.lugat)}")
    print("\n  \"Si'r-i bi-ilm esassiz divar olur ve esassiz divar gayetde bi-i'tibar olur.\"")
    print("=" * 63 + "\n")


def main():
    parser = argparse.ArgumentParser(
        description="Fasl-ı Fuzuli - Edebiyat ve Kulliyat CLI Motoru",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    subparsers = parser.add_subparsers(dest="command", help="Alt komutlar")

    # fal
    subparsers.add_parser("fal", help="Fal-i Fuzuli: Rastgele hikmetli beyit ve tahlili cek")

    # gazel
    p_gazel = subparsers.add_parser("gazel", help="Gazel listele veya secilen gazeli oku")
    p_gazel.add_argument("query", nargs="?", default=None, help="Gazel ID veya sira no")

    # su-kasidesi
    p_sk = subparsers.add_parser("su-kasidesi", help="Su Kasidesi secme beyitlerini incele")
    p_sk.add_argument("beyit_no", nargs="?", type=int, default=None, help="Beyit numarasi")

    # ara
    p_ara = subparsers.add_parser("ara", help="Kulliyatta kelime veya mazmun ara")
    p_ara.add_argument("kelime", help="Aranacak kelime")

    # lugat
    p_lugat = subparsers.add_parser("lugat", help="Fuzuli lugatinden kavram sorgula")
    p_lugat.add_argument("kavram", nargs="?", default=None, help="Kavram adi")

    # bilgi
    subparsers.add_parser("bilgi", help="Fuzuli ve kulliyat hakkinda genel bilgi")

    args = parser.parse_args()

    if not args.command:
        print(HEADER)
        parser.print_help()
        sys.exit(0)

    corpus = FuzuliCorpus()

    if args.command == "fal":
        cmd_fal(corpus)
    elif args.command == "gazel":
        cmd_gazel(corpus, args.query)
    elif args.command == "su-kasidesi":
        cmd_su_kasidesi(corpus, args.beyit_no)
    elif args.command == "ara":
        cmd_ara(corpus, args.kelime)
    elif args.command == "lugat":
        cmd_lugat(corpus, args.kavram)
    elif args.command == "bilgi":
        cmd_bilgi(corpus)


if __name__ == "__main__":
    main()
