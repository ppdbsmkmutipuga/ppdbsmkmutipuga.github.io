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

    // Countdown Timer
    const targetDate = new Date(2026, 2, 24, 12, 0, 0).getTime(); // 12 Juli 2025

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
});
