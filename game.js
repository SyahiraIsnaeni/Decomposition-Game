// ===== 15 STUDI KASUS =====
// b = nama 3 sub-masalah, c = kartu [teks, indeks sub-masalah yang benar], tip = pelajaran
// Level 1-5 mudah (2 kartu/bagian), 6-10 sedang (3 kartu/bagian), 11-15 tantangan (4 kartu/bagian), semua dari kehidupan sehari-hari
const CASES = [
 {e:'🎒',t:'Berangkat ke sekolah',b:['Bersiap di rumah','Di perjalanan','Di sekolah'],
  c:[['Mandi dan sarapan',0],['Masukkan buku ke tas',0],['Naik angkot atau sepeda',1],['Menyeberang di zebra cross',1],['Memberi salam ke guru',2],['Duduk di bangku kelas',2]],
  tip:'Masalah besar jadi mudah kalau dipecah menjadi urutan: sebelum, saat, dan sesudah.'},
 {e:'🥪',t:'Membuat sandwich',b:['Siapkan bahan','Menyusun','Menyajikan'],
  c:[['Ambil roti dan selada',0],['Cuci tomat',0],['Oles roti dengan mentega',1],['Taruh keju di atas roti',1],['Taruh sandwich di piring',2],['Potong jadi dua',2]],
  tip:'Resep adalah contoh dekomposisi: bahan, cara membuat, lalu menyajikan.'},
 {e:'🛏️',t:'Merapikan kamar',b:['Tempat tidur','Lantai','Meja dan lemari'],
  c:[['Tata bantal dan guling',0],['Lipat selimut',0],['Sapu lantai',1],['Buang sampah ke tong',1],['Susun buku di rak',2],['Gantung baju di lemari',2]],
  tip:'Pekerjaan besar jadi ringan kalau dibagi per area.'},
 {e:'🎈',t:'Pesta ulang tahun',b:['Dekorasi','Makanan','Permainan'],
  c:[['Tiup balon',0],['Pasang spanduk',0],['Pesan kue tart',1],['Siapkan minuman',1],['Main tebak gambar',2],['Siapkan hadiah lomba',2]],
  tip:'Pesta besar bisa dibagi ke beberapa teman, tiap orang pegang satu bagian.'},
 {e:'🧺',t:'Piknik di taman',b:['Bawa perlengkapan','Perjalanan','Kegiatan di taman'],
  c:[['Bawa tikar dan payung',0],['Isi botol minum',0],['Pilih taman terdekat',1],['Pastikan semua sudah naik mobil',1],['Gelar tikar lalu makan',2],['Bawa pulang sampah',2]],
  tip:'Mulai dari yang disiapkan, lalu yang dikerjakan, lalu yang dibereskan.'},
 {e:'🌻',t:'Menanam bunga matahari',b:['Siapkan','Menanam','Merawat'],
  c:[['Beli biji bunga',0],['Siapkan pot dan tanah',0],['Isi pot dengan tanah',1],['Buat lubang kecil di tanah',1],['Masukkan biji lalu tutup tanah',1],['Siram tiap pagi',2],['Taruh pot di tempat terang',2],['Cabut rumput liar',2],['Cari sekop kecil',0]],
  tip:'Urutan kerja: siapkan, kerjakan, rawat. Cocok untuk banyak proyek.'},
 {e:'🎨',t:'Membuat poster kebersihan',b:['Cari ide','Menggambar','Menghias'],
  c:[['Tentukan pesan poster',0],['Tanya ide ke teman',0],['Lihat contoh poster',0],['Gambar sketsa dengan pensil',1],['Buat huruf judul besar',1],['Gambar tong sampah',1],['Warnai dengan spidol',2],['Tambah stiker bintang',2],['Beri garis tepi',2]],
  tip:'Karya besar dikerjakan bertahap: ide dulu, lalu bentuk, lalu hiasan.'},
 {e:'🍜',t:'Memasak mi goreng',b:['Siapkan','Memasak','Menyajikan'],
  c:[['Ambil mi dan bumbu',0],['Siapkan panci dan piring',0],['Isi panci dengan air',0],['Rebus mi sampai lunak',1],['Tiriskan airnya',1],['Aduk mi dengan bumbu',1],['Taruh mi di piring',2],['Tambah telur dan kerupuk',2],['Ambil sendok dan garpu',2]],
  tip:'Memasak itu urutan: siapkan, masak, sajikan. Tiap bagian bisa dikerjakan satu per satu.'},
 {e:'🧹',t:'Piket kelas',b:['Papan tulis','Lantai','Meja dan kursi'],
  c:[['Hapus tulisan di papan',0],['Bersihkan penghapus',0],['Isi spidol atau kapur',0],['Sapu lantai',1],['Pel lantai yang kotor',1],['Buang sampah',1],['Rapikan susunan meja',2],['Dorong kursi ke meja',2],['Lap debu di meja',2]],
  tip:'Satu tugas besar dibagi per area, jadi teman-teman bisa membantu bersama.'},
 {e:'🐶',t:'Merawat hewan peliharaan',b:['Makan dan minum','Kebersihan','Bermain'],
  c:[['Isi mangkuk makanan',0],['Ganti air minum',0],['Beri makan tepat waktu',0],['Mandikan hewan',1],['Bersihkan kandang',1],['Sisir bulunya',1],['Ajak jalan-jalan',2],['Lempar bola kecil',2],['Beri mainan baru',2]],
  tip:'Merawat hewan itu banyak, tapi mudah kalau dipisah: makan, bersih, dan main.'},
 {e:'🛍️',t:'Belanja ke pasar',b:['Sebelum berangkat','Di pasar','Sampai di rumah'],
  c:[['Tulis daftar belanja',0],['Bawa uang dan tas',0],['Tanya ibu mau beli apa',0],['Cari sayur segar',1],['Tawar harga dengan sopan',1],['Bayar ke penjual',1],['Cuci sayuran',2],['Simpan telur di kulkas',2],['Beri tahu ibu uang kembalian',2],['Cek isi dompet',0],['Pilih buah yang matang',1],['Rapikan belanjaan di dapur',2]],
  tip:'Mulai dari yang disiapkan, lalu yang dilakukan, lalu yang dibereskan.'},
 {e:'🚂',t:'Liburan ke rumah nenek',b:['Persiapan','Perjalanan','Di rumah nenek'],
  c:[['Kemas baju ke koper',0],['Beli oleh-oleh',0],['Pamit ke tetangga',0],['Naik kereta api',1],['Makan bekal di jalan',1],['Lihat pemandangan dari jendela',1],['Salim ke nenek',2],['Bantu nenek menyapu',2],['Bermain di kebun',2],['Cek tiket kereta',0],['Tidur sebentar di kereta',1],['Makan masakan nenek',2]],
  tip:'Liburan juga bisa dipecah jadi tiga bagian: sebelum pergi, di jalan, dan sesudah sampai.'},
 {e:'🏆',t:'Lomba 17 Agustus',b:['Persiapan','Lomba','Penutup'],
  c:[['Pasang bendera merah putih',0],['Siapkan hadiah',0],['Bersihkan lapangan',0],['Balap karung',1],['Makan kerupuk',1],['Tarik tambang',1],['Bagi hadiah juara',2],['Foto bersama',2],['Kumpulkan sampah',2],['Pasang tali batas lomba',0],['Lomba lari estafet',1],['Umumkan nama para juara',2]],
  tip:'Acara besar dibagi: sebelum acara, saat acara, dan setelah acara.'},
 {e:'📖',t:'Mengerjakan PR',b:['Siapkan','Mengerjakan','Memeriksa'],
  c:[['Catat PR di buku',0],['Ambil buku dan pensil',0],['Rapikan meja belajar',0],['Baca soal pelan-pelan',1],['Tulis jawaban',1],['Hitung dengan teliti',1],['Baca ulang jawaban',2],['Perbaiki tulisan yang salah',2],['Masukkan PR ke tas',2],['Siapkan penghapus',0],['Pakai kertas coretan',1],['Cek hitungan sekali lagi',2]],
  tip:'PR yang banyak jadi ringan kalau dibagi: siapkan, kerjakan, lalu periksa.'},
 {e:'🏕️',t:'Berkemah Pramuka',b:['Perlengkapan','Kegiatan','Beres-beres'],
  c:[['Bawa tenda dan senter',0],['Bawa jaket dan selimut',0],['Bawa makanan dan minuman',0],['Api unggun dan lagu',1],['Jelajah alam',1],['Memasak bersama',1],['Bongkar tenda',2],['Bersihkan tempat kemah',2],['Hitung anggota sebelum pulang',2],['Bawa obat P3K',0],['Main permainan kelompok',1],['Bawa pulang semua barang',2]],
  tip:'Hebat! Kamu sudah bisa memecah masalah besar jadi langkah kecil yang jelas.'}
];

