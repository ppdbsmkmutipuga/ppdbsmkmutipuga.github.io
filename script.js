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



// Optional: Close navbar collapse on link click (mobile)
// Tanggal target hitung mundur
  const targetDate = new Date("2025-07-12T12:00:00+07:00").getTime();

  const daysSpan = document.getElementById("days");
  const hoursSpan = document.getElementById("hours");
  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      daysSpan.innerHTML = "00";
      hoursSpan.innerHTML = "00";
      minutesSpan.innerHTML = "00";
      secondsSpan.innerHTML = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysSpan.innerHTML = String(days).padStart(2, "0");
    hoursSpan.innerHTML = String(hours).padStart(2, "0");
    minutesSpan.innerHTML = String(minutes).padStart(2, "0");
    secondsSpan.innerHTML = String(seconds).padStart(2, "0");
  }

  updateCountdown(); // Panggil pertama kali
  setInterval(updateCountdown, 1000); // Update setiap detik
