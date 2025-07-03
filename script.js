window.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    const navbarCollapse = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    // === Navbar collapse on link click (for mobile) ===
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });

    // === Scroll to top button ===
    window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollTopBtn?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // === Smooth scroll on nav link click ===
    navLinks.forEach(link => {
        if (link.getAttribute("href").startsWith("#")) {
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
        }
    });

    // === Active nav link on scroll ===
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
});

// === Countdown Timer ===
window.addEventListener("load", function () {
    const targetDate = new Date(2025, 6, 12, 12, 0, 0).getTime(); // 12 Juli 2025 12:00 WIB

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            document.getElementById("cd-day").textContent = "00";
            document.getElementById("cd-hour").textContent = "00";
            document.getElementById("cd-minute").textContent = "00";
            document.getElementById("cd-second").textContent = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("cd-day").textContent = String(days).padStart(2, "0");
        document.getElementById("cd-hour").textContent = String(hours).padStart(2, "0");
        document.getElementById("cd-minute").textContent = String(minutes).padStart(2, "0");
        document.getElementById("cd-second").textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
