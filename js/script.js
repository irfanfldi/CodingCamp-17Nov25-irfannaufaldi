let userName = ""; // Tambah ini biar tidak error

welcomeMessage();
updateClock();
setInterval(updateClock, 1000); // Update jam setiap detik

function welcomeMessage() {
    if (!userName) {
        userName = prompt("Siapa nama kamu? 😊", "");
        if (!userName || userName.trim() === "") {
            userName = "Guest";
        }
    }

    const welcomeElement = document.getElementById("welcome-speech");
    if (welcomeElement) {
        welcomeElement.innerHTML = `Hi ${userName}, <br>Welcome to CopperClub!`;
    }
}

function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById("current-time").innerHTML = now.toLocaleDateString('id-ID', options);
}

// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Contact Form (sudah diperbaiki id-nya)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('input[type="text"]').value.trim();
        const jenis = form.querySelector('select').value;
        const tanggal = form.querySelector('input[type="date"]').value;
        const pesan = form.querySelector('textarea').value.trim();
        
        if (!name || !jenis || !tanggal || !pesan) {
            alert('Mohon isi semua kolom ya!');
            return;
        }
        
        document.getElementById('submitted-data').innerHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Jenis Kelamin:</strong> ${jenis}</p>
            <p><strong>Tanggal Lahir:</strong> ${new Date(tanggal).toLocaleDateString('id-ID')}</p>
            <p><strong>Pesan:</strong Sundanese ${pesan}</p>
        `;
        
        document.querySelector('.success-message').style.display = 'block';
        form.reset();
    });
}

// Nav active on scroll (bonus biar makin keren)
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});