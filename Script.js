// ==================== GLOBAL VARIABLES ====================
let websiteData = {};

// ==================== INITIALIZATION ====================
function initData() {
    const savedData = localStorage.getItem('smkRadarData');
    if (savedData) {
        websiteData = JSON.parse(savedData);
    } else {
        websiteData = defaultData;
        saveData();
    }
    renderAll();
}

function saveData() {
    localStorage.setItem('smkRadarData', JSON.stringify(websiteData));
}

// ==================== MODAL FUNCTIONS ====================
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// ==================== LOGIN HANDLER ====================
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'smkradar123') {
        closeModal('adminLoginModal');
        openModal('adminPanelModal');
        loadAdminData();
    } else {
        alert('Username atau password salah!');
    }
}

// ==================== TAB NAVIGATION ====================
function showTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');
}

// ==================== LOAD ADMIN DATA ====================
function loadAdminData() {
    // Logo
    document.getElementById('logoUrlInput').value = websiteData.logo.url || '';
    document.getElementById('logoTextInput').value = websiteData.logo.text || 'Radar';
    
    // Hero
    document.getElementById('heroTitleInput').value = websiteData.hero.title;
    document.getElementById('heroDescInput').value = websiteData.hero.description;
    
    // Visi Misi
    document.getElementById('visiInput').value = websiteData.visiMisi.visi;
    document.getElementById('misiInput').value = websiteData.visiMisi.misi.join('; ');
    
    // SPMB
    document.getElementById('tahunAjaranInput').value = websiteData.spmb.tahunAjaran;
    document.getElementById('pendaftaranInput').value = websiteData.spmb.pendaftaran;
    document.getElementById('persyaratanInput').value = websiteData.spmb.persyaratan;
    document.getElementById('kontakNamaInput').value = websiteData.spmb.kontakNama;
    document.getElementById('kontakNomorInput').value = websiteData.spmb.kontakNomor;
    
    // Kontak
    document.getElementById('alamatInput').value = websiteData.kontak.alamat;
    document.getElementById('teleponInput').value = websiteData.kontak.telepon;
    document.getElementById('emailInput').value = websiteData.kontak.email;
    document.getElementById('instagramInput').value = websiteData.kontak.sosial.instagram;
    document.getElementById('facebookInput').value = websiteData.kontak.sosial.facebook;
    document.getElementById('youtubeInput').value = websiteData.kontak.sosial.youtube;
    document.getElementById('tiktokInput').value = websiteData.kontak.sosial.tiktok;
    
    // Load lists
    renderJurusanList();
    renderEkskulList();
    renderPrestasiList();
}

// ==================== SAVE FUNCTIONS ====================
function saveLogo() {
    websiteData.logo.url = document.getElementById('logoUrlInput').value;
    websiteData.logo.text = document.getElementById('logoTextInput').value;
    saveData();
    renderLogo();
    alert('Logo berhasil disimpan!');
}

function saveHero() {
    websiteData.hero.title = document.getElementById('heroTitleInput').value;
    websiteData.hero.description = document.getElementById('heroDescInput').value;
    saveData();
    renderHero();
    alert('Hero section berhasil disimpan!');
}

function saveVisiMisi() {
    websiteData.visiMisi.visi = document.getElementById('visiInput').value;
    const misiText = document.getElementById('misiInput').value;
    websiteData.visiMisi.misi = misiText.split(';').map(item => item.trim());
    saveData();
    renderVisiMisi();
    alert('Visi & Misi berhasil disimpan!');
}

function saveSPMB() {
    websiteData.spmb.tahunAjaran = document.getElementById('tahunAjaranInput').value;
    websiteData.spmb.pendaftaran = document.getElementById('pendaftaranInput').value;
    websiteData.spmb.persyaratan = document.getElementById('persyaratanInput').value;
    websiteData.spmb.kontakNama = document.getElementById('kontakNamaInput').value;
    websiteData.spmb.kontakNomor = document.getElementById('kontakNomorInput').value;
    saveData();
    renderSPMB();
    alert('Data SPMB berhasil disimpan!');
}

function saveKontak() {
    websiteData.kontak.alamat = document.getElementById('alamatInput').value;
    websiteData.kontak.telepon = document.getElementById('teleponInput').value;
    websiteData.kontak.email = document.getElementById('emailInput').value;
    websiteData.kontak.sosial.instagram = document.getElementById('instagramInput').value;
    websiteData.kontak.sosial.facebook = document.getElementById('facebookInput').value;
    websiteData.kontak.sosial.youtube = document.getElementById('youtubeInput').value;
    websiteData.kontak.sosial.tiktok = document.getElementById('tiktokInput').value;
    saveData();
    renderKontak();
    alert('Data kontak berhasil disimpan!');
}

// ==================== JURUSAN CRUD ====================
function renderJurusanList() {
    const container = document.getElementById('jurusanList');
    container.innerHTML = '';
    
    websiteData.jurusan.forEach((j, index) => {
        container.innerHTML += `
            <div class="admin-item">
                <div><strong>${j.nama}</strong> - ${j.deskripsi.substring(0, 30)}...</div>
                <div>
                    <button class="btn-small" onclick="editJurusan(${index})">Edit</button>
                    <button class="btn-small-danger" onclick="deleteJurusan(${index})">Hapus</button>
                </div>
            </div>
        `;
    });
}

function editJurusan(index) {
    const j = websiteData.jurusan[index];
    const newNama = prompt('Nama Jurusan:', j.nama);
    if (!newNama) return;
    const newIcon = prompt('Icon (contoh: fa-network-wired):', j.icon);
    if (!newIcon) return;
    const newDeskripsi = prompt('Deskripsi:', j.deskripsi);
    if (!newDeskripsi) return;
    
    websiteData.jurusan[index] = {...j, nama: newNama, icon: newIcon, deskripsi: newDeskripsi};
    saveData();
    renderJurusan();
    renderJurusanList();
}

function deleteJurusan(index) {
    if (confirm('Yakin hapus jurusan ini?')) {
        websiteData.jurusan.splice(index, 1);
        saveData();
        renderJurusan();
        renderJurusanList();
    }
}

function addJurusan() {
    const newNama = prompt('Nama Jurusan:');
    if (!newNama) return;
    const newIcon = prompt('Icon (contoh: fa-network-wired):');
    if (!newIcon) return;
    const newDeskripsi = prompt('Deskripsi:');
    if (!newDeskripsi) return;
    
    websiteData.jurusan.push({
        id: Date.now(),
        icon: newIcon,
        nama: newNama,
        deskripsi: newDeskripsi,
        warna: "#B71C1C"
    });
    saveData();
    renderJurusan();
    renderJurusanList();
}

// ==================== EKSKUL CRUD ====================
function renderEkskulList() {
    const container = document.getElementById('ekskulList');
    container.innerHTML = '';
    
    websiteData.ekskul.forEach((e, index) => {
        container.innerHTML += `
            <div class="admin-item">
                <div><strong>${e.nama}</strong> (${e.kategori})</div>
                <div>
                    <button class="btn-small" onclick="editEkskul(${index})">Edit</button>
                    <button class="btn-small-danger" onclick="deleteEkskul(${index})">Hapus</button>
                </div>
            </div>
        `;
    });
}

function editEkskul(index) {
    const e = websiteData.ekskul[index];
    const newNama = prompt('Nama Ekstrakurikuler:', e.nama);
    if (!newNama) return;
    const newIcon = prompt('Icon (contoh: fa-futbol):', e.icon);
    if (!newIcon) return;
    const newKategori = prompt('Kategori (olahraga/kesenian/akademik/keterampilan):', e.kategori);
    if (!newKategori) return;
    
    websiteData.ekskul[index] = {...e, nama: newNama, icon: newIcon, kategori: newKategori};
    saveData();
    renderEkskul();
    renderEkskulList();
}

function deleteEkskul(index) {
    if (confirm('Yakin hapus ekstrakurikuler ini?')) {
        websiteData.ekskul.splice(index, 1);
        saveData();
        renderEkskul();
        renderEkskulList();
    }
}

function addEkskul() {
    const newNama = prompt('Nama Ekstrakurikuler:');
    if (!newNama) return;
    const newIcon = prompt('Icon (contoh: fa-futbol):');
    if (!newIcon) return;
    const newKategori = prompt('Kategori (olahraga/kesenian/akademik/keterampilan):');
    if (!newKategori) return;
    
    websiteData.ekskul.push({
        id: Date.now(),
        icon: newIcon,
        nama: newNama,
        kategori: newKategori
    });
    saveData();
    renderEkskul();
    renderEkskulList();
}

// ==================== PRESTASI CRUD ====================
function renderPrestasiList() {
    const container = document.getElementById('prestasiList');
    container.innerHTML = '';
    
    websiteData.prestasi.forEach((p, index) => {
        container.innerHTML += `
            <div class="admin-item">
                <div><strong>${p.judul}</strong></div>
                <div>
                    <button class="btn-small" onclick="editPrestasi(${index})">Edit</button>
                    <button class="btn-small-danger" onclick="deletePrestasi(${index})">Hapus</button>
                </div>
            </div>
        `;
    });
}

function editPrestasi(index) {
    const p = websiteData.prestasi[index];
    const newJudul = prompt('Judul Prestasi:', p.judul);
    if (!newJudul) return;
    const newIcon = prompt('Icon (contoh: fa-trophy):', p.icon);
    if (!newIcon) return;
    const newDeskripsi = prompt('Deskripsi:', p.deskripsi);
    if (!newDeskripsi) return;
    
    websiteData.prestasi[index] = {...p, judul: newJudul, icon: newIcon, deskripsi: newDeskripsi};
    saveData();
    renderPrestasi();
    renderPrestasiList();
}

function deletePrestasi(index) {
    if (confirm('Yakin hapus prestasi ini?')) {
        websiteData.prestasi.splice(index, 1);
        saveData();
        renderPrestasi();
        renderPrestasiList();
    }
}

function addPrestasi() {
    const newJudul = prompt('Judul Prestasi:');
    if (!newJudul) return;
    const newIcon = prompt('Icon (contoh: fa-trophy):');
    if (!newIcon) return;
    const newDeskripsi = prompt('Deskripsi:');
    if (!newDeskripsi) return;
    
    websiteData.prestasi.push({
        id: Date.now(),
        icon: newIcon,
        judul: newJudul,
        deskripsi: newDeskripsi
    });
    saveData();
    renderPrestasi();
    renderPrestasiList();
}

// ==================== RENDER FUNCTIONS ====================
function renderLogo() {
    const logoImg = document.getElementById('logoImage');
    if (logoImg && websiteData.logo.url) {
        logoImg.src = websiteData.logo.url;
    }
    document.getElementById('logoText').textContent = websiteData.logo.text;
}

function renderHero() {
    document.getElementById('heroTitle').textContent = websiteData.hero.title;
    document.getElementById('heroDescription').textContent = websiteData.hero.description;
}

function renderVisiMisi() {
    document.getElementById('visiText').textContent = websiteData.visiMisi.visi;
    const misiList = document.getElementById('misiList');
    misiList.innerHTML = '';
    websiteData.visiMisi.misi.forEach(m => {
        const li = document.createElement('li');
        li.textContent = m;
        misiList.appendChild(li);
    });
}

function renderJurusan() {
    const container = document.getElementById('jurusanContainer');
    container.innerHTML = '';
    websiteData.jurusan.forEach(j => {
        container.innerHTML += `
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-inner">
                    <div class="flip-front"><i class="fas ${j.icon}"></i><h3>${j.nama}</h3></div>
                    <div class="flip-back"><h4>${j.nama}</h4><p>${j.deskripsi}</p><small>👉 klik balik</small></div>
                </div>
            </div>
        `;
    });
}

function renderEkskul() {
    const container = document.getElementById('ekskulContainer');
    container.innerHTML = '';
    document.getElementById('ekskulCount').textContent = websiteData.ekskul.length + '+';
    
    websiteData.ekskul.forEach(e => {
        container.innerHTML += `
            <div class="ekskul-card" data-category="${e.kategori}">
                <i class="fas ${e.icon}"></i><h4>${e.nama}</h4>
                <span class="category-tag">${e.kategori.charAt(0).toUpperCase() + e.kategori.slice(1)}</span>
            </div>
        `;
    });
}

function renderPrestasi() {
    const container = document.getElementById('prestasiContainer');
    container.innerHTML = '';
    websiteData.prestasi.forEach(p => {
        container.innerHTML += `
            <div class="prestasi-card">
                <i class="fas ${p.icon}"></i><h3>${p.judul}</h3><p>${p.deskripsi}</p>
            </div>
        `;
    });
}

function renderSPMB() {
    document.getElementById('tahunAjaran').textContent = websiteData.spmb.tahunAjaran;
    const container = document.getElementById('spmbContainer');
    container.innerHTML = `
        <div class="spmb-info"><i class="fas fa-calendar-alt"></i><h3>Pendaftaran</h3><p>${websiteData.spmb.pendaftaran}</p></div>
        <div class="spmb-info"><i class="fas fa-file-alt"></i><h3>Persyaratan</h3><p>${websiteData.spmb.persyaratan}</p></div>
        <div class="spmb-info"><i class="fas fa-phone-alt"></i><h3>Kontak Person</h3><p>${websiteData.spmb.kontakNama}</p><p><a href="tel:${websiteData.spmb.kontakNomor}">${websiteData.spmb.kontakNomor}</a></p></div>
    `;
}

function renderKontak() {
    document.getElementById('alamat').textContent = websiteData.kontak.alamat;
    document.getElementById('telepon').textContent = websiteData.kontak.telepon;
    document.getElementById('email').textContent = websiteData.kontak.email;
}

function renderAll() {
    renderLogo();
    renderHero();
    renderVisiMisi();
    renderJurusan();
    renderEkskul();
    renderPrestasi();
    renderSPMB();
    renderKontak();
}

// ==================== FILTER EKSKUL ====================
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            document.querySelectorAll('.ekskul-card').forEach(card => {
                card.style.display = filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
            });
        });
    });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) navLinks.classList.remove('show');
            });
        });
    }
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    initData();
    initMobileMenu();
    initSmoothScroll();
    initFilters();
    
    document.getElementById('adminLoginBtn').addEventListener('click', () => openModal('adminLoginModal'));
    
    window.onclick = (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
});