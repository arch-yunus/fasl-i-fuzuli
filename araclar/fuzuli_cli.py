#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fasl-ı Fuzûlî - Terminal Komut Satırı Arayüzü (CLI) & Edebiyat Motoru

Kullanım:
    fuzuli fal
    fuzuli gazel [id/index]
    fuzuli su-kasidesi [beyit_no|tum]
    fuzuli eser [leyla-vu-mecnun|beng-u-bade|sikayetname|hadikatus-sueda|rind-u-zahid|dibace]
    fuzuli rubai [no]
    fuzuli aruz [misra]
    fuzuli yarisma
    fuzuli istatistik
    fuzuli ara [kelime]
    fuzuli lugat [kavram]
    fuzuli interaktif
    fuzuli export [json|markdown]
    fuzuli bilgi
"""

import sys
import argparse
from typing import Optional

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

# Terminal Colors & Styling
class Colors:
    HEADER = "\033[95m"
    BLUE = "\033[94m"
    CYAN = "\033[96m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    RED = "\033[91m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"
    DIM = "\033[2m"
    END = "\033[0m"

BANNER = f"""{Colors.CYAN}{Colors.BOLD}
╔═══════════════════════════════════════════════════════════════════╗
║                            فصل فضولی                              ║
║                    F A S L - I   F U Z Û L Î                      ║
║          Divan-ı Fuzûlî Dijital Külliyâtı & Edebiyat Motoru       ║
║                     Molla Fuzûlî (1483 - 1556)                    ║
╚═══════════════════════════════════════════════════════════════════╝{Colors.END}"""


def cmd_fal(corpus: FuzuliCorpus):
    fal = corpus.fal_cek()
    tur = fal.get("tur", "Beyit")
    kaynak = fal.get("kaynak", "Fuzûlî Külliyâtı")
    vezin = fal.get("vezin", "")
    sanatlar = fal.get("sanatlar", [])
    metin = fal.get("metin", "")
    sadelesmis = fal.get("sadelesmis", "")

    print(f"\n{Colors.YELLOW}{Colors.BOLD}✨ [ FÂL-I FUZÛLÎ / GÜNÜN HİKMETLİ BEYTİ & TEFE'ÜLÜ ] ✨{Colors.END}")
    print(f"{Colors.DIM}{'─' * 65}{Colors.END}")
    print(f"{Colors.BOLD}Tür / Kaynak  :{Colors.END} {Colors.GREEN}{tur} - {kaynak}{Colors.END}")
    if vezin:
        print(f"{Colors.BOLD}Aruz Vezni    :{Colors.END} {vezin}")
    if sanatlar:
        print(f"{Colors.BOLD}Edebî Sanatlar:{Colors.END} {', '.join(sanatlar)}")
    print(f"{Colors.DIM}{'─' * 65}{Colors.END}")
    print(f"\n  {Colors.BOLD}{Colors.CYAN}\"{metin}\"{Colors.END}\n")
    print(f"{Colors.DIM}{'─' * 65}{Colors.END}")
    print(f"{Colors.BOLD}Şerh / Günümüz Türkçesi:{Colors.END}\n  {sadelesmis}\n")


def cmd_gazel(corpus: FuzuliCorpus, query: Optional[str] = None):
    if not query:
        print(f"\n{Colors.CYAN}{Colors.BOLD}📜 [ MEVCUT GAZEL LİSTESİ ]{Colors.END}")
        print("─" * 65)
        for i, g in enumerate(corpus.gazeller, 1):
            tema = g.get('tema', 'Aşk ve İrfan')
            print(f"  {Colors.YELLOW}[{i}]{Colors.END} {Colors.BOLD}{g['id']}{Colors.END} ➔ {g['baslik']} {Colors.DIM}({tema}){Colors.END}")
        print("\nBir gazeli incelemek için: python -m araclar.fuzuli_cli gazel [no/id]")
        return

    gazel = None
    if query.isdigit():
        idx = int(query) - 1
        gazel = corpus.gazel_getir(idx)
    else:
        gazel = corpus.gazel_getir(query)

    if not gazel:
        print(f"\n{Colors.RED}[-] '{query}' ile eşleşen gazel bulunamadı.{Colors.END}")
        return

    print(f"\n{Colors.GREEN}{Colors.BOLD}📖 [ {gazel['baslik'].upper()} ]{Colors.END}")
    print(f"{Colors.BOLD}Vezin:{Colors.END} {gazel.get('vezin', 'Bilinmiyor')} | {Colors.BOLD}Redif:{Colors.END} {gazel.get('redif', 'Yok')}")
    print(f"{Colors.BOLD}Tema :{Colors.END} {gazel.get('tema', 'Aşk')}")
    print("═" * 65)

    for b in gazel.get("beyitler", []):
        print(f"\n{Colors.YELLOW}{Colors.BOLD}[Beyit #{b['no']}]{Colors.END}")
        print(f"  {Colors.CYAN}{b['turkce']}{Colors.END}")
        print(f"  {Colors.DIM}➔ Anlamı:{Colors.END} {b['sadelesmis']}")
        if b.get("sanatlar"):
            print(f"  {Colors.DIM}➔ Sanatlar:{Colors.END} {', '.join(b['sanatlar'])}")
    print("\n" + "═" * 65)


def cmd_su_kasidesi(corpus: FuzuliCorpus, query: Optional[str] = None):
    sk = corpus.su_kasidesi
    print(f"\n{Colors.CYAN}{Colors.BOLD}🌊 [ {sk.get('baslik', 'Su Kasîdesi')} ]{Colors.END}")
    print(f"Vezin: {sk.get('vezin', '')} | Redif: {sk.get('redif', 'su')} | Toplam: {sk.get('toplam_beyit', 32)} Beyit")
    print(f"{Colors.DIM}{sk.get('aciklama', '')}{Colors.END}")
    print("═" * 65)

    beyitler = sk.get("beyitler", [])
    if not beyitler:
        print("Beyit verisi bulunamadı.")
        return

    if query and query.lower() == "tum":
        for b in beyitler:
            print(f"\n{Colors.YELLOW}[Beyit #{b['no']}]{Colors.END} {b['metin']}")
            print(f"  {Colors.DIM}➔ Anlamı:{Colors.END} {b['anlam']}")
            if b.get("sanatlar"):
                print(f"  {Colors.DIM}➔ Sanatlar:{Colors.END} {', '.join(b['sanatlar'])}")
    elif query and query.isdigit():
        b_no = int(query)
        bulunan = [b for b in beyitler if b["no"] == b_no]
        if bulunan:
            b = bulunan[0]
            print(f"\n{Colors.YELLOW}{Colors.BOLD}[Beyit #{b['no']}]{Colors.END}")
            print(f"  {Colors.CYAN}{b['metin']}{Colors.END}")
            print(f"  {Colors.DIM}➔ Anlamı:{Colors.END} {b['anlam']}")
            if b.get("sanatlar"):
                print(f"  {Colors.DIM}➔ Sanatlar:{Colors.END} {', '.join(b['sanatlar'])}")
        else:
            print(f"\n{Colors.RED}[!] #{b_no} numaralı beyit bulunamadı (1-{len(beyitler)} arası deneyin).{Colors.END}")
    else:
        secme_nolar = [1, 7, 16, 31]
        print(f"{Colors.DIM}(Tüm 32 beyit için: 'su-kasidesi tum' / Tek beyit için: 'su-kasidesi [1-32]'){Colors.END}\n")
        for b in beyitler:
            if b["no"] in secme_nolar:
                print(f"{Colors.YELLOW}[Beyit #{b['no']}]{Colors.END} {Colors.CYAN}{b['metin']}{Colors.END}")
                print(f"  {Colors.DIM}➔ Anlamı:{Colors.END} {b['anlam']}\n")
    print("═" * 65)


def cmd_eser(corpus: FuzuliCorpus, eser_id: Optional[str] = None):
    if not eser_id:
        print(f"\n{Colors.CYAN}{Colors.BOLD}📚 [ MEVCUT ESERLER LİSTESİ ]{Colors.END}")
        print("─" * 65)
        print(f"{Colors.BOLD}Mesnevîler:{Colors.END}")
        for m in corpus.mesneviler:
            print(f"  • {Colors.YELLOW}{m['id']}{Colors.END} ➔ {m['baslik']} ({m.get('toplam_beyit')} Beyit)")
        print(f"\n{Colors.BOLD}Mensur ve Mektup Eserleri:{Colors.END}")
        for me in corpus.mensur_eserler:
            print(f"  • {Colors.YELLOW}{me['id']}{Colors.END} ➔ {me['baslik']} ({me.get('tur')})")
        print("\nBir eseri okumak için: python -m araclar.fuzuli_cli eser [eser_id]")
        return

    sonuc = corpus.eser_getir(eser_id)
    if not sonuc:
        print(f"\n{Colors.RED}[-] '{eser_id}' eseri bulunamadı.{Colors.END}")
        return

    veri = sonuc["veri"]
    print(f"\n{Colors.GREEN}{Colors.BOLD}📜 [ {veri.get('baslik', '').upper()} ]{Colors.END}")
    if veri.get("vezin"):
        print(f"{Colors.BOLD}Vezin :{Colors.END} {veri.get('vezin')}")
    if veri.get("tur"):
        print(f"{Colors.BOLD}Türü  :{Colors.END} {veri.get('tur')}")
    if veri.get("ozet"):
        print(f"{Colors.BOLD}Özet  :{Colors.END} {veri.get('ozet')}")
    print("═" * 65)

    if "pasajlar" in veri:
        for p in veri["pasajlar"]:
            print(f"\n{Colors.YELLOW}{Colors.BOLD}◆ {p['baslik']} ◆{Colors.END}")
            print(f"{Colors.CYAN}{p['metin']}{Colors.END}")
            print(f"{Colors.DIM}➔ Anlamı:{Colors.END} {p['anlam']}")
    elif "metin" in veri:
        print(f"\n{Colors.CYAN}{veri['metin']}{Colors.END}")
    print("\n" + "═" * 65)


def cmd_rubai(corpus: FuzuliCorpus, query: Optional[str] = None):
    print(f"\n{Colors.CYAN}{Colors.BOLD}💎 [ HİKEMÎ VE TASAVVUFÎ RÜBÂİLER & KIT'ALAR ]{Colors.END}")
    print("═" * 65)
    rubailer = corpus.rubailer
    if not rubailer:
        print("Rübâi verisi bulunamadı.")
        return

    if query and query.isdigit():
        idx = int(query) - 1
        if 0 <= idx < len(rubailer):
            r = rubailer[idx]
            print(f"\n{Colors.YELLOW}{Colors.BOLD}[{r.get('tur', 'Rübâi')} #{r.get('no', idx+1)}]{Colors.END} Vezin: {r.get('vezin')}")
            print(f"{Colors.CYAN}{r['metin']}{Colors.END}")
            print(f"{Colors.DIM}➔ Şerh:{Colors.END} {r['anlam']}")
        else:
            print(f"{Colors.RED}Geçersiz numara. Toplam {len(rubailer)} adet rübâi/kıt'a mevcut.{Colors.END}")
    else:
        for r in rubailer:
            print(f"\n{Colors.YELLOW}{Colors.BOLD}[{r.get('tur', 'Rübâi')} #{r.get('no')}]{Colors.END} Vezin: {r.get('vezin')}")
            print(f"{Colors.CYAN}{r['metin']}{Colors.END}")
            print(f"{Colors.DIM}➔ Şerh:{Colors.END} {r['anlam']}\n")
    print("═" * 65)


def cmd_aruz(corpus: FuzuliCorpus, misra: str):
    if not misra:
        print(f"{Colors.RED}Lütfen analiz edilecek bir mısra giriniz.{Colors.END}")
        return

    print(f"\n{Colors.CYAN}{Colors.BOLD}⚖️  [ ARUZ VEZNİ SEZGİSEL ANALİZ MOTORU ]{Colors.END}")
    print("═" * 65)
    sonuc = corpus.aruz_tahmin(misra)
    if "hata" in sonuc:
        print(f"{Colors.RED}{sonuc['hata']}{Colors.END}")
        return

    print(f"{Colors.BOLD}Mısra               :{Colors.END} {sonuc['misra']}")
    print(f"{Colors.BOLD}Heceler             :{Colors.END} {' - '.join(sonuc['heceler'])}")
    print(f"{Colors.BOLD}Açık/Kapalı Deseni  :{Colors.END} {Colors.YELLOW}{sonuc['desen']}{Colors.END} ( . = Açık, - = Kapalı )")
    print(f"{Colors.BOLD}Tahmin Edilen Kalıp :{Colors.END} {Colors.GREEN}{Colors.BOLD}{sonuc['tahmin_edilen_kalip']}{Colors.END}")
    print(f"{Colors.BOLD}Bahr / Kalıp Adı    :{Colors.END} {sonuc['kalip_adi']}")
    print(f"{Colors.BOLD}Eşleşme Oranı       :{Colors.END} {sonuc['benzerlik_orani']}")
    print("═" * 65)


def cmd_yarisma(corpus: FuzuliCorpus):
    sorular = corpus.quiz_getir(5)
    if not sorular:
        print(f"{Colors.RED}Soru bankası boş.{Colors.END}")
        return

    print(f"\n{Colors.YELLOW}{Colors.BOLD}🎯 ═════════ FUZÛLÎ EDEBİYAT BİLGİ YARIŞMASI ═════════ 🎯{Colors.END}")
    print(f"{Colors.DIM}5 soru sorulacaktır. Cevabınızı (A, B, C, D) olarak giriniz.{Colors.END}\n")

    dogru_sayisi = 0
    for i, s in enumerate(sorular, 1):
        print(f"{Colors.CYAN}{Colors.BOLD}Soru {i}/5:{Colors.END} {Colors.BOLD}{s['soru']}{Colors.END}")
        for sec in s["secenekler"]:
            print(f"  {sec}")

        while True:
            cevap = input(f"\n{Colors.YELLOW}Cevabınız (A/B/C/D) veya (Q: Çıkış): {Colors.END}").strip().upper()
            if cevap in ("A", "B", "C", "D", "Q"):
                break
            print("Lütfen geçerli bir seçenek giriniz (A, B, C, D).")

        if cevap == "Q":
            print("\nYarışmadan çıkıldı.")
            return

        harf_indeks = {"A": 0, "B": 1, "C": 2, "D": 3}
        kullanici_secimi = harf_indeks[cevap]

        if kullanici_secimi == s["dogru_cevap"]:
            print(f"{Colors.GREEN}✔ TEBRİKLER! Doğru cevap.{Colors.END}")
            dogru_sayisi += 1
        else:
            dogru_harf = list(harf_indeks.keys())[s["dogru_cevap"]]
            print(f"{Colors.RED}✘ YANLIŞ! Doğru cevap: {dogru_harf}{Colors.END}")

        print(f"{Colors.DIM}Açıklama: {s.get('aciklama', '')}{Colors.END}\n" + "─" * 50 + "\n")

    puan = dogru_sayisi * 20
    print(f"{Colors.YELLOW}{Colors.BOLD}══════════════ YARIŞMA SONUCU ══════════════{Colors.END}")
    print(f"Toplam Soru : 5")
    print(f"Doğru Cevap : {dogru_sayisi}")
    print(f"Yanlış Cevap: {5 - dogru_sayisi}")
    print(f"Puanınız    : {Colors.GREEN}{Colors.BOLD}{puan} / 100{Colors.END}")
    if puan == 100:
        print(f"{Colors.GREEN}🌟 Harika! Tam bir Fuzûlî ve Dîvân Edebiyatı Mütehassısısınız!{Colors.END}")
    elif puan >= 60:
        print(f"{Colors.CYAN}👏 Gayet başarılı bir edebi birikim.{Colors.END}")
    else:
        print(f"{Colors.YELLOW}📚 Külliyatı biraz daha inceleyerek bilginizi tazeleyebilirsiniz.{Colors.END}")
    print("════════════════════════════════════════════\n")


def cmd_istatistik(corpus: FuzuliCorpus):
    ist = corpus.istatistikler()
    print(f"\n{Colors.CYAN}{Colors.BOLD}📊 [ FASL-I FUZÛLÎ KÜLLİYÂTI İSTATİSTİKLERİ ]{Colors.END}")
    print("═" * 65)
    print(f"  {Colors.BOLD}Şâir-i Âzam                :{Colors.END} {ist['sair']}")
    print(f"  {Colors.BOLD}Seçkin Gazel Sayısı        :{Colors.END} {ist['gazel_sayisi']} gazel ({ist['gazel_beyit_toplami']} beyit)")
    print(f"  {Colors.BOLD}Su Kasîdesi Beyit Sayısı   :{Colors.END} {ist['su_kasidesi_beyit_sayisi']} beyit (Tam Metin)")
    print(f"  {Colors.BOLD}Mesnevî Sayısı             :{Colors.END} {ist['mesnevi_sayisi']}")
    print(f"  {Colors.BOLD}Mensur Eser Sayısı         :{Colors.END} {ist['mensur_eser_sayisi']}")
    print(f"  {Colors.BOLD}Rübâi ve Kıt'a Sayısı      :{Colors.END} {ist['rubai_sayisi']}")
    print(f"  {Colors.BOLD}Hikmetli Söz Sayısı        :{Colors.END} {ist['hikmetli_soz_sayisi']}")
    print(f"  {Colors.BOLD}Lügat Kavram Sayısı        :{Colors.END} {ist['lugat_kavram_sayisi']} kavram")
    print(f"  {Colors.BOLD}Soru Bankası Kapasitesi    :{Colors.END} {ist['quiz_soru_sayisi']} soru")
    print("─" * 65)
    print(f"  {Colors.BOLD}En Çok Kullanılan Sanatlar :{Colors.END}")
    for sanat, adet in ist["en_cok_kullanilan_sanatlar"]:
        print(f"    • {sanat:25}: {adet} kez")
    print("═" * 65 + "\n")


def cmd_ara(corpus: FuzuliCorpus, kelime: str):
    print(f"\n{Colors.CYAN}{Colors.BOLD}🔍 [ ARAMA SONUÇLARI: '{kelime}' ]{Colors.END}")
    print("═" * 65)
    sonuclar = corpus.ara(kelime)
    if not sonuclar:
        print("  Eşleşen beyit, kavram veya pasaj bulunamadı.")
        return

    for i, s in enumerate(sonuclar, 1):
        print(f"\n{Colors.YELLOW}[{i}] {s['tur']} - {s['kaynak']}{Colors.END}")
        print(f"  {Colors.BOLD}Metin   :{Colors.END} {s['metin']}")
        print(f"  {Colors.DIM}Açıklama:{Colors.END} {s['anlam']}")
    print("\n" + "═" * 65)


def cmd_lugat(corpus: FuzuliCorpus, kavram: Optional[str] = None):
    if not kavram:
        print(f"\n{Colors.CYAN}{Colors.BOLD}📖 [ FUZÛLÎ DÎVÂN LÜGATİ ({len(corpus.lugat)} Kavram) ]{Colors.END}")
        print("═" * 65)
        for k, v in sorted(corpus.lugat.items()):
            print(f"  • {Colors.YELLOW}{k:18}{Colors.END}: {v}")
        return

    anlam = corpus.lugat_sorgula(kavram)
    if anlam:
        print(f"\n{Colors.GREEN}{Colors.BOLD}[+] [ KAVRAM: {kavram} ]{Colors.END}")
        print("═" * 65)
        print(f"  {anlam}\n")
    else:
        print(f"\n{Colors.RED}[-] '{kavram}' lügatte bulunamadı.{Colors.END}")


def cmd_export(corpus: FuzuliCorpus, format_tipi: str = "json"):
    cikti = corpus.disa_aktar(format_tipi)
    print(cikti)


def cmd_interaktif(corpus: FuzuliCorpus):
    print(BANNER)
    print(f"\n{Colors.GREEN}✨ İnteraktif Fuzûlî Kabuğuna Hoş Geldiniz! (Çıkmak için 'q' veya 'exit' yazın){Colors.END}")
    print("Komutlar: fal, gazel [no], su, eser [ad], aruz [misra], yarisma, ara [kelime], lugat [kelime], istatistik\n")

    while True:
        try:
            girdi = input(f"{Colors.CYAN}fuzuli> {Colors.END}").strip()
            if not girdi:
                continue
            if girdi.lower() in ("q", "exit", "quit", "cikis"):
                print("Fasl-ı Fuzûlî oturumu sonlandırıldı. Selâmetle!")
                break

            parcalar = girdi.split(maxsplit=1)
            komut = parcalar[0].lower()
            arg = parcalar[1] if len(parcalar) > 1 else None

            if komut == "fal":
                cmd_fal(corpus)
            elif komut == "gazel":
                cmd_gazel(corpus, arg)
            elif komut in ("su", "su-kasidesi"):
                cmd_su_kasidesi(corpus, arg)
            elif komut == "eser":
                cmd_eser(corpus, arg)
            elif komut == "rubai":
                cmd_rubai(corpus, arg)
            elif komut == "aruz":
                cmd_aruz(corpus, arg or "")
            elif komut in ("yarisma", "quiz"):
                cmd_yarisma(corpus)
            elif komut in ("istatistik", "stats"):
                cmd_istatistik(corpus)
            elif komut == "ara":
                if arg:
                    cmd_ara(corpus, arg)
                else:
                    print("Lütfen aranacak kelimeyi belirtin: ara mecnun")
            elif komut == "lugat":
                cmd_lugat(corpus, arg)
            elif komut == "help":
                print("Komutlar: fal, gazel, su, eser, rubai, aruz, yarisma, ara, lugat, istatistik, exit")
            else:
                print(f"Bilinmeyen komut: '{komut}'. Yardım için 'help' yazabilirsiniz.")
        except (KeyboardInterrupt, EOFError):
            print("\nOturum sonlandırıldı.")
            break


def cmd_bilgi(corpus: FuzuliCorpus):
    sair = corpus.sair
    print(f"\n{Colors.CYAN}{Colors.BOLD}ℹ️  [ ŞÂİR VE KÜLLİYÂT HAKKINDA ]{Colors.END}")
    print("═" * 65)
    print(f"  {Colors.BOLD}Şâir                 :{Colors.END} {sair.get('ad')}")
    print(f"  {Colors.BOLD}Unvânlar             :{Colors.END} {sair.get('unvan')}")
    print(f"  {Colors.BOLD}Doğum & Muhit        :{Colors.END} {sair.get('dogum')} | {sair.get('muhit')}")
    print(f"  {Colors.BOLD}Vefat                :{Colors.END} {sair.get('vefat')}")
    print(f"  {Colors.BOLD}Eser Dilleri         :{Colors.END} {', '.join(sair.get('diller', []))}")
    print(f"  {Colors.BOLD}Gazel Sayısı (Seçkin):{Colors.END} {len(corpus.gazeller)}")
    print(f"  {Colors.BOLD}Lügat Kavram Sayısı  :{Colors.END} {len(corpus.lugat)}")
    print(f"\n  {Colors.YELLOW}{Colors.BOLD}\"Şi'r-i bî-ilm esâssız dîvâr olur ve esâssız dîvâr gâyetde bî-i'tibâr olur.\"{Colors.END}")
    print("═" * 65 + "\n")


def main():
    parser = argparse.ArgumentParser(
        description="Fasl-ı Fuzûlî - Edebiyat ve Külliyât Motoru",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )
    subparsers = parser.add_subparsers(dest="command", help="Alt komutlar")

    # fal
    subparsers.add_parser("fal", help="Fâl-i Fuzûlî: Rastgele hikmetli beyit ve tahlili çek")

    # gazel
    p_gazel = subparsers.add_parser("gazel", help="Gazel listele veya seçilen gazeli oku")
    p_gazel.add_argument("query", nargs="?", default=None, help="Gazel ID veya sıra no")

    # su-kasidesi
    p_sk = subparsers.add_parser("su-kasidesi", help="Su Kasîdesi 32 beyit incele")
    p_sk.add_argument("query", nargs="?", default=None, help="Beyit no (1-32) veya 'tum'")

    # eser
    p_eser = subparsers.add_parser("eser", help="Mesnevî veya Mensur eserleri oku")
    p_eser.add_argument("eser_id", nargs="?", default=None, help="Eser ID (örn. sikayetname, leyla-vu-mecnun)")

    # rubai
    p_rubai = subparsers.add_parser("rubai", help="Rübâi ve kıt'aları listele veya oku")
    p_rubai.add_argument("query", nargs="?", default=None, help="Rübâi sıra numarası")

    # aruz
    p_aruz = subparsers.add_parser("aruz", help="Mısranın aruz veznini otomatik tespit et")
    p_aruz.add_argument("misra", help="Analiz edilecek mısra")

    # yarisma
    subparsers.add_parser("yarisma", help="Fuzûlî Edebiyat Bilgi Yarışmasını başlat")

    # istatistik
    subparsers.add_parser("istatistik", help="Külliyât istatistiklerini görüntüle")

    # ara
    p_ara = subparsers.add_parser("ara", help="Külliyatta kelime veya mazmun ara")
    p_ara.add_argument("kelime", help="Aranacak kelime")

    # lugat
    p_lugat = subparsers.add_parser("lugat", help="Fuzûlî lügatinden kavram sorgula")
    p_lugat.add_argument("kavram", nargs="?", default=None, help="Kavram adı")

    # interaktif
    subparsers.add_parser("interaktif", help="Etkileşimli Terminal Kabuk Modu")

    # export
    p_exp = subparsers.add_parser("export", help="Külliyatı JSON veya Markdown olarak dışa aktar")
    p_exp.add_argument("format", nargs="?", default="json", choices=["json", "markdown", "md"], help="Dışa aktarma formatı")

    # bilgi
    subparsers.add_parser("bilgi", help="Fuzûlî ve külliyât hakkında genel bilgi")

    args = parser.parse_args()

    if not args.command:
        print(BANNER)
        parser.print_help()
        sys.exit(0)

    corpus = FuzuliCorpus()

    if args.command == "fal":
        cmd_fal(corpus)
    elif args.command == "gazel":
        cmd_gazel(corpus, args.query)
    elif args.command == "su-kasidesi":
        cmd_su_kasidesi(corpus, args.query)
    elif args.command == "eser":
        cmd_eser(corpus, args.eser_id)
    elif args.command == "rubai":
        cmd_rubai(corpus, args.query)
    elif args.command == "aruz":
        cmd_aruz(corpus, args.misra)
    elif args.command == "yarisma":
        cmd_yarisma(corpus)
    elif args.command == "istatistik":
        cmd_istatistik(corpus)
    elif args.command == "ara":
        cmd_ara(corpus, args.kelime)
    elif args.command == "lugat":
        cmd_lugat(corpus, args.kavram)
    elif args.command == "interaktif":
        cmd_interaktif(corpus)
    elif args.command == "export":
        cmd_export(corpus, args.format)
    elif args.command == "bilgi":
        cmd_bilgi(corpus)


if __name__ == "__main__":
    main()
