const navbarCollapse = document.getElementById('navMenu');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    });
});


// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Smooth Scroll for Navbar Links
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

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

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

// Optional: Close navbar collapse on link click (mobile)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navCollapse = document.querySelector('.navbar-collapse');
        if (navCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navCollapse).toggle();
        }
    });
});


//Count Down
 document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date("2025-07-12T12:00:00+07:00").getTime();

    const daySpan = document.getElementById("cd-day");
    const hourSpan = document.getElementById("cd-hour");
    const minuteSpan = document.getElementById("cd-minute");
    const secondSpan = document.getElementById("cd-second");

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        daySpan.textContent = "00";
        hourSpan.textContent = "00";
        minuteSpan.textContent = "00";
        secondSpan.textContent = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daySpan.textContent = String(days).padStart(2, '0');
      hourSpan.textContent = String(hours).padStart(2, '0');
      minuteSpan.textContent = String(minutes).padStart(2, '0');
      secondSpan.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  });