// ===== STATE =====
const $ = id => document.getElementById(id);
const KEY = 'pecah-masalah-v1';
let stars = JSON.parse(localStorage.getItem(KEY) || '[]'); // bintang per level
let cur = 0, hearts = 3, left = 0, sel = null;

const show = id => { document.querySelectorAll('.screen').forEach(s => s.classList.toggle('on', s.id === id)); };
const save = () => localStorage.setItem(KEY, JSON.stringify(stars));
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

// ===== PETA LEVEL =====
function renderMap() {
  const unlocked = stars.length; // level 0..unlocked terbuka
  $('grid').innerHTML = '';
  CASES.forEach((c, i) => {
    const b = document.createElement('button');
    const s = stars[i] || 0;
    b.className = 'lv' + (i === unlocked ? ' next' : '');
    b.disabled = i > unlocked;
    b.innerHTML = `<span class="em">${i > unlocked ? '🔒' : c.e}</span><b>${i + 1}. ${c.t}</b><small>${i < 5 ? 'Mudah' : i < 10 ? 'Sedang' : 'Tantangan'}</small><span class="st">${'★'.repeat(s)}${'☆'.repeat(3 - s)}</span>`;
    b.onclick = () => play(i);
    $('grid').append(b);
  });
  show('map');
}

// ===== MAIN =====
function play(i) {
  cur = i; hearts = 3; sel = null;
  const c = CASES[i];
  left = c.c.length;
  $('gEm').textContent = c.e;
  $('gNo').textContent = `Studi kasus ${i + 1} dari ${CASES.length}`;
  $('gTitle').textContent = c.t;
  drawHearts();
  $('buckets').innerHTML = '';
  c.b.forEach((name, k) => {
    const d = document.createElement('div');
    d.className = 'bk'; d.dataset.k = k;
    d.innerHTML = `<h4>${name}</h4>`;
    d.onclick = () => drop(k);
    d.ondragover = e => { e.preventDefault(); d.classList.add('hot'); };
    d.ondragleave = () => d.classList.remove('hot');
    d.ondrop = e => { e.preventDefault(); d.classList.remove('hot'); const n = e.dataTransfer.getData('text'); if (n !== '') { pick([...$('pool').children].find(x => x.dataset.i === n)); drop(k); } };
    $('buckets').append(d);
  });
  $('pool').innerHTML = '';
  shuffle(c.c.map((x, n) => ({ x, n }))).forEach(({ x, n }) => {
    const b = document.createElement('button');
    b.className = 'card'; b.textContent = x[0]; b.dataset.i = n; b.draggable = true;
    b.onclick = () => pick(b);
    b.ondragstart = e => e.dataTransfer.setData('text', n);
    $('pool').append(b);
  });
  $('modal').classList.remove('on');
  show('game');
}

