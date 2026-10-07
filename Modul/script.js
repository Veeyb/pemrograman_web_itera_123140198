// Mendeklarasikan variabel dengan var, let, dan const

var nama = "Budi";

let usia = 20;

const TAHUN_LAHIR = 2004;



// Menampilkan output ke konsol

console.log("Nama: " + nama);

console.log("Usia: " + usia);

console.log("Tahun Lahir: " + TAHUN_LAHIR);



// Menampilkan output ke halaman HTML

document.getElementById("result").innerHTML = `

  <p>Nama: <strong>${nama}</strong></p>

  <p>Usia: <strong>${usia}</strong></p>

  <p>Tahun Lahir: <strong>${TAHUN_LAHIR}</strong></p>

`;



// Struktur kondisional

let nilai = 85;

let grade = "";



// If-else if-else

if (nilai >= 90) {

  grade = "A";

} else if (nilai >= 80) {

  grade = "B";

} else if (nilai >= 70) {

  grade = "C";

} else if (nilai >= 60) {

  grade = "D";

} else {

  grade = "E";

}



console.log("Nilai: " + nilai + ", Grade: " + grade);



document.getElementById("result").innerHTML += `

  <hr>

  <p>Nilai: <strong>${nilai}</strong></p>

  <p>Grade: <strong>${grade}</strong></p>

`;



// Ternary operator

let status = nilai >= 60 ? "Lulus" : "Tidak Lulus";

console.log("Status: " + status);



document.getElementById("result").innerHTML += `

  <p>Status: <strong>${status}</strong></p>

`;



// Switch case

let hari = new Date().getDay();

let namaHari = "";



switch (hari) {

  case 0:

    namaHari = "Minggu";

    break;

  case 1:

    namaHari = "Senin";

    break;

  case 2:

    namaHari = "Selasa";

    break;

  case 3:

    namaHari = "Rabu";

    break;

  case 4:

    namaHari = "Kamis";

    break;

  case 5:

    namaHari = "Jumat";

    break;

  case 6:

    namaHari = "Sabtu";

    break;

  default:

    namaHari = "Hari tidak valid";

}



console.log("Hari ini adalah: " + namaHari);



document.getElementById("result").innerHTML += `

  <p>Hari ini adalah: <strong>${namaHari}</strong></p>

`;

// Latihan 
// 1. Data Diri
const namaSaya = "Omar Athaya Vito";
let umurSaya = 22;
let kotaAsal = "Bandar Lampung";

document.getElementById("result").innerHTML += `
  <hr>
  <h3>Latihan 1</h3>
  <p>Nama: <strong>${namaSaya}</strong></p>
  <p>Umur: <strong>${umurSaya}</strong></p>
  <p>Kota Asal: <strong>${kotaAsal}</strong></p>
`;

// 2. Pengecekan Kelulusan (syarat >= 70)
let nilaiLatihan = 90;
let statusLulus = nilaiLatihan >= 70 ? "Lulus" : "Tidak Lulus";

document.getElementById("result").innerHTML += `
  <p>Status Kelulusan (${nilaiLatihan}): <strong>${statusLulus}</strong></p>
`;

// 3. Kategori Umur
let kategoriUmur = "";

if (umurSaya < 12) {
  kategoriUmur = "Anak-anak";
} else if (umurSaya <= 17) {
  kategoriUmur = "Remaja";
} else if (umurSaya <= 59) {
  kategoriUmur = "Dewasa";
} else {
  kategoriUmur = "Lansia";
}

document.getElementById("result").innerHTML += `
  <p>Kategori Umur (${umurSaya} tahun): <strong>${kategoriUmur}</strong></p>
`;

// 4. Konversi Angka Hari (1-7) ke Bahasa Inggris
let angkaHariLatihan = 3;
let namaHariInggris = "";

