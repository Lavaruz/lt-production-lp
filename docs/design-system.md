# Design System — LT Pro Landing Page

Semua nilai di bawah ini tersedia sebagai CSS variable di `assets/css/tokens.css`.

## Prinsip

1. **Jelas dulu, baru cantik.** Orang harus paham "ini sewa sound untuk nikahan, harganya segini, pesan lewat WA" dalam 5 detik.
2. **Satu aksi utama.** Tombol merah = chat WhatsApp. Aksi lain memakai tombol garis.
3. **Ramah HP.** Mayoritas pembeli membuka dari Instagram/WA di HP. Desain mulai dari layar 360px.
4. **Warna dari logo.** Merah LT, emas PRO, hitam latar logo.

## Warna

| Token | Nilai | Pakai untuk |
|---|---|---|
| `--c-red` | `#D62A1E` | Tombol utama, aksen, ikon |
| `--c-red-dark` | `#B01F15` | Hover tombol |
| `--c-gold` | `#D4A72C` | Label, harga di latar gelap, badge "Paling Laris" |
| `--c-gold-soft` | `#F6EBC8` | Latar badge terang |
| `--c-ink` | `#0E0E10` | Latar gelap (hero, footer), teks utama |
| `--c-ink-2` | `#1B1B1F` | Kartu di latar gelap |
| `--c-text` | `#24242A` | Teks isi |
| `--c-muted` | `#5E5E68` | Teks pendukung |
| `--c-line` | `#E6E3DC` | Garis, border |
| `--c-bg` | `#FFFFFF` | Latar utama |
| `--c-bg-soft` | `#F7F5F0` | Latar section selang-seling |
| `--c-wa` | `#25D366` | Tombol WhatsApp melayang saja |

Kontras teks: `--c-text` di putih 15:1, putih di `--c-red` 5,2:1, `--c-gold` di `--c-ink` 9:1.

## Tipografi

Font: **Plus Jakarta Sans** (Google Fonts), cadangan system-ui.

| Token | Ukuran | Pakai untuk |
|---|---|---|
| `--fs-display` | clamp(2rem, 5vw + 1rem, 3.5rem) | Judul hero |
| `--fs-h2` | clamp(1.6rem, 2.5vw + 1rem, 2.4rem) | Judul section |
| `--fs-h3` | 1.25rem | Judul kartu |
| `--fs-body` | 1.0625rem (17px) | Teks isi, sedikit lebih besar supaya nyaman dibaca orang tua |
| `--fs-small` | 0.875rem | Catatan |

Tebal: 400 isi, 600 label, 800 judul. Tinggi baris isi 1.65.

## Jarak & bentuk

- Skala jarak: 4, 8, 12, 16, 24, 32, 48, 64, 96 px (`--s-1` … `--s-9`)
- Lebar konten maks 1120px, gutter samping 16px (HP) / 24px (desktop)
- Radius: 10px (tombol, input), 16px (kartu), 999px (chip)
- Bayangan hanya satu tingkat: `--shadow` untuk kartu yang menonjol (paket populer)

## Komponen

- **Tombol utama** `.btn.btn-primary`: merah, ikon WA, min tinggi 48px (target sentuh)
- **Tombol garis** `.btn.btn-ghost`
- **Chip** `.chip`: poin kepercayaan singkat
- **Kartu layanan** `.card`
- **Kartu paket** `.plan` dan `.plan.is-popular`
- **Tabel harga** `.price-table` (berubah jadi daftar di HP)
- **Langkah** `.steps`
- **FAQ** memakai `<details>` bawaan browser, tanpa JavaScript
- **WA melayang** `.wa-float`, selalu terlihat di pojok kanan bawah

## Aksesibilitas

- Semua tombol dan tautan punya teks yang jelas, ikon diberi `aria-hidden`
- Fokus keyboard terlihat (`outline` emas)
- Menghormati `prefers-reduced-motion`
- Bahasa halaman `lang="id"`
