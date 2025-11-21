// Home Page: Welcome speech - Prompt for name and fill title
if (document.getElementById('welcome-title')) {
    const userName = prompt('Enter your name for a personalized welcome:') || 'Visitor';
    document.getElementById('welcome-title').textContent = `Hi ${userName}, Welcome To Website`;
}

// Contact Form: Validation and show values on submit
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validation
        const name = document.getElementById('name').value.trim();
        const jenis = document.getElementById('jenis').value;
        const tanggal = document.getElementById('tanggal').value;
        const pesan = document.getElementById('pesan').value.trim();
        
        if (!name || !jenis || !tanggal || !pesan) {
            alert('Please fill all fields correctly.');
            return;
        }
        
        // Show values in info box
        const submittedData = document.getElementById('submitted-data');
        submittedData.innerHTML = `
            <p><strong>Nama:</strong> ${name}</p>
            <p><strong>Jenis Kelamin:</strong> ${jenis === 'laki' ? 'Laki-laki' : 'Perempuan'}</p>
            <p><strong>Tanggal Lahir:</strong> ${new Date(tanggal).toLocaleDateString()}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        `;
        
        alert('Message submitted successfully!');
        form.reset(); // Optional: Reset form
    });
}