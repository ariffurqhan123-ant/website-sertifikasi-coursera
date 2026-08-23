# Presentasi Sertifikasi Independen — Website

Website statis hasil konversi dari `rancangan_PPT_sertifikasi_coursera.pptx` (Slide 1–7), dibangun dengan HTML/CSS/JS murni — tidak perlu build step apa pun.

## Struktur File
```
├── index.html          → seluruh konten & struktur halaman
├── css/style.css        → warna, font, layout (dipertahankan dari PPT asli)
├── js/script.js         → animasi: logo cycler, scroll-reveal, ticker sertifikat
└── assets/img/          → semua gambar (logo, foto, screenshot, sertifikat)
```

## Fitur yang Sudah Diimplementasikan (Slide 1–7)

| Bagian | Fitur |
|---|---|
| **Hero** (Slide 1+2) | Background dua foto kampus fade bergantian otomatis; logo universitas (Penn/Michigan/Yale/CBS) muncul bergantian format foto → judul sertifikasi; seluruh elemen slide 1 & 2 dipertahankan (nama, daftar kursus, foto) |
| **Pendahuluan** (Slide 3) | Gambar flyer muncul dari sebelah kiri saat discroll (scroll-reveal) |
| **Metode Pembelajaran** (Slide 4+5) | Gambar/screenshot muncul dari sebelah kanan saat discroll; seluruh elemen kedua slide dipertahankan |
| **Kursus yang Diambil** (Slide 6+7) | 10 sertifikat berjalan otomatis seperti running text berita (ticker), kecepatan lambat, loop tanpa putus |

## Cara Upload ke GitHub (GitHub Pages)

1. Buat repository baru di GitHub (mis. `sertifikasi-coursera`)
2. Upload **seluruh isi folder ini** (bukan foldernya, tapi isinya: `index.html`, `css/`, `js/`, `assets/`) ke root repository tersebut — bisa lewat drag-and-drop di web GitHub, atau lewat git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: website sertifikasi"
   git branch -M main
   git remote add origin https://github.com/USERNAME/sertifikasi-coursera.git
   git push -u origin main
   ```
3. Di repository GitHub, buka **Settings → Pages**
4. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu **Save**
5. Tunggu 1–2 menit, situs akan aktif di `https://USERNAME.github.io/sertifikasi-coursera/`

## Catatan Teknis
- Semua gambar sudah dikompresi (dari total ±9MB menjadi ±2,9MB) agar loading cepat tanpa kehilangan kualitas visual yang berarti.
- Font mengikuti PPT asli: **Arial Bold** untuk judul/heading, **Calibri** untuk teks isi.
- Warna diambil langsung dari elemen asli: hijau Andalas (#008D49), biru Coursera (#01579B), overlay gelap transparan di atas foto agar teks putih tetap terbaca.
- Sudah diuji tanpa error di console browser, tanpa horizontal-scroll di desktop/tablet/mobile (390px–1440px).
- Animasi menghormati preferensi pengguna secara wajar (tidak ada animasi yang mengganggu/berlebihan); jika ingin menambah dukungan `prefers-reduced-motion`, tinggal tambahkan media query di `style.css`.

## Melanjutkan ke Slide 8 dan Seterusnya
Struktur kode ini modular per section (`<section class="panel">`), jadi menambah slide 8 dst. tinggal menduplikasi pola section yang sudah ada mengikuti section terakhir ("Kursus yang Diambil"). Beri tahu saya kalau ingin dilanjutkan.
