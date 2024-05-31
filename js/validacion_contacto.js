function isValidEmail(emailContacto) {
    let emailContactoPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailContactoPattern.test(emailContacto);
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
    document.getElementById("contactoForm").addEventListener("submit", function(event) {
        event.preventDefault();
        resetErrorMessages();
        let nombreContacto = document.getElementById("nombreContacto").value.trim(); 
        let asuntoContacto = document.getElementById("asuntoContacto").value.trim();
        let emailContacto = document.getElementById("emailContacto").value.trim();
        let mensajeContacto = document.getElementById("mensajeContacto").value.trim();
        let isValid = true;

        if (nombreContacto === "") {
            displayErrorMessage("nombreError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (asuntoContacto === "") {
            displayErrorMessage("asuntoError", "Por favor ingrese el asunto.");
            isValid = false;
        }

        if (!isValidEmail(emailContacto)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (mensajeContacto === "") {
            displayErrorMessage("mensajeError", "Por favor ingrese un mensaje.");
            isValid = false;
        }

        if (isValid) {
            alert("¡El formulario se ha enviado correctamente!");
        }
    });
});