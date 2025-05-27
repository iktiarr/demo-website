// cek online atau offline-------------------------------------------------------------------------
window.addEventListener("online", () => alert("Koneksi internet anda terhubung"));
window.addEventListener("offline", () => alert("Koneksi internet anda terputus"));

// Produk App------------------------------------------------------------------------------------
function produkApp() {
  return {
    searchQuery: "",
    filter: "default",
    showToko: false,
    filteredProduk: [],
    recommendations: [],
    produkList: [
      {
        nama: "Aplikasi Kasir",
        bio: "Sistem kasir modern untuk UMKM",
        harga: 150000,
        link: "#",
        gambar: "aset/bbb1.jpg",
      },
      {
        nama: "Sistem Inventaris",
        bio: "Manajemen stok dan gudang",
        harga: 250000,
        link: "#",
        gambar: "aset/bbb2.jpg",
      },
      {
        nama: "Aplikasi Absensi",
        bio: "Absensi online dengan GPS",
        harga: 100000,
        link: "#",
        gambar: "aset/bbb3.jpg",
      },
      {
        nama: "Website hacker",
        bio: "Tampilan hacker yang menyeramkan",
        harga: 1000000,
        link: "#",
        gambar: "aset/bbb4.jpg",
      },
    ],

    init() {
      this.applyFilter();
    },

    applyFilter() {
      let baseList = [...this.produkList];
      if (this.searchQuery.trim()) {
        const query = this.searchQuery.toLowerCase();
        baseList = baseList.filter(
          (p) =>
            p.nama.toLowerCase().includes(query) ||
            p.bio.toLowerCase().includes(query)
        );
      }
      switch (this.filter) {
        case "name":
          baseList.sort((a, b) => a.nama.localeCompare(b.nama));
          break;
        case "balikname":
          baseList.sort((a, b) => b.nama.localeCompare(a.nama));
          break;
        case "cheapest":
          baseList.sort((a, b) => a.harga - b.harga);
          break;
        case "expensive":
          baseList.sort((a, b) => b.harga - a.harga);
          break;
        default:
          break;
      }
      this.filteredProduk = baseList;
      this.updateRecommendations();
    },
    updateRecommendations() {
      const query = this.searchQuery.toLowerCase();
      this.recommendations = this.searchQuery
        ? this.produkList
            .map((p) => p.nama)
            .filter((nama) => nama.toLowerCase().includes(query))
            .slice(0, 5)
        : [];
    },
    selectRecommendation(rekom) {
      this.searchQuery = rekom;
      this.recommendations = [];
      this.applyFilter();
    },

    toggleToko() {
      this.showToko = !this.showToko;
    },

    highlight(text) {
      if (!this.searchQuery.trim()) return text;
      const regex = new RegExp(`(${this.searchQuery})`, "gi");
      return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
    },
  };
}

//logika foto untuk section pendidikan--------------------------------------------------
function openPreview(src) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("previewImage");
  img.src = src;
  modal.classList.remove("hidden");
}
function closePreview() {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
}





function closeDemoAlert() {
  document.getElementById("demoAlert").style.display = "none";
}

// Tampilkan modal setelah halaman dimuat
window.addEventListener("load", () => {
  document.getElementById("demoAlert").style.display = "flex";
});