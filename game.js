// ===== 15 STUDI KASUS =====
// b = nama 3 sub-masalah, c = kartu [teks, indeks sub-masalah yang benar], tip = pelajaran
// Level 1-5 mudah (2 kartu/bagian), 6-10 sedang (3 kartu/bagian), 11-15 tantangan (game & aplikasi)
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
 {e:'📚',t:'Presentasi kelompok',b:['Cari bahan','Buat slide','Presentasi'],
  c:[['Baca buku di perpustakaan',0],['Catat hal penting',0],['Cari gambar yang cocok',0],['Tulis judul tiap slide',1],['Tempel gambar ke slide',1],['Cek huruf yang salah',1],['Latihan berbicara di depan cermin',2],['Bagi tugas bicara tiap anggota',2],['Jawab pertanyaan teman',2]],
  tip:'Kerja kelompok lebih seru kalau tiap anggota memegang satu bagian.'},
 {e:'🐱',t:'Game kucing melompati kotak',b:['Kucing','Kotak','Skor'],
  c:[['Kucing melompat saat layar disentuh',0],['Kucing jatuh lagi ke tanah',0],['Gambar kucing berlari',0],['Kotak muncul dari kanan',1],['Kotak bergerak ke kiri',1],['Kotak muncul di waktu acak',1],['Poin bertambah tiap lolos',2],['Tulis angka skor di layar',2],['Skor kembali 0 saat main lagi',2]],
  tip:'Di game, tiap benda punya tugasnya sendiri. Kamu bisa membuatnya satu per satu.'},
 {e:'⚽',t:'Game tangkap bola',b:['Pemain','Bola','Nilai dan nyawa'],
  c:[['Keranjang bergerak kiri dan kanan',0],['Keranjang mengikuti jari',0],['Gambar keranjang',0],['Bola jatuh dari atas',1],['Bola muncul di tempat acak',1],['Bola makin cepat',1],['Bola masuk keranjang: nilai +1',2],['Bola terlewat: nyawa berkurang',2],['Nyawa habis: permainan selesai',2]],
  tip:'Tanya dirimu: siapa yang bergerak, apa yang jatuh, dan bagaimana menang atau kalah?'},
 {e:'🐦',t:'Game Flappy Bird',b:['Burung','Pipa','Skor'],
  c:[['Burung jatuh karena gravitasi',0],['Burung naik saat layar diketuk',0],['Sayap burung mengepak',0],['Pipa muncul dengan celah acak',1],['Pipa bergeser ke kiri',1],['Burung kena pipa: kalah',1],['Tambah 1 poin tiap lewat pipa',2],['Tampilkan skor di atas',2],['Simpan skor tertinggi',2]],
  tip:'Game terkenal pun dibuat dari bagian-bagian kecil yang sederhana.'},
 {e:'🧮',t:'Aplikasi kalkulator',b:['Input (masukan)','Proses','Output (hasil)'],
  c:[['Tombol angka 0 sampai 9',0],['Tombol tambah dan kurang',0],['Layar menampung angka yang diketik',0],['Hitung penjumlahan',1],['Hitung perkalian',1],['Cek pembagian dengan nol',1],['Tampilkan hasil di layar',2],['Tombol C menghapus layar',2],['Tampilkan pesan error',2]],
  tip:'Pola Input, Proses, Output bisa dipakai di hampir semua program.'},
 {e:'❌',t:'Game Tic-Tac-Toe',b:['Papan','Giliran','Cek pemenang'],
  c:[['Gambar kotak 3×3',0],['Kosongkan papan saat mulai',0],['Gambar X dan O',0],['Pemain X dan O bergantian',1],['Kotak terisi tidak bisa diklik',1],['Tampilkan giliran siapa',1],['Cek 3 simbol sejajar',2],['Umumkan pemenang',2],['Tampilkan "Seri" jika penuh',2]],
  tip:'Pisahkan tampilan (papan), alur (giliran), dan aturan (cara menang).'},
 {e:'🐍',t:'Game Ular',b:['Ular','Makanan','Game over'],
  c:[['Ular bergerak sesuai tombol panah',0],['Badan ular makin panjang',0],['Ular terus berjalan sendiri',0],['Makanan muncul di tempat acak',1],['Ular makan: skor naik',1],['Makanan baru muncul setelah dimakan',1],['Ular menabrak tembok',2],['Ular menabrak badannya sendiri',2],['Tampilkan tombol main lagi',2]],
  tip:'Cari tahu dulu: siapa pemainnya, apa yang dikejar, dan kapan permainan berakhir.'},
 {e:'🏰',t:'Game petualangan ala Roblox',b:['Karakter','Dunia','Misi dan hadiah'],
  c:[['Karakter berjalan dan melompat',0],['Pilih baju karakter',0],['Karakter punya nyawa',0],['Buat pulau dan jembatan',1],['Tambah pohon dan gua',1],['Atur siang dan malam',1],['Cari 5 peti harta',2],['Dapat koin tiap misi selesai',2],['Naik level jika misi tuntas',2]],
  tip:'Game besar dibuat tim: ada yang urus karakter, dunia, dan misi. Itulah dekomposisi!'}
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