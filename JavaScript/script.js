document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("form-validation");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const email = document.getElementById("email");
    const date = document.getElementById("date");
    const errorMessage = document.getElementById("error-message");
    const errorText = document.getElementById("error-text");

    form.addEventListener("submit", (e) => {
        let isValid = form.checkValidity();
        const emailValue = email.value;
        const dateValue = new Date(date.value);
        const today = new Date();
        const age = today.getFullYear() - dateValue.getFullYear();
        const passwordValue = password.value;


        errorMessage.classList.add('d-none');
        errorText.textContent = '';
        password.classList.remove('is-invalid');
        confirmPassword.classList.remove('is-invalid');
        email.classList.remove('is-invalid');
        date.classList.remove('is-invalid');
        email.classList.remove('is-valid');
        password.classList.remove('is-valid');
        confirmPassword.classList.remove('is-valid');
        date.classList.remove('is-valid');


        if (passwordValue !== confirmPassword.value || confirmPassword.value === '') {
            isValid = false;
            confirmPassword.classList.add('is-invalid');
            errorText.textContent = "Las contraseñas no coinciden o no se ingresó la confirmación";
            errorMessage.classList.remove('d-none');
        } else if (passwordValue !== '') {
            confirmPassword.classList.add('is-valid');
        }


        if (!emailValue.includes('@') || !email.checkValidity()) {
            isValid = false;
            email.classList.add('is-invalid');
            errorText.textContent = "Por favor ingrese un correo electrónico válido";
            errorMessage.classList.remove('d-none');
        } else if (emailValue !== '') {
            email.classList.add('is-valid');
        }


        const hasUppercase = /[A-Z]/.test(passwordValue);
        const hasNumber = /\d/.test(passwordValue);
        
        if (!(hasUppercase && hasNumber) && passwordValue.length > 0) {
            isValid = false;
            password.classList.add('is-invalid');
            errorText.textContent = "La contraseña debe tener al menos un número y una letra mayúscula";
            errorMessage.classList.remove('d-none');
        } else if (hasUppercase && hasNumber) {
            password.classList.add('is-valid');
        }


        if (passwordValue.length < 6 || passwordValue.length > 18) {
            isValid = false;
            password.classList.add('is-invalid');
            errorText.textContent = "La contraseña debe tener entre 6 y 18 caracteres";
            errorMessage.classList.remove('d-none');
        }


        if (age < 13) {
            isValid = false;
            date.classList.add('is-invalid');
            errorText.textContent = "No tiene edad suficienta para registrarse";
            errorMessage.classList.remove('d-none');
        } else if (date.value !== '') {
            date.classList.add('is-valid');
        }


        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.classList.add('is-invalid');
            } else {
                field.classList.add('is-valid');
            }
        });

        if (!isValid) {
            e.preventDefault();
            e.stopPropagation();
        }

        form.classList.add('was-validated');
    });
});