switch (angkaHariLatihan) {
  case 1:
    namaHariInggris = "Monday";
    break;
  case 2:
    namaHariInggris = "Tuesday";
    break;
  case 3:
    namaHariInggris = "Wednesday";
    break;
  case 4:
    namaHariInggris = "Thursday";
    break;
  case 5:
    namaHariInggris = "Friday";
    break;
  case 6:
    namaHariInggris = "Saturday";
    break;
  case 7:
    namaHariInggris = "Sunday";
    break;
  default:
    namaHariInggris = "Hari tidak valid";
}

document.getElementById("result").innerHTML += `
  <p>Angka Hari ${angkaHariLatihan}: <strong>${namaHariInggris}</strong></p>
`;

// 5. Grade Nilai dengan Ternary Operator
let skorLatihan = 85;
let gradeLatihan = (skorLatihan >= 90) ? "A" :
                   (skorLatihan >= 80) ? "B" :
                   (skorLatihan >= 70) ? "C" :
                   (skorLatihan >= 60) ? "D" : "E";

document.getElementById("result").innerHTML += `
  <p>Skor ${skorLatihan}: Grade <strong>${gradeLatihan}</strong></p>
`;

// For loop
let nilaiSiswa = [85, 92, 78, 90, 88];
let total = 0;

document.getElementById("result").innerHTML += `
  <hr>
  <h3 id="daftar-nilai-siswa">Daftar Nilai Siswa:</h3>
  <ul id="daftar-nilai"></ul>
  <p id="rata-rata"></p>
`;

for (let i = 0; i < nilaiSiswa.length; i++) {
  total += nilaiSiswa[i];
  document.getElementById("daftar-nilai").innerHTML += `
    <li>Siswa ${i + 1}: ${nilaiSiswa[i]}</li>
  `;
}

let rataRata = total / nilaiSiswa.length;
document.getElementById("rata-rata").innerHTML = `
  Rata-rata nilai: <strong>${rataRata.toFixed(2)}</strong>
`;

// While loop
document.getElementById("result").innerHTML += `
  <h3 id="countdown">Countdown:</h3>
  <div id="countdown"></div>
`;

let hitungMundur = 5;
while (hitungMundur > 0) {
  document.getElementById("countdown").innerHTML += `
    <span class="inline-block bg-blue-100 px-2 py-1 m-1 rounded">${hitungMundur}</span>
  `;
  hitungMundur--;
}

// For...of loop (ES6)
document.getElementById("result").innerHTML += `
  <h3 id="nilai-dengan-forof">Nilai dengan for...of:</h3>
  <div id="nilai-of" class="flex flex-wrap gap-2"></div>
`;

for (let nilai of nilaiSiswa) {
  let statusNilai = nilai >= 80 ? "text-green-600" : "text-red-600";
  document.getElementById("nilai-of").innerHTML += `
    <span class="inline-block bg-gray-100 px-3 py-1 rounded ${statusNilai}">${nilai}</span>
  `;
}


document.getElementById("result").innerHTML += `
  <hr>
  <div class="event-demo p-4 my-4 border border-gray-300 rounded">
    <h2 class="text-xl font-bold mb-3">Demo Event Handler</h2>
    <input type="text" id="nama-input" placeholder="Masukkan nama Kalian" class="border p-2 rounded w-full mb-2">
    <button id="sapa-button" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sapa Saya</button>
    <div id="sapa-output" class="mt-3"></div>

    <div class="mt-4">
      <h3 class="font-semibold mb-2">Kalkulator Sederhana</h3>
      <div class="flex gap-2 mb-3">
        <input type="number" id="angka1" placeholder="Angka 1" class="border p-2 rounded flex-1">
        <input type="number" id="angka2" placeholder="Angka 2" class="border p-2 rounded flex-1">
      </div>
      <div class="flex gap-2">
        <button id="btn-tambah" class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">+</button>
        <button id="btn-kurang" class="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">-</button>
        <button id="btn-kali" class="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">x</button>
        <button id="btn-bagi" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">÷</button>
      </div>
      <div id="hasil-kalkulator" class="mt-3 font-semibold"></div>
    </div>
  </div>
`;

