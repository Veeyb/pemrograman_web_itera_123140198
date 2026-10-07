# Tugas Praktikum: Aplikasi Kasir & Keranjang Belanja Sederhana (Mini POS)

## Identitas Praktikan
- **Nama Lengkap:**Omar Athaya Vito
- **NIM:** 123140198
- **Kelas Praktikum:** PAW RB

---

## Deskripsi Aplikasi
Aplikasi **Mini POS (Point of Sale)** adalah sistem kasir dan keranjang belanja berbasis web yang dirancang untuk membantu pengelolaan transaksi sederhana pada kantin atau toko kampus. Aplikasi ini mengintegrasikan fungsi validasi data, kalkulasi transaksi otomatis, serta penyimpanan data lokal yang persisten.

---

## Panduan Menjalankan Aplikasi
1. Buka folder `Omar Athaya Vito_123140198_ pertemuan1` menggunakan editor **Visual Studio Code**.
2. Pastikan ekstensi **Live Server** telah terpasang pada VS Code.
3. Klik kanan pada file `index.html`, lalu pilih **Open with Live Server**.
4. Aplikasi akan terbuka secara otomatis di browser pada alamat `http://127.0.0.1:5500/index.html`.

---

## Daftar Fitur (Checklist Status)
- [x] **Validasi Form Input Barang**:
  - Validasi nama barang minimal 3 karakter.
  - Validasi harga satuan minimal Rp500.
  - Validasi jumlah / Qty minimal 1.
  - Tampilan pesan error berwarna merah jika input tidak memenuhi standar.
- [x] **Logika Kalkulator & Perhitungan**:
  - Perhitungan otomatis subtotal per baris (`Harga x Qty`).
  - Akumulasi total belanja secara otomatis.
  - Diskon otomatis 10% jika total belanja >= Rp50.000 atau menggunakan kode promo `HEMAT10`.
  - Modul kalkulator uang bayar dan kembalian dengan peringatan jika uang bayar kurang.
- [x] **Manajemen List & LocalStorage**:
  - Tabel daftar keranjang belanja interaktif.
  - Fitur hapus baris barang.
  - Persistensi data keranjang menggunakan `localStorage` (`JSON.stringify` dan `JSON.parse`).
  - Tombol reset transaksi untuk mengosongkan keranjang dan membersihkan data penyimpanan.

---

## Tangkapan Layar (Screenshot)
*(Silakan lampirkan gambar screenshot aplikasi Anda di bawah ini)*

1. **Tampilan Form Utama & Keranjang:**
   ![Tampilan Utama](path/ke/screenshot-utama.png)

2. **Tampilan Validasi Error Form:**
   ![Tampilan Validation Error](path/ke/screenshot-error.png)

3. **Tampilan Hasil Kalkulasi & Pembayaran:**
   ![Tampilan Hasil Kalkulasi](path/ke/screenshot-kalkulator.png)

---

## Penjelasan Teknis Singkat
1. **Penanganan Validasi Input:** Fungsi `posTambahBarang()` mengambil nilai dari form input dan melakukan evaluasi kondisi. Jika ditemukan input yang salah, teks instruksi error dimasukkan ke dalam elemen `<small>` dengan kelas CSS merah dan proses pendaftaran barang dihentikan.
2. **Algoritma Kalkulator Keuangan:** Fungsi `posHitungKalkulator()` menggunakan method `.reduce()` untuk menghitung total belanja. Logika persentase diskon dievaluasi secara dinamis berdasarkan total belanja atau nilai string input promo.
3. **Mekanisme Serialisasi LocalStorage:** Data keranjang disimpan dalam bentuk array objek `posCart`. Setiap kali ada perubahan data (tambah/hapus), data diserialisasi menjadi teks string JSON menggunakan `JSON.stringify()` dan disimpan ke `localStorage`. Saat halaman pertama kali dimuat, string tersebut diurai kembali menjadi array JavaScript menggunakan `JSON.parse()`.