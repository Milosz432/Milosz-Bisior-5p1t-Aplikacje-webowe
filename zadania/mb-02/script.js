document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formContainer = document.getElementById('form-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        let isValid = true;
        document.getElementById('error-imie').textContent = '';
        document.getElementById('error-email').textContent = '';
        document.getElementById('error-wiadomosci').textContent = '';
        const imie = document.getElementById('imie').value.trim();
        const email = document.getElementById('email').value.trim();
        const wiadomosci = document.getElementById('wiadomosci').value.trim();

        if (imie === '') {
            document.getElementById('error-imie').textContent = 'Pole "Imię" nie może być puste.';
            isValid = false;
        }
        if (email === '') {
            document.getElementById('error-email').textContent = 'Pole "Email" nie może być puste.';
            isValid = false;
        }

        if (wiadomosci === '') {
            document.getElementById('error-wiadomosci').textContent = 'Pole "Wiadomość" nie może być puste.';
            isValid = false;
        }
        if (isValid) {
            formContainer.innerHTML = '<h3>Dziękujemy!</h3><p>Twoja wiadomość została pomyślnie wysłana.</p>';
        }
    });
});