function sapaNama(nama) {
  return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

// Event handler untuk tombol sapa
document.getElementById("sapa-button").addEventListener("click", function() {
  const nama = document.getElementById("nama-input").value;
  if (nama.trim() === "") {
    document.getElementById("sapa-output").innerHTML = 
      `<p class="text-red-500">Silakan masukkan namaKalianterlebih dahulu!</p>`;
  } else {
    const pesan = sapaNama(nama);
    document.getElementById("sapa-output").innerHTML = 
      `<p class="text-green-500">${pesan}</p>`;
  }
});

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
  let hasil = 0;
  switch (operasi) {
    case "tambah":
      hasil = angka1 + angka2;
      break;
    case "kurang":
      hasil = angka1 - angka2;
      break;
    case "kali":
      hasil = angka1 * angka2;
      break;
    case "bagi":
      if (angka2 === 0) {
        return "Error: Pembagian dengan nol tidak diperbolehkan";
      }
      hasil = angka1 / angka2;
      break;
    default:
      return "Operasi tidak valid";
  }
  return hasil;
}

// Event handler untuk tombol operasi matematika
document.getElementById("btn-tambah").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = 
      `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "tambah");
    document.getElementById("hasil-kalkulator").innerHTML = 
      `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = 
      `<p class="text-red-500">Masukkan angka yang valid!</p>`
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kurang");
    document.getElementById("hasil-kalkulator").innerHTML = 
      `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-kali").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = 
      `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kali");
    document.getElementById("hasil-kalkulator").innerHTML = 
      `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil-kalkulator").innerHTML = 
      `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "bagi");
    document.getElementById("hasil-kalkulator").innerHTML = 
      `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
  }
});

// ==========================================
// LATIHAN 2
// ==========================================

document.getElementById("result").innerHTML += `
  <hr>
  <h3>Latihan 2</h3>
`;

// 1. Loop untuk mencetak tabel perkalian (1-10) untuk angka pilihan (contoh: angka 5)
let angkaPerkalian = 5;
let teksPerkalian = "";

for (let i = 1; i <= 10; i++) {
  teksPerkalian += `${angkaPerkalian} x ${i} = ${angkaPerkalian * i}<br>`;
}

document.getElementById("result").innerHTML += `
  <p><strong>1. Tabel Perkalian (${angkaPerkalian}):</strong></p>
  <div class="ml-4 mb-3">${teksPerkalian}</div>
`;

// 2. Fungsi untuk menghitung faktorial dari sebuah angka
function hitungFaktorial(n) {
  if (n < 0) return "Tidak terdefinisi";
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i;
  }
  return hasil;
}

let angkaFaktorial = 5;
document.getElementById("result").innerHTML += `
  <p><strong>2. Faktorial:</strong> ${angkaFaktorial}! = <strong>${hitungFaktorial(angkaFaktorial)}</strong></p>
`;

// 3. Fungsi untuk memeriksa apakah sebuah angka adalah bilangan prima
function cekPrima(angka) {
  if (angka <= 1) return false;
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) return false;
  }
  return true;
}

let angkaCekPrima = 7;
let statusPrima = cekPrima(angkaCekPrima) ? "Bilangan Prima" : "Bukan Bilangan Prima";

document.getElementById("result").innerHTML += `
  <p><strong>3. Cek Bilangan Prima:</strong> Angka ${angkaCekPrima} adalah <strong>${statusPrima}</strong></p>