function drawHearts() { $('hearts').textContent = '❤️'.repeat(hearts) + '🖤'.repeat(3 - hearts); }

function pick(card) {
  if (!card) return;
  document.querySelectorAll('.card.sel').forEach(x => x.classList.remove('sel'));
  sel = card; card.classList.add('sel');
}

function drop(k) {
  if (!sel || hearts <= 0 || !left) return;
  const c = CASES[cur], item = c.c[sel.dataset.i], bk = $('buckets').children[k];
  if (item[1] === k) {
    const chip = document.createElement('span');
    chip.className = 'chip'; chip.textContent = item[0];
    bk.append(chip); sel.remove(); sel = null; left--;
    if (!left) setTimeout(win, 500);
  } else {
    hearts--; drawHearts();
    [sel, bk].forEach(el => { el.classList.remove('bad'); void el.offsetWidth; el.classList.add('bad'); });
    const s = sel; setTimeout(() => s.classList.remove('bad'), 500);
    if (!hearts) setTimeout(lose, 600);
  }
}

// ===== HASIL =====
function modal(html) { $('box').innerHTML = html; $('modal').classList.add('on'); }

function win() {
  stars[cur] = Math.max(stars[cur] || 0, hearts);
  save();
  const c = CASES[cur], last = cur === CASES.length - 1;
  modal(`<div class="split"><i>${c.e}</i><i>🧩</i><i>🧩</i></div>
    <h2>${last ? 'Semua tuntas! 🎉' : 'Berhasil dipecah!'}</h2>
    <div class="stars">${'★'.repeat(hearts)}${'☆'.repeat(3 - hearts)}</div>
    <p class="tip">💡 ${c.tip}</p>
    <div class="row">${last ? '' : '<button class="btn" id="nx">Lanjut</button>'}<button class="btn ghost" id="mp" style="color:#1b1740;box-shadow:inset 0 0 0 2px #1b174055">Ke peta</button></div>`);
  confetti();
  if ($('nx')) $('nx').onclick = () => play(cur + 1);
  $('mp').onclick = () => { $('modal').classList.remove('on'); renderMap(); };
}

function lose() {
  modal(`<h2>Nyawa habis 😅</h2><p>Tidak apa-apa. Coba pikir: kartu ini termasuk bagian yang mana?</p>
    <div class="row"><button class="btn" id="rt">Coba lagi</button></div>`);
  $('rt').onclick = () => play(cur);
}

function confetti() {
  const col = ['#ffd23f', '#ff6b6b', '#2ec4b6', '#9b7bff'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('i');
    p.className = 'conf';
    p.style.cssText = `left:${Math.random() * 100}vw;background:${col[i % 4]};animation-duration:${1.8 + Math.random() * 1.6}s;animation-delay:${Math.random() * .5}s`;
    document.body.append(p); setTimeout(() => p.remove(), 4200);
  }
}

// ===== NAVIGASI =====
$('start').onclick = renderMap;
$('back').onclick = renderMap;
$('reset').onclick = () => { if (confirm('Hapus semua progres?')) { stars = []; save(); renderMap(); } };