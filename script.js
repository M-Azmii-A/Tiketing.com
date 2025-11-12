// Data jadwal bus (contoh statis; bisa diganti dengan API)
const jadwalBus = [
    { rute: "Jakarta - Bandung", waktu: "08:00", harga: "Rp 50.000" },
    { rute: "Jakarta - Surabaya", waktu: "10:00", harga: "Rp 150.000" },
    { rute: "Bandung - Yogyakarta", waktu: "12:00", harga: "Rp 100.000" },
];

// Fungsi untuk menampilkan jadwal
function tampilkanJadwal() {
    const tbody = document.querySelector('#tabel-jadwal tbody');
    const selectRute = document.querySelector('#rute');
    
    jadwalBus.forEach(bus => {
        // Tambah ke tabel
        const row = tbody.insertRow();
        row.insertCell(0).textContent = bus.rute;
        row.insertCell(1).textContent = bus.waktu;
        row.insertCell(2).textContent = bus.harga;
        row.insertCell(3).innerHTML = '<button onclick="pilihRute(\'' + bus.rute + '\')">Pilih</button>';
        
        // Tambah ke dropdown pemesanan
        const option = document.createElement('option');
        option.value = bus.rute;
        option.textContent = bus.rute;
        selectRute.appendChild(option);
    });
}

// Fungsi untuk memilih rute dari jadwal
function pilihRute(rute) {
    document.querySelector('#rute').value = rute;
    document.querySelector('#pemesanan').scrollIntoView();
}

// Fungsi untuk menangani pemesanan
document.querySelector('#form-pemesanan').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.querySelector('#nama').value;
    const rute = document.querySelector('#rute').value;
    const tanggal = document.querySelector('#tanggal').value;
    const jumlah = document.querySelector('#jumlah').value;
    
    // Simulasi konfirmasi (dalam dunia nyata, kirim ke server)
    document.querySelector('#konfirmasi').textContent = 
        `Tiket berhasil dipesan! Nama: ${nama}, Rute: ${rute}, Tanggal: ${tanggal}, Jumlah: ${jumlah}. Total: Rp ${(jumlah * 50000).toLocaleString()}.`; // Harga dummy
    
    // Reset form
    this.reset();
});

// Fungsi untuk menangani formulir kontak
document.querySelector('#form-kontak').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.querySelector('#nama-kontak').value;
    const email = document.querySelector('#email-kontak').value;
    const pesan = document.querySelector('#pesan').value;
    
    // Simulasi pengiriman (dalam dunia nyata, kirim ke server)
    document.querySelector('#konfirmasi-kontak').textContent = 
        `Pesan berhasil dikirim! Terima kasih ${nama} (${email}). Kami akan segera menghubungi Anda.`;
    
    // Reset form
    this.reset();
});

// Jalankan saat halaman load
window.onload = tampilkanJadwal;