`;

// 4. Kalkulator BMI (Body Mass Index) dengan fungsi dan event handler
document.getElementById("result").innerHTML += `
  <div class="p-4 my-4 border border-gray-300 rounded">
    <p><strong>4. Kalkulator BMI:</strong></p>
    <div class="flex gap-2 mb-2">
      <input type="number" id="berat-bmi" placeholder="Berat (kg)" class="border p-2 rounded flex-1">
      <input type="number" id="tinggi-bmi" placeholder="Tinggi (cm)" class="border p-2 rounded flex-1">
    </div>
    <button id="btn-bmi" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Hitung BMI</button>
    <div id="hasil-bmi" class="mt-3 font-semibold"></div>
  </div>
`;

// Event handler kalkulator BMI
document.getElementById("btn-bmi").onclick = function () {
  const bb = parseFloat(document.getElementById("berat-bmi").value);
  const tbCm = parseFloat(document.getElementById("tinggi-bmi").value);
  const outputBMI = document.getElementById("hasil-bmi");

  if (isNaN(bb) || isNaN(tbCm) || bb <= 0 || tbCm <= 0) {
    outputBMI.innerHTML = `<span class="text-red-500">Silakan masukkan berat dan tinggi yang valid!</span>`;
    return;
  }

  const tbM = tbCm / 100;
  const bmi = bb / (tbM * tbM);
  let kategori = "";

  if (bmi < 18.5) kategori = "Kurus (Underweight)";
  else if (bmi < 25) kategori = "Normal (Ideal)";
  else if (bmi < 30) kategori = "Kelebihan Berat (Overweight)";
  else kategori = "Obesitas";

  outputBMI.innerHTML = `BMI Anda: <span class="text-blue-600">${bmi.toFixed(1)}</span> (${kategori})`;
};

// 5. Program FizzBuzz (angka 1-100)
let hasilFizzBuzz = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    hasilFizzBuzz.push("<b>FizzBuzz</b>");
  } else if (i % 3 === 0) {
    hasilFizzBuzz.push("Fizz");
  } else if (i % 5 === 0) {
    hasilFizzBuzz.push("Buzz");
  } else {
    hasilFizzBuzz.push(i);
  }
}

document.getElementById("result").innerHTML += `
  <p><strong>5. Program FizzBuzz (1-100):</strong></p>
  <div class="p-3 border border-gray-200 rounded max-h-36 overflow-y-auto text-sm leading-relaxed mb-4">
    ${hasilFizzBuzz.join(", ")}
  </div>
`;

// Array dan metode array
const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

document.getElementById("result").innerHTML += `
  <hr>
  <h3 id="manipulasi-array">Manipulasi Array:</h3>
  <div id="array-demo"></div>
`;

// Menampilkan array
document.getElementById("array-demo").innerHTML += `
  <p><strong>Array buah:</strong> ${buah.join(", ")}</p>
`;

// Menambahkan item
buah.push("Durian");
document.getElementById("array-demo").innerHTML += `
  <p><strong>Setelah push Durian:</strong> ${buah.join(", ")}</p>
`;

// Menghapus item terakhir
const itemDihapus = buah.pop();
document.getElementById("array-demo").innerHTML += `
  <p><strong>Setelah pop:</strong> ${buah.join(", ")} (item dihapus: ${itemDihapus})</p>
`;

// Mengurutkan array
buah.sort();
document.getElementById("array-demo").innerHTML += `
  <p><strong>Setelah sort:</strong> ${buah.join(", ")}</p>
`;

// Array map
const hargaBuah = [10000, 8000, 15000, 5000, 20000];
const daftarBuah = buah.map((item, index) => `${item} (Rp${hargaBuah[index].toLocaleString()})`);

document.getElementById("array-demo").innerHTML += `
  <p><strong>Array dengan harga:</strong> ${daftarBuah.join(", ")}</p>
`;

// Array filter
const buahMahal = buah.filter((item, index) => hargaBuah[index] > 10000);
document.getElementById("array-demo").innerHTML += `
  <p><strong>Buah dengan harga > 10.000:</strong> ${buahMahal.join(", ")}</p>
