// ===== 1. Dark mode toggle =====
const html = document.documentElement;
const tombolTema = document.getElementById("tombol-tema");
const ikonTema = tombolTema.querySelector(".ikon");
const teksTema = tombolTema.querySelector(".teks-tema");

// Menerapkan tema ("gelap" atau "terang") ke seluruh halaman
const terapkanTema = (tema) => {
  const gelap = tema === "gelap";
  html.setAttribute("data-tema", tema);
  ikonTema.textContent = gelap ? "\u2600" : "\u263E";
  teksTema.textContent = gelap ? "Mode Terang" : "Mode Gelap";
};

// Ambil pilihan tema terakhir (default: gelap)
let temaTersimpan = "gelap";
try {
  temaTersimpan = localStorage.getItem("tema") || "gelap";
} catch (error) {
  // localStorage tidak tersedia, pakai default
}
terapkanTema(temaTersimpan);

tombolTema.addEventListener("click", () => {
  const temaBaru = html.getAttribute("data-tema") === "gelap" ? "terang" : "gelap";
  terapkanTema(temaBaru);
  try {
    localStorage.setItem("tema", temaBaru);
  } catch (error) {
    // abaikan jika penyimpanan gagal
  }
});

// ===== 2. Form handling =====
const formKontak = document.querySelector("#kontak form");
const inputNama = document.getElementById("nama");
const pesanKonfirmasi = document.getElementById("pesan-konfirmasi");

formKontak.addEventListener("submit", (event) => {
  event.preventDefault(); // cegah halaman reload

  const nama = inputNama.value.trim();
  pesanKonfirmasi.textContent = `Halo ${nama}, pesan Anda berhasil terkirim!`;
  pesanKonfirmasi.classList.add("tampil");

  formKontak.reset();
});

// ===== 3. Smooth scroll =====
const linkAnchor = document.querySelectorAll('a[href^="#"]');

linkAnchor.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.getElementById(link.getAttribute("href").slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});