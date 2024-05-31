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
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        resetErrorMessages();
        let nombredeusuarixLogin = document.getElementById("nombredeusuarixLogin").value.trim(); 
        let contraseñaLogin = document.getElementById("contraseñaLogin").value.trim();
        let isValid = true;

        if (nombredeusuarixLogin === "" || nombredeusuarixLogin.length < 4) {
            displayErrorMessage("nombreloginError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (contraseñaLogin === "" || contraseñaLogin.length < 8) {
            displayErrorMessage("contraseñaloginError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {
            alert("¡El formulario se ha enviado correctamente!");
        }
    });
});


