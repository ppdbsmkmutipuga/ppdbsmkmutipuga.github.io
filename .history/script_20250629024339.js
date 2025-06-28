document.addEventListener('DOMContentLoaded', function () {
    // Scroll ke bagian pendaftaran
    const scrollButton = document.getElementById('scrollButton');
    const pendaftaranSection = document.getElementById('pendaftaran');

    if (scrollButton && pendaftaranSection) {
        scrollButton.addEventListener('click', function (e) {
            e.preventDefault();
            pendaftaranSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.onscroll = function () {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }

        // Animasi fade-in saat scroll
        document.querySelectorAll('.fade-in').forEach(function (el) {
            let rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('show');
            }
        });
    };

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Countdown ke gelombang 2 (1 April 2025)
    const countdownTarget = new Date("April 1, 2025 00:00:00").getTime();
    const countdownElement = document.createElement('div');
    countdownElement.className = 'text-center mt-4 fw-bold text-danger';
    pendaftaranSection.appendChild(countdownElement);

    setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownTarget - now;

        if (distance < 0) {
            countdownElement.innerHTML = "💥 Pendaftaran Gelombang 2 Dibuka!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `⏳ Gelombang 2 dimulai dalam: <strong>${days}h ${hours}j ${minutes}m ${seconds}d</strong>`;
    }, 1000);

    // Animasi awal untuk elemen .fade-in
    document.querySelectorAll('.fade-in').forEach(function (el) {
        el.classList.add('fade-in');
    });
});
