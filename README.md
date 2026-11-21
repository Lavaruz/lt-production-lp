# LT Production — Landing Page

Landing page jualan untuk **LT Production (LT Pro)**, vendor sewa **sound system, genset, dan lighting** untuk acara pernikahan di Bantul, Yogyakarta.

Website statis murni (HTML + CSS + sedikit JavaScript), tanpa proses build. Tinggal upload ke hosting apa saja (GitHub Pages, Netlify, Vercel, cPanel).

## Isi halaman

Hero + paket rekomendasi · masalah yang sering terjadi di hajatan · layanan (sound, genset, lighting) · daftar harga resmi (5 paket sound, 4 paket lighting + AC pelaminan & mistyfan, 10 pilihan genset) · portofolio · cara pesan · testimoni · area layanan + peta · tanya jawab · kontak.

Semua tombol WhatsApp membuka chat ke **0857-4015-9888** dengan pesan otomatis sesuai paket yang diklik.

## Struktur folder

```
index.html              Halaman utama
assets/css/tokens.css   Design token (warna, font, jarak)
assets/css/styles.css   Style semua komponen
assets/js/main.js       Link WhatsApp otomatis
assets/img/             Logo, favicon, gambar share, portofolio
docs/                   Riset brand dan design system
scripts/                Pembuat gambar share & ilustrasi portofolio
```

## Coba di komputer

```bash
npx serve .
# atau
python3 -m http.server 8000
```

## Yang perlu diganti sebelum online

Harga sudah memakai price list resmi. Data di bawah masih **contoh (dummy)** karena belum ditemukan data aslinya. Detail lengkap di `docs/brand-research.md`.

| Yang diganti | Di mana |
|---|---|
| Foto portofolio | Ganti file di `assets/img/portfolio/` dengan foto asli (rasio 4:3), sesuaikan judul & lokasi |
| Testimoni | `index.html` bagian testimoni |
| Angka "200+ acara" | `index.html` bagian hero |
| Jam buka (sekarang "setiap hari 08.00–21.00") | `index.html` bagian `#kontak` dan JSON-LD |
| Logo | `assets/img/logo.svg` masih gambar ulang dari banner Google Maps, ganti dengan file logo asli bila ada |

Nomor WhatsApp diubah di satu tempat: `WA_NUMBER` di `assets/js/main.js` (juga link `tel:` dan JSON-LD di `index.html`).

## Domain

Alamat website diset ke `https://lavaruz.github.io/lt-production-lp/` (GitHub Pages). Kalau memakai domain sendiri, ganti alamat itu di `index.html` (canonical, og:url, og:image, JSON-LD), `robots.txt`, dan `sitemap.xml`.

Setelah mengganti teks di gambar share, buat ulang gambarnya:

```bash
npm i -D playwright && npx playwright install chromium
node scripts/render-og-image.js
```
