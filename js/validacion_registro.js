function isValidEmail(emailRegistro) {
    let emailRegistroPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegistroPattern.test(emailRegistro);
}

function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}

function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(element) {
        element.innerText = "";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registroForm").addEventListener("submit", function(event) {
        event.preventDefault();
        resetErrorMessages();
        let nombreRegistro = document.getElementById("nombreRegistro").value.trim(); 
        let apellidoRegistro = document.getElementById("apellidoRegistro").value.trim();
        let fechadenacimientoRegistro = document.getElementById("fechadenacimientoRegistro").value.trim();
        let emailRegistro = document.getElementById("emailRegistro").value.trim();
        let nombredeusuarixRegistro = document.getElementById("nombredeusuarixRegistro").value.trim();
        let contraseñaRegistro = document.getElementById("contraseñaRegistro").value.trim();
        let reconfirmarcontraseñaRegistro = document.getElementById("reconfirmarcontraseñaRegistro").value.trim();
        let terminosRegistro = document.getElementById("terminosRegistro").checked;
        let isValid = true;

        if (nombreRegistro === "") {
            displayErrorMessage("nombreregistroError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (apellidoRegistro === "") {
            displayErrorMessage("apellidoregistroError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (fechadenacimientoRegistro === "") {
            displayErrorMessage("fechadenacimientoregistroError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (!isValidEmail(emailRegistro)) {
            displayErrorMessage("emailregistroError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (nombredeusuarixRegistro === "") {
            displayErrorMessage("nombredeusuarixregistroError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (contraseñaRegistro === "" || contraseñaRegistro.length < 8) {
            displayErrorMessage("contraseñaregistroError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (reconfirmarcontraseñaRegistro != contraseñaRegistro) {
            displayErrorMessage("reconfirmarcontraseñaregistroError", "Las contraseñas deben coincidir.");
            isValid = false;
        }

        if (!terminosRegistro) {
            displayErrorMessage("terminosregistroError", "Acepte los términos y condiciones.")
            isValid = false;
        }

        if (isValid) {
            alert("¡El formulario se ha enviado correctamente!");
        }
    });
});