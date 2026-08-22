# Fasl-ı Fuzûlî (فصل فضولی)
### Molla Muhammed bin Süleyman Fuzûlî Dijital Külliyâtı & Edebiyat Platformu

<p align="center">
  <img src="https://img.shields.io/badge/Edebiyat-Dîvân_Şiiri-darkred?style=for-the-badge" alt="Divan Edebiyati"/>
  <img src="https://img.shields.io/badge/Şâir-Molla_Fuzûlî_(1483--1556)-gold?style=for-the-badge" alt="Fuzuli"/>
  <img src="https://img.shields.io/badge/Dil-Osmanlıca_|_Azerbaycan_Türkçesi_|_Türkçe-blue?style=for-the-badge" alt="Diller"/>
  <img src="https://img.shields.io/badge/Python-3.9+-informational?style=for-the-badge&logo=python" alt="Python 3"/>
  <img src="https://img.shields.io/badge/Lisans-MIT-success?style=for-the-badge" alt="MIT License"/>
</p>

---

> ### *"Şi'r-i bî-ilm esâssız dîvâr olur ve esâssız dîvâr gâyetde bî-i'tibâr olur."*  
> — **Fuzûlî (Türkçe Dîvân Dîbâcesi)**

---

## 📜 Külliyât Hakkında

**Fasl-ı Fuzûlî**, klasik Türk edebiyatının ve Doğu dünyasının en büyük lirik şairi olan **Molla Muhammed bin Süleyman Fuzûlî**'nin (1483–1556) manzum, mensur ve mektup türündeki başyapıtlarını; akademik tenkitli metinler, beyit beyit şerhler, aruz vezinleri, edebi sanatlar ve açıklamalı sözlükler eşliğinde dijital ortama taşıyan kapsamlı bir açık kaynak edebiyat deposu ve sorgulama platformudur.

Bu depo hem klasik edebiyat araştırmacıları ve edebiyatseverler hem de dijital beşeri bilimler (digital humanities) ve yazılım geliştiriciler için yaşayan bir başvuru kaynağı olarak inşa edilmiştir.

---

## 🗂️ Külliyât İçerik Ağacı

```
fasl-i-fuzuli/
│
├── biyografi-ve-tahlil/           # Şâirin Hayatı, Sanatı, Şiir Felsefesi ve Kaynakça
│   ├── hayati-ve-sanati.md        # Ayrıntılı biyografi, edebi dönemi, Bağdat ve Kerbela muhiti
│   ├── ilim-ve-siir-felsefesi.md  # Fuzûlî'nin poetikası: Şiir ve İlim dengesi
│   └── kaynakca.md                # Tenkitli basımlar (Gölpınarlı, Tarlan, İpekten vb.)
│
├── eserler/                       # Metinler, Transkripsiyon, Aruz, Şerh ve Tahliller
│   ├── divan/                     # Türkçe Dîvân ve Seçkin Şiirler
│   │   ├── dibace.md              # Türkçe Dîvân Mukaddimesi (Asıl Metin + Çeviri + İnceleme)
│   │   ├── gazeller/              # Başyapıt Gazeller (Beyit Beyit Şerh ve Sanatlar)
│   │   │   ├── beni-candan-usandirdi.md
│   │   │   ├── oyle-sermestem.md
│   │   │   ├── can-verme-gam-i-aska.md
│   │   │   ├── mende-mecnundan-fuzun.md
│   │   │   ├── dost-bi-vefa.md
│   │   │   └── ask-derdiyle-hosem.md
│   │   ├── kasideler/
│   │   │   └── su-kasidesi.md     # 32 Beyit Tam Metin Na't-ı Şerif, Vezin ve Şerh
│   │   └── rubailer-ve-kitalar/
│   │       └── secme-rubailer.md  # Hikemî ve Tasavvufî Rübâi/Kıt'a Seçkisi
│   ├── mesneviler/
│   │   ├── leyla-vu-mecnun.md     # Doğu Edebiyatının En Lirik Mesnevisi Tahlili
│   │   └── beng-u-bade.md         # Şarap ve Afyon Münazarası (Alegorik Hiciv)
│   └── mensur-ve-mektup/
│       ├── sikayetname.md         # "Selâm verdim rüşvet değildür deyu almadılar..." Tam Metin
│       ├── hadikatus-sueda.md     # Kerbelâ Makteli Şaheseri
│       └── rind-u-zahid.md        # Rind ile Zâhid Münazarası
│
├── lugat-ve-mazmunlar/            # Istılahlar, Mazmunlar ve Belâgat
│   ├── fuzuli-sozlugu.md          # Divan Istılahları ve Tasavvufi Kavramlar Sözlüğü
│   ├── mazmunlar-ve-remizler.md   # Gül-Bülbül, Şem'-Pervâne, Ok-Gamze Mazmunları
│   └── aruz-ve-edebi-sanatlar.md  # Vezin Kalıpları ve Kullanılan Edebi Sanatlar
│
├── araclar/                       # Python CLI, Külliyat Sorgulama & Fal-ı Fuzûlî
│   ├── corpus.json                # Yapılandırılmış JSON Veri Tabanı
│   ├── api.py                     # Programatik Erişim Motoru
│   └── fuzuli_cli.py              # İnteraktif Terminal Komut Satırı Arayüzü
│
└── tests/
    └── test_corpus.py             # Otomatik Veri ve API Test Süiti
```

---

## ⚡ Hızlı Başlangıç & CLI Kullanımı

Külliyat, terminal üzerinden etkileşimli olarak beyit sorgulamaya, gazel okumaya ve Fâl-i Fuzûlî çekmeye olanak tanıyan bir Python motoru ile donatılmıştır:

```bash
# Depoyu klonlayın
git clone https://github.com/arch-yunus/fasl-i-fuzuli.git
cd fasl-i-fuzuli

# Fâl-i Fuzûlî: Rastgele hikmetli bir beyit ve şerhini çek
python -m araclar.fuzuli_cli fal

# Gazelleri listele veya seçilen bir gazeli beyit beyit incele
python -m araclar.fuzuli_cli gazel 1
python -m araclar.fuzuli_cli gazel oyle-sermestem

# Su Kasîdesi'nden beyit oku (#31 numaralı meşhur vasiyet beyti)
python -m araclar.fuzuli_cli su-kasidesi 31

# Külliyat genelinde arama yap
python -m araclar.fuzuli_cli ara mecnun

# Dîvân lügatinden kavram sorgula
python -m araclar.fuzuli_cli lugat Rind
```

---

## 🐍 Python API ile Programatik Erişim

Külliyat verilerine kendi Python projelerinizde doğrudan erişebilirsiniz:

```python
from araclar.api import FuzuliCorpus

corpus = FuzuliCorpus()

# Rastgele hikmetli bir beyit çek
fal = corpus.fal_cek()
print(fal["metin"])
print(fal["sadelesmis"])

# Gazel getir
gazel = corpus.gazel_getir("beni-candan-usandirdi")
print(f"Vezin: {gazel['vezin']}")

# Lügatten kavram bak
anlam = corpus.lugat_sorgula("Fenâfillâh")
print(anlam)
```

---

## 📖 Başlıca Şaheserler

| Eser | Türü / Form | Açıklama |
|:---|:---|:---|
| [**Türkçe Dîvân Dîbâcesi**](file:///eserler/divan/dibace.md) | Mensur Mukaddime | Fuzûlî'nin ilim ve şiir felsefesi, mahlas seçimi |
| [**Su Kasîdesi**](file:///eserler/divan/kasideler/su-kasidesi.md) | Kasîde / Na't | 32 Beyit tam metin; Peygamber sevgisi ve vasiyet beyti |
| [**Beni Candan Usandırdı**](file:///eserler/divan/gazeller/beni-candan-usandirdi.md) | Gazel | Âşıkâne gazel türünün zirvesi, 6 beyit tahlilli |
| [**Leylâ vü Mecnûn**](file:///eserler/mesneviler/leyla-vu-mecnun.md) | Mesnevî (3096 beyit) | Maddi aşktan İlahi Aşka yükselişin destanı |
| [**Şikâyetnâme**](file:///eserler/mensur-ve-mektup/sikayetname.md) | Mektup / Hiciv | *"Selâm verdim rüşvet değildür deyu almadılar..."* |
| [**Fuzûlî Lügati**](file:///lugat-ve-mazmunlar/fuzuli-sozlugu.md) | Sözlük / Istılahlar | Divan edebiyatı tasavvufi ve edebi remizler tablosu |

---

## 🧪 Testlerin Çalıştırılması

```bash
python tests/test_corpus.py
```

---

## 🤝 Katkıda Bulunma

Edebi metinlerin zenginleştirilmesi, yeni gazel şerhlerinin eklenmesi, aruz vezinlerinin tespiti veya yazılım araçlarının geliştirilmesi yönündeki katkılar memnuniyetle kabul edilir. Ayrıntılar için lütfen [CONTRIBUTING.md](CONTRIBUTING.md) belgesini inceleyiniz.

---

## 📄 Lisans

Bu proje **MIT Lisansı** altında korunmaktadır. Ayrıntılı bilgi için [LICENSE](LICENSE) dosyasına bakabilirsiniz.
