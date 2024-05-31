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
    document.getElementById("olvidadaForm").addEventListener("submit", function(event) {
        event.preventDefault();
        resetErrorMessages();
        let nombreOlvidada = document.getElementById("nombreOlvidada").value.trim(); 
        let nuevacontraseñaOlvidada = document.getElementById("nuevacontraseñaOlvidada").value.trim();
        let reconfirmarOlvidada = document.getElementById("reconfirmarOlvidada").value.trim();
        let isValid = true;

        if (nombreOlvidada === "") {
            displayErrorMessage("nombreolvidadaError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (nuevacontraseñaOlvidada === "" || nuevacontraseñaOlvidada.length < 8) {
            displayErrorMessage("nuevacontraseñaolvidadaError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (reconfirmarOlvidada != nuevacontraseñaOlvidada) {
            displayErrorMessage("reconfirmarolvidadaError", "Las contraseñas deben coincidir.");
            isValid = false;
        }

        if (isValid) {
            alert("¡El formulario se ha enviado correctamente!");
        }
    });
});