window.addEventListener('DOMContentLoaded', () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const sections = document.querySelectorAll("section[id]");
    const navbarCollapse = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll(".nav-link");

    // Auto-close navbar on link click (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });

    // Scroll to top button behavior
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Smooth scroll for nav-link
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Active nav-link on scroll
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });

    // Countdown Timer (batas 31 Desember 2025)
    const targetDate = new Date(2025, 11, 31, 23, 59, 59).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const cdDay = document.getElementById("cd-day");
        const cdHour = document.getElementById("cd-hour");
        const cdMinute = document.getElementById("cd-minute");
        const cdSecond = document.getElementById("cd-second");

        if (!cdDay || !cdHour || !cdMinute || !cdSecond) return;

        if (distance <= 0) {
            cdDay.textContent = "00";
            cdHour.textContent = "00";
            cdMinute.textContent = "00";
            cdSecond.textContent = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        cdDay.textContent = String(days).padStart(2, "0");
        cdHour.textContent = String(hours).padStart(2, "0");
        cdMinute.textContent = String(minutes).padStart(2, "0");
        cdSecond.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // === Info Gelombang Otomatis dengan Animasi ===
    function updateGelombangInfo() {
        const infoTop = document.getElementById("gelombang-info");
        const infoBottom = document.getElementById("gelombang-info-bottom");
        if (!infoTop && !infoBottom) return;

        const now = new Date();

        // Rentang tanggal tiap gelombang
        const g1Start = new Date(2025, 10, 1);   // 1 Nov 2025
        const g1End   = new Date(2025, 11, 31);  // 31 Des 2025
        const g2Start = new Date(2026, 0, 1);    // 1 Jan 2026
        const g2End   = new Date(2026, 3, 30);   // 30 April 2026
        const g3Start = new Date(2026, 4, 1);    // 1 Mei 2026
        const g3End   = new Date(2026, 6, 24);   // 12 Juli 2026

        let message = "";
        let alertClass = "";

        if (now >= g1Start && now <= g1End) {
            message = "🟢 Gelombang Indent (1 Nov – 31 Des 2025): Gratis Uang Gedung + Merchandise Eksklusif!";
            alertClass = "alert-success";
        } else if (now >= g2Start && now <= g2End) {
            message = "🟡 Gelombang 1 (1 Januari–30 April 2026): Potongan Uang Gedung 50%!";
            alertClass = "alert-warning text-dark";
        } else if (now >= g3Start && now <= g3End) {
            message = "🔴 Gelombang 2 (1 Mei–12 Juli 2026): Tanpa Potongan (biaya normal)";
            alertClass = "alert-danger";
        } else if (now < g1Start) {
            message = "📅 Pendaftaran dibuka 1 November 2025 (Gelombang Indent)";
            alertClass = "alert-info";
        } else if (now > g3End) {
            message = "⛔ Pendaftaran PPDB 2026/2027 telah ditutup.";
            alertClass = "alert-secondary";
        }

        const alertHTML = `
            <div class="alert ${alertClass} fw-bold shadow-sm d-inline-block px-4 py-2 fade-in" role="alert">
                ${message}
            </div>
        `;

        if (infoTop) infoTop.innerHTML = alertHTML;
        if (infoBottom) infoBottom.innerHTML = alertHTML;

        // Tambahkan animasi "pulse" setelah fade-in
        const alerts = document.querySelectorAll(".fade-in");
        alerts.forEach(el => {
            el.classList.add("pulse-once");
            setTimeout(() => el.classList.remove("pulse-once"), 1200);
        });
    }

    updateGelombangInfo();
    setInterval(updateGelombangInfo, 60 * 60 * 1000); // update tiap jam
});