`;

// Objek
const mahasiswa = {
  nama: "Budi Santoso",
  nim: "20210001",
  jurusan: "Teknik Informatika",
  nilai: {
    algoritma: 85,
    basis_data: 90,
    web: 88
  },
  hobi: ["Coding", "Membaca", "Futsal"],
  tampilkanInfo: function() {
    return `${this.nama} (${this.nim}) - ${this.jurusan}`;
  },
  hitungRataRata: function() {
    const nilaiArray = Object.values(this.nilai);
    const total = nilaiArray.reduce((sum, nilai) => sum + nilai, 0);
    return (total / nilaiArray.length).toFixed(2);
  }
};

document.getElementById("result").innerHTML += `
  <hr>
  <h3 id="manipulasi-objek">Manipulasi Objek:</h3>
  <div id="objek-demo"></div>
`;

// Menampilkan informasi objek
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Info Mahasiswa:</strong> ${mahasiswa.tampilkanInfo()}</p>
  <p><strong>Rata-rata Nilai:</strong> ${mahasiswa.hitungRataRata()}</p>
  <p><strong>Hobi:</strong> ${mahasiswa.hobi.join(", ")}</p>
`;

// Menambahkan properti baru ke objek
mahasiswa.email = "budi.santoso@example.com";
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Email:</strong> ${mahasiswa.email}</p>
`;

// Mengubah nilai properti
mahasiswa.nilai.web = 92;
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Nilai Web setelah diubah:</strong> ${mahasiswa.nilai.web}</p>
`;

// Menghapus properti
delete mahasiswa.hobi;
document.getElementById("objek-demo").innerHTML += `
  <p><strong>Hobi setelah dihapus:</strong> ${mahasiswa.hobi ? mahasiswa.hobi.join(", ") : "Tidak ada data hobi"}</p>
`;

// ==========================================
// LATIHAN 3: KELOLA DATA MAHASISWA (CRUD)
// ==========================================

// Menambahkan HTML Latihan 3 tanpa merusak elemen & event sebelumnya
document.getElementById("result").insertAdjacentHTML("beforeend", `
  <hr>
  <h3 id="latihan-3-title">Latihan 3: Data Mahasiswa & CRUD</h3>

  <!-- Form Input / Edit Data -->
  <div style="margin-bottom: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
    <input type="text" id="input-nim" placeholder="NIM" style="padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
    <input type="text" id="input-nama" placeholder="Nama Mahasiswa" style="padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
    <input type="text" id="input-jurusan" placeholder="Jurusan" style="padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
    <input type="number" id="input-nilai" placeholder="Nilai" style="padding: 6px; border: 1px solid #ccc; border-radius: 4px;">
    <button id="btn-simpan-mhs" onclick="simpanMahasiswa()" style="padding: 6px 12px; background-color: #22c55e; color: white; border: none; border-radius: 4px; cursor: pointer;">Tambah Data</button>
    <button id="btn-batal-mhs" onclick="batalFormMhs()" style="padding: 6px 12px; background-color: #6b7280; color: white; border: none; border-radius: 4px; cursor: pointer; display: none;">Batal</button>
  </div>

  <!-- Tombol Aksi Method Array -->
  <div style="margin-bottom: 15px; display: flex; gap: 8px; flex-wrap: wrap;">
    <button onclick="cariNilaiTertinggi()" style="padding: 5px 10px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">Nilai Tertinggi</button>
    <button onclick="filterDiAtasRataRata()" style="padding: 5px 10px; background-color: #6366f1; color: white; border: none; border-radius: 4px; cursor: pointer;">Nilai > Rata-Rata</button>
    <button onclick="urutkanNamaAsc()" style="padding: 5px 10px; background-color: #8b5cf6; color: white; border: none; border-radius: 4px; cursor: pointer;">Urutkan Nama A-Z</button>
    <button onclick="urutkanNamaDesc()" style="padding: 5px 10px; background-color: #7c3aed; color: white; border: none; border-radius: 4px; cursor: pointer;">Urutkan Nama Z-A</button>
    <button onclick="resetTampilkanSemua()" style="padding: 5px 10px; background-color: #4b5563; color: white; border: none; border-radius: 4px; cursor: pointer;">Reset Tampilan</button>
  </div>

  <div id="mhs-status-info" style="margin-bottom: 10px; font-weight: bold; color: #1d4ed8;"></div>

  <!-- Tabel Data Mahasiswa -->
  <table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
      <tr style="background-color: #f3f4f6;">
        <th>NIM</th>
        <th>Nama</th>
        <th>Jurusan</th>
        <th>Nilai</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody id="mhs-table-body"></tbody>
  </table>
`);

