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



const API_URL = 'https://script.google.com/macros/s/AKfy.../exec'; // ganti dengan URL Web App

async function loadSliderImages() {
  try {
    const res = await fetch(API_URL);
    const images = await res.json();
    const slider = document.getElementById('slider');

    images.forEach((url, index) => {
      const img = document.createElement('img');
      img.src = url;
      if (index === 0) img.classList.add('active');
      slider.appendChild(img);
    });

    let current = 0;
    setInterval(() => {
      const imgs = slider.querySelectorAll('img');
      imgs[current].classList.remove('active');
      current = (current + 1) % imgs.length;
      imgs[current].classList.add('active');
    }, 3000); // ganti delay sesuai kebutuhan
  } catch (error) {
    console.error("Gagal memuat gambar slider:", error);
  }
}

document.addEventListener('DOMContentLoaded', loadSliderImages);
</script>
