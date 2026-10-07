// Data State & Persistensi LocalStorage
let posCart = JSON.parse(localStorage.getItem("pos_cart_items")) || [];

// Helper Format Rupiah
function posFormatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// Render Tabel dan Sinkronisasi LocalStorage
function posRenderCart() {
  localStorage.setItem("pos_cart_items", JSON.stringify(posCart));
  const tbody = document.getElementById("pos-cart-body");
  tbody.innerHTML = "";

  if (posCart.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: #6b7280;">Keranjang masih kosong.</td></tr>`;
  } else {
    posCart.forEach((item, index) => {
      const subtotal = item.harga * item.qty;
      tbody.innerHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${item.nama}</td>
          <td>${posFormatRupiah(item.harga)}</td>
          <td>${item.qty}</td>
          <td><strong>${posFormatRupiah(subtotal)}</strong></td>
          <td>
            <button class="btn btn-danger" style="padding: 4px 8px; font-size: 0.8rem;" onclick="posHapusItem(${index})">Hapus</button>
          </td>
        </tr>
      `;
    });
  }

  posHitungKalkulator();
}

// Validasi Form & Tambah Barang
function posTambahBarang() {
  const elNama = document.getElementById("pos-nama");
  const elHarga = document.getElementById("pos-harga");
  const elQty = document.getElementById("pos-qty");

  const errNama = document.getElementById("err-nama");
  const errHarga = document.getElementById("err-harga");
  const errQty = document.getElementById("err-qty");

  // Reset Pesan Error
  errNama.innerText = "";
  errHarga.innerText = "";
  errQty.innerText = "";

  const nama = elNama.value.trim();
  const harga = parseFloat(elHarga.value);
  const qty = parseInt(elQty.value, 10);

  let isValid = true;

  // Validasi Nama Barang (Min 3 Karakter)
  if (!nama || nama.length < 3) {
    errNama.innerText = "Nama barang wajib diisi minimal 3 karakter!";
    isValid = false;
  }

  // Validasi Harga Satuan (Angka Positif Min Rp500)
  if (isNaN(harga) || harga < 500) {
    errHarga.innerText = "Harga wajib berupa angka dan minimal Rp 500!";
    isValid = false;
  }

  // Validasi Qty (Angka Bulat Min 1)
  if (isNaN(qty) || qty < 1) {
    errQty.innerText = "Jumlah Qty wajib angka bulat minimal 1!";
    isValid = false;
  }

  if (!isValid) return;

  // Tambahkan Data ke Array Keranjang
  posCart.push({ nama, harga, qty });

  // Reset Form
  elNama.value = "";
  elHarga.value = "";
  elQty.value = "1";

  posRenderCart();
}

// Hapus Item
function posHapusItem(index) {
  posCart.splice(index, 1);
  posRenderCart();
}

// Kalkulator Total, Diskon & Kembalian
function posHitungKalkulator() {
  const totalBelanja = posCart.reduce((sum, item) => sum + (item.harga * item.qty), 0);
  const kodePromo = document.getElementById("pos-promo").value.trim().toUpperCase();

  // Hitung Diskon 10% jika total >= 50.000 atau Kode Promo HEMAT10
  let nominalDiskon = 0;
  if (totalBelanja >= 50000 || kodePromo === "HEMAT10") {
    nominalDiskon = totalBelanja * 0.10;
  }

  const totalAkhir = totalBelanja - nominalDiskon;

  // Update DOM Ringkasan
  document.getElementById("pos-total-belanja").innerText = posFormatRupiah(totalBelanja);
  document.getElementById("pos-diskon").innerText = posFormatRupiah(nominalDiskon);
  document.getElementById("pos-total-akhir").innerText = posFormatRupiah(totalAkhir);

  // Perhitungan Kembalian
  const elUangBayar = document.getElementById("pos-uang-bayar");
  const elKembalianBox = document.getElementById("pos-kembalian-box");
  const uangBayar = parseFloat(elUangBayar.value);

  if (isNaN(uangBayar) || elUangBayar.value === "") {
    elKembalianBox.innerHTML = `Kembalian: <span style="color: #6b7280;">Rp 0</span>`;
    return;
  }

  const kembalian = uangBayar - totalAkhir;

  if (kembalian < 0) {
    elKembalianBox.innerHTML = `<span style="color: #dc2626;">⚠️ Uang belum mencukupi! (Kurang ${posFormatRupiah(Math.abs(kembalian))})</span>`;
  } else {
    elKembalianBox.innerHTML = `<span style="color: #16a34a;">Kembalian: ${posFormatRupiah(kembalian)}</span>`;
  }
}

// Reset Transaksi & LocalStorage
function posTransaksiBaru() {
  if (confirm("Apakah Anda yakin ingin memulai transaksi baru dan mengosongkan keranjang?")) {
    posCart = [];
    localStorage.removeItem("pos_cart_items");
    document.getElementById("pos-promo").value = "";
    document.getElementById("pos-uang-bayar").value = "";
    posRenderCart();
  }
}

// Inisialisasi Tampilan Pertama Kali
document.addEventListener("DOMContentLoaded", () => {
  posRenderCart();
});