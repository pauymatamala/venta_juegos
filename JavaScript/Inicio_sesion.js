document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form-validation");
    const username = document.getElementById("name");
    const password = document.getElementById("password");
    const resetBtn = document.getElementById("resetBtn"); // Botón de reinicio

    form.addEventListener("submit", (e) => {
        let isValid = true;

        username.classList.remove('is-invalid', 'is-valid');
        password.classList.remove('is-invalid', 'is-valid');
        document.querySelectorAll('.invalid-feedback').forEach(el => el.style.display = 'none');

        if (!username.value.trim()) {
            isValid = false;
            username.classList.add('is-invalid');
            document.querySelector('#name ~ .invalid-feedback').style.display = 'block';
        } else {
            username.classList.add('is-valid');
        }

        if (!password.value.trim()) {
            isValid = false;
            password.classList.add('is-invalid');
            document.querySelector('#password ~ .invalid-feedback').style.display = 'block';
        } else {
            password.classList.add('is-valid');
        }

        if (!isValid) {
            e.preventDefault();
            e.stopPropagation();
        }

        form.classList.add('was-validated');
    });

    //Reinicio
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            form.reset(); // Reinicia el formulario
            username.classList.remove('is-invalid', 'is-valid');
            password.classList.remove('is-invalid', 'is-valid');
            document.querySelectorAll('.invalid-feedback').forEach(el => el.style.display = 'none');
            form.classList.remove('was-validated');
        });
    }
});
