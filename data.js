// Data Default untuk Website
const defaultData = {
  logo: {
    url: "https://via.placeholder.com/150/FF0000/FFFFFF?text=SMK",
    text: "Radar"
  },
  hero: {
    title: "SMK Radar",
    description: "Sekolah Menengah Kejuruan unggulan dengan 4 jurusan kompeten dan puluhan ekstrakurikuler kreatif. Siapkan masa depanmu bersama kami!"
  },
  visiMisi: {
    visi: "Menjadi SMK unggulan yang menghasilkan lulusan berkarakter, kompeten, dan siap bersaing di era global dengan berlandaskan iman dan takwa.",
    misi: [
      "Menyelenggarakan pendidikan vokasi berkualitas sesuai kebutuhan industri.",
      "Membentuk peserta didik yang disiplin, kreatif, dan berjiwa wirausaha.",
      "Mengembangkan sarana prasarana pembelajaran berbasis teknologi.",
      "Menjalin kerjasama dengan dunia usaha dan industri.",
      "Menanamkan nilai-nilai kebangsaan dan karakter Pancasila."
    ]
  },
  jurusan: [
    {
      id: 1,
      icon: "fa-network-wired",
      nama: "TKJ",
      deskripsi: "Belajar merakit PC, instalasi LAN, konfigurasi server, keamanan jaringan, dan administrasi sistem. Siap jadi teknisi atau network engineer.",
      warna: "#B71C1C"
    },
    {
      id: 2,
      icon: "fa-calculator",
      nama: "AKL",
      deskripsi: "Menguasai siklus akuntansi, pembukuan, perpajakan, dan software akuntansi. Lulusan siap kerja di perusahaan atau jadi entrepreneur.",
      warna: "#B71C1C"
    },
    {
      id: 3,
      icon: "fa-paint-brush",
      nama: "DKV",
      deskripsi: "Belajar desain grafis, ilustrasi, fotografi, videografi, animasi, dan UI/UX. Jadi kreator visual handal dengan portofolio profesional.",
      warna: "#B71C1C"
    },
    {
      id: 4,
      icon: "fa-briefcase",
      nama: "MPLB",
      deskripsi: "Belajar administrasi perkantoran, manajemen arsip, humas, dan layanan bisnis. Siap menjadi tenaga administrasi profesional.",
      warna: "#B71C1C"
    }
  ],
  ekskul: [
    // Olahraga
    { id: 1, icon: "fa-futbol", nama: "Futsal", kategori: "olahraga" },
    { id: 2, icon: "fa-basketball-ball", nama: "Basket", kategori: "olahraga" },
    { id: 3, icon: "fa-volleyball-ball", nama: "Voli", kategori: "olahraga" },
    { id: 4, icon: "fa-table-tennis", nama: "Bulu Tangkis", kategori: "olahraga" },
    { id: 5, icon: "fa-user-ninja", nama: "Pencak Silat", kategori: "olahraga" },
    { id: 6, icon: "fa-khanda", nama: "Karate", kategori: "olahraga" },
    { id: 7, icon: "fa-medal", nama: "Taekwondo", kategori: "olahraga" },
    { id: 8, icon: "fa-swimmer", nama: "Renang", kategori: "olahraga" },
    { id: 9, icon: "fa-bicycle", nama: "Sepeda", kategori: "olahraga" },
    // Kesenian
    { id: 10, icon: "fa-mask", nama: "Tari Tradisional", kategori: "kesenian" },
    { id: 11, icon: "fa-music", nama: "Modern Dance", kategori: "kesenian" },
    { id: 12, icon: "fa-microphone-alt", nama: "Paduan Suara", kategori: "kesenian" },
    { id: 13, icon: "fa-theater-masks", nama: "Teater", kategori: "kesenian" },
    { id: 14, icon: "fa-guitar", nama: "Band", kategori: "kesenian" },
    { id: 15, icon: "fa-paint-brush", nama: "Seni Lukis", kategori: "kesenian" },
    // Akademik
    { id: 16, icon: "fa-camera-retro", nama: "Fotografi", kategori: "akademik" },
    { id: 17, icon: "fa-pen-fancy", nama: "Jurnalistik", kategori: "akademik" },
    { id: 18, icon: "fa-robot", nama: "Robotik", kategori: "akademik" },
    { id: 19, icon: "fa-laptop-code", nama: "Komputer", kategori: "akademik" },
    { id: 20, icon: "fa-language", nama: "Bahasa Inggris", kategori: "akademik" },
    { id: 21, icon: "fa-globe", nama: "Bahasa Jepang", kategori: "akademik" },
    // Keterampilan
    { id: 22, icon: "fa-campground", nama: "Pramuka", kategori: "keterampilan" },
    { id: 23, icon: "fa-flag", nama: "Paskibra", kategori: "keterampilan" },
    { id: 24, icon: "fa-heartbeat", nama: "PMR", kategori: "keterampilan" },
    { id: 25, icon: "fa-utensils", nama: "Tata Boga", kategori: "keterampilan" },
    { id: 26, icon: "fa-seedling", nama: "Kewirausahaan", kategori: "keterampilan" },
    { id: 27, icon: "fa-hiking", nama: "Pecinta Alam", kategori: "keterampilan" }
  ],
  prestasi: [
    {
      id: 1,
      icon: "fa-trophy",
      judul: "Juara 1 LKS Tingkat Kabupaten",
      deskripsi: "Bidang IT Network Systems Administration oleh Ananda Putra (TKJ)"
    },
    {
      id: 2,
      icon: "fa-medal",
      judul: "Juara 2 Futsal Antar SMK",
      deskripsi: "Tim futsal SMK Radar meraih posisi runner-up se-Kota"
    },
    {
      id: 3,
      icon: "fa-palette",
      judul: "Desain Poster Terbaik",
      deskripsi: "Lomba desain grafis tingkat provinsi diraih oleh Siti (DKV)"
    },
    {
      id: 4,
      icon: "fa-robot",
      judul: "Harapan 1 Robotik",
      deskripsi: "Tim robotik berhasil masuk final di ajang regional"
    }
  ],
  spmb: {
    tahunAjaran: "Tahun Ajaran 2025/2026",
    pendaftaran: "1 Maret - 30 Juni 2025",
    persyaratan: "Ijazah/SKL, KK, Akta, Pasfoto",
    kontakNama: "Adhitya",
    kontakNomor: "0812-3456-789"
  },
  galeri: [
    { icon: "fa-futbol", nama: "Futsal" },
    { icon: "fa-laptop", nama: "TKJ" },
    { icon: "fa-paint-brush", nama: "DKV" },
    { icon: "fa-calculator", nama: "AKL" },
    { icon: "fa-campground", nama: "Pramuka" },
    { icon: "fa-music", nama: "Band" }
  ],
  kontak: {
    alamat: "Jl. Pendidikan No. 123, Jakarta",
    telepon: "(021) 1234-5678",
    email: "info@smkradar.sch.id",
    sosial: {
      instagram: "#",
      facebook: "#",
      youtube: "#",
      tiktok: "#"
    }
  }
};