# Katkıda Bulunma Rehberi (İrşâd-ı İâne)

**Fasl-ı Fuzûlî** külliyâtına katkı sağlamak istediğiniz için teşekkür ederiz! Klasik divan edebiyatımızın bu büyük mirasını dijital ortamda en yüksek edebi, akademik ve teknik titizlikle yaşatmayı hedefliyoruz.

---

## 1. Katkı Alanları

Depomuza şu sahalarda katkıda bulunabilirsiniz:
1. **Edebi Metinler & Şerhler:** Yeni gazel, kaside veya mesnevi fasıllarının transkripsiyonu, günümüz Türkçesine aktarımı ve edebi sanat tahlilleri.
2. **Lügat & Mazmunlar:** Fuzûlî'nin kullandığı tasavvufi ve arkaik kavramların lügate eklenmesi.
3. **Akademik Kaynakça:** Güvenilir neşirler, makale ve tez referanslarının zenginleştirilmesi.
4. **Yazılım & Araçlar (Python / CLI / JSON Corpus):** Metin arama algoritmaları, aruz vezni denetleyicisi, web/API entegrasyonları.

---

## 2. Edebi ve Transkripsiyon Standartları

- **Transkripsiyon:** Uzun ünlülerde inceltme/uzatma işaretleri (`â, î, û`) ve ayın/hemze (`'`, `'`) imlalarına özen gösteriniz (ör. *Fuzûlî*, *şem'*, *Dîbâce*, *bî-ilm*).
- **Şerh Formatı:**
  - Orijinal / Transkripsiyonlu Beyit
  - Aruz Vezni
  - Günümüz Türkçesi (Nesre Çeviri)
  - Edebî Sanatlar (Tezat, Hüsn-i Ta'lil, Tenasüp, vb.)
  - Tasavvufî / Felsefî Şerh

---

## 3. Kod ve Veri Standartları

1. `araclar/corpus.json` dosyasına yeni bir şiir veya beyit eklediğinizde JSON sözdizimini bozmadığınızdan emin olun.
2. Değişiklik sonrası mutlaka testleri çalıştırın:
   ```bash
   python tests/test_corpus.py
   ```
3. Python kodları PEP 8 standartlarına ve UTF-8 karakter desteğine uygun olmalıdır.

---

## 4. Git Akışı ve Pull Request

1. Depoyu fork'layın.
2. Yeni bir çalışma dalı (branch) açın:
   ```bash
   git checkout -b feature/yeni-gazel-serhi
   ```
3. Açıklayıcı commit mesajları ile kaydedin (`feat:`, `docs:`, `fix:`, `test:`).
4. Değişiklikleri push'layıp Pull Request (PR) oluşturun.