// 1. Array Awal Minimal 5 Objek Mahasiswa
let listMahasiswa = [
  { nim: "20210001", nama: "Budi Santoso", jurusan: "Teknik Informatika", nilai: 85 },
  { nim: "20210002", nama: "Siti Aminah", jurusan: "Teknik Informatika", nilai: 92 },
  { nim: "20210003", nama: "Andi Wijaya", jurusan: "Sistem Informasi", nilai: 78 },
  { nim: "20210004", nama: "Citra Dewi", jurusan: "Teknik Elektro", nilai: 95 },
  { nim: "20210005", nama: "Eko Prasetyo", jurusan: "Sistem Informasi", nilai: 68 }
];

let indexEditMhs = null;

// Menampilkan Data ke Tabel HTML (READ)
window.tampilkanTabelMhs = function(data = listMahasiswa) {
  const tbody = document.getElementById("mhs-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center;">Data kosong.</td></tr>`;
    return;
  }

  data.forEach((mhs) => {
    const indexAsli = listMahasiswa.findIndex((item) => item.nim === mhs.nim);
    tbody.innerHTML += `
      <tr>
        <td>${mhs.nim}</td>
        <td>${mhs.nama}</td>
        <td>${mhs.jurusan}</td>
        <td><strong>${mhs.nilai}</strong></td>
        <td>
          <button onclick="editMhsData(${indexAsli})" style="padding: 2px 8px; background-color: #eab308; color: white; border: none; border-radius: 3px; cursor: pointer;">Edit</button>
          <button onclick="hapusMhsData(${indexAsli})" style="padding: 2px 8px; background-color: #ef4444; color: white; border: none; border-radius: 3px; cursor: pointer;">Hapus</button>
        </td>
      </tr>
    `;
  });
};

// Fitur CREATE & UPDATE
window.simpanMahasiswa = function() {
  const nim = document.getElementById("input-nim").value.trim();
  const nama = document.getElementById("input-nama").value.trim();
  const jurusan = document.getElementById("input-jurusan").value.trim();
  const nilai = parseFloat(document.getElementById("input-nilai").value);

  if (!nim || !nama || !jurusan || isNaN(nilai)) {
    alert("Harap isi semua kolom inputan dengan benar!");
    return;
  }

  if (indexEditMhs === null) {
    listMahasiswa.push({ nim, nama, jurusan, nilai });
    document.getElementById("mhs-status-info").innerText = "Data mahasiswa berhasil ditambahkan!";
  } else {
    listMahasiswa[indexEditMhs] = { nim, nama, jurusan, nilai };
    document.getElementById("mhs-status-info").innerText = "Data mahasiswa berhasil diperbarui!";
  }

  batalFormMhs();
  tampilkanTabelMhs();
};

// Fitur EDIT
window.editMhsData = function(index) {
  indexEditMhs = index;
  const mhs = listMahasiswa[index];

  document.getElementById("input-nim").value = mhs.nim;
  document.getElementById("input-nama").value = mhs.nama;
  document.getElementById("input-jurusan").value = mhs.jurusan;
  document.getElementById("input-nilai").value = mhs.nilai;

  const btnSimpan = document.getElementById("btn-simpan-mhs");
  btnSimpan.innerText = "Update Data";
  btnSimpan.style.backgroundColor = "#eab308";
  document.getElementById("btn-batal-mhs").style.display = "inline-block";
};

// Batal / Reset Form Input
window.batalFormMhs = function() {
  indexEditMhs = null;
  document.getElementById("input-nim").value = "";
  document.getElementById("input-nama").value = "";
  document.getElementById("input-jurusan").value = "";
  document.getElementById("input-nilai").value = "";

  const btnSimpan = document.getElementById("btn-simpan-mhs");
  btnSimpan.innerText = "Tambah Data";
  btnSimpan.style.backgroundColor = "#22c55e";
  document.getElementById("btn-batal-mhs").style.display = "none";
};

// Fitur DELETE
window.hapusMhsData = function(index) {
  if (confirm(`Yakin ingin menghapus ${listMahasiswa[index].nama}?`)) {
    listMahasiswa.splice(index, 1);
    tampilkanTabelMhs();
    document.getElementById("mhs-status-info").innerText = "Data berhasil dihapus!";
  }
};

// Method Array: Mencari Nilai Tertinggi (.reduce)
window.cariNilaiTertinggi = function() {
  if (listMahasiswa.length === 0) return;
  const tertinggi = listMahasiswa.reduce((max, mhs) => (mhs.nilai > max.nilai ? mhs : max), listMahasiswa[0]);
  tampilkanTabelMhs([tertinggi]);
  document.getElementById("mhs-status-info").innerText = `Nilai tertinggi: ${tertinggi.nama} (${tertinggi.nilai})`;
};

// Method Array: Filter Nilai > Rata-Rata (.reduce & .filter)
window.filterDiAtasRataRata = function() {
  if (listMahasiswa.length === 0) return;
  const total = listMahasiswa.reduce((sum, mhs) => sum + mhs.nilai, 0);
  const rataRata = total / listMahasiswa.length;
  const hasilFilter = listMahasiswa.filter((mhs) => mhs.nilai > rataRata);

  tampilkanTabelMhs(hasilFilter);
  document.getElementById("mhs-status-info").innerText = `Rata-rata: ${rataRata.toFixed(2)}. Menampilkan ${hasilFilter.length} mahasiswa di atas rata-rata.`;
};

// Method Array: Urutkan Nama A-Z (.sort)
window.urutkanNamaAsc = function() {
  const sorted = [...listMahasiswa].sort((a, b) => a.nama.localeCompare(b.nama));
  tampilkanTabelMhs(sorted);
  document.getElementById("mhs-status-info").innerText = "Diurutkan berdasarkan nama (A-Z)";
};

// Method Array: Urutkan Nama Z-A (.sort)
window.urutkanNamaDesc = function() {
  const sorted = [...listMahasiswa].sort((a, b) => b.nama.localeCompare(a.nama));
  tampilkanTabelMhs(sorted);
  document.getElementById("mhs-status-info").innerText = "Diurutkan berdasarkan nama (Z-A)";
};

// Reset Tampilan Tabel Ke Kondisi Awal
window.resetTampilkanSemua = function() {
  tampilkanTabelMhs(listMahasiswa);
  document.getElementById("mhs-status-info").innerText = "";
};

// Jalankan rendering tabel pertama kali
tampilkanTabelMhs();

// ==========================================
// MATERI: DOM & API (Demo Manipulasi DOM)
// ==========================================

// 1. Sisipkan HTML Demo DOM ke dalam elemen #result tanpa merusak elemen sebelumnya
document.getElementById("result").insertAdjacentHTML("beforeend", `
  <hr>
  <div class="dom-demo p-4 my-4 border border-gray-300 rounded" style="padding: 16px; margin: 16px 0; border: 1px solid #ccc; border-radius: 6px;">
    <h2 class="text-xl font-bold mb-3" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">Demo Manipulasi DOM</h2>
    <div id="dom-output" class="mb-3" style="margin-bottom: 12px; min-height: 20px;"></div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <button id="btn-tambah-item" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" style="padding: 8px 16px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">Tambah Item</button>
      <button id="btn-hapus-item" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" style="padding: 8px 16px; background-color: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer;">Hapus Item</button>
      <button id="btn-ubah-warna" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" style="padding: 8px 16px; background-color: #22c55e; color: white; border: none; border-radius: 4px; cursor: pointer;">Ubah Warna</button>
    </div>
  </div>
`);

// 2. Logika Manipulasi DOM
const domOutput = document.getElementById("dom-output");
let itemCount = 0;

// Fungsi untuk menambahkan item
document.getElementById("btn-tambah-item").addEventListener("click", function() {
  itemCount++;
  const newItem = document.createElement("div");
  newItem.className = "p-2 mb-2 bg-gray-100 rounded";
  newItem.style.padding = "8px";
  newItem.style.marginBottom = "8px";
  newItem.style.backgroundColor = "#f3f4f6";
  newItem.style.borderRadius = "4px";
  newItem.innerText = `Item ${itemCount}`;
  domOutput.appendChild(newItem);
});

// Fungsi untuk menghapus item
document.getElementById("btn-hapus-item").addEventListener("click", function() {
  if (domOutput.lastChild) {
    domOutput.removeChild(domOutput.lastChild);
    itemCount--;
  }
});

// Fungsi untuk mengubah warna background
document.getElementById("btn-ubah-warna").addEventListener("click", function() {
  const colors = ["#dbeafe", "#dcfce7", "#fef9c3", "#fce7f3"]; // Padanan warna Tailwind: blue, green, yellow, pink
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  domOutput.style.backgroundColor = randomColor;
  domOutput.style.padding = "12px";
  domOutput.style.borderRadius = "6px";
});

// ==========================================
// MATERI: FETCH API & ASYNC/AWAIT
// ==========================================

// 1. Sisipkan HTML Demo Fetch API ke dalam elemen #result secara aman
document.getElementById("result").insertAdjacentHTML("beforeend", `
  <hr>
  <div class="api-demo p-4 my-4 border border-gray-300 rounded" style="padding: 16px; margin: 16px 0; border: 1px solid #ccc; border-radius: 6px;">
    <h2 class="text-xl font-bold mb-3" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 12px;">Demo Fetch API</h2>
    <button id="btn-fetch" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" style="padding: 8px 16px; background-color: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">Ambil Data Post</button>
    <div id="api-output" class="mt-3" style="margin-top: 12px;"></div>
  </div>
`);

// 2. Logika Fetch API dengan async/await
document.getElementById("btn-fetch").addEventListener("click", async function() {
  const apiOutput = document.getElementById("api-output");
  apiOutput.innerHTML = "<p style='color: #6b7280;'>Memuat data...</p>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    apiOutput.innerHTML = "<h3 class='font-bold mb-2' style='font-weight: bold; margin-bottom: 8px;'>Daftar Post:</h3>";

    data.slice(0, 5).forEach((post) => {
      apiOutput.innerHTML += `
        <div class="p-3 mb-2 bg-gray-100 rounded" style="padding: 12px; margin-bottom: 8px; background-color: #f3f4f6; border-radius: 6px;">
          <h4 class="font-semibold" style="font-weight: 600; margin-bottom: 4px; text-transform: capitalize;">${post.title}</h4>
          <p class="text-sm" style="font-size: 0.875rem; color: #4b5563;">${post.body}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    apiOutput.innerHTML = `
      <div class="p-3 bg-red-100 text-red-800 rounded" style="padding: 12px; background-color: #fee2e2; color: #991b1b; border-radius: 6px;">
        Gagal mengambil data: ${error.message}
      </div>
    `;
  }
});

