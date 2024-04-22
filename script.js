document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    var codigo = document.getElementById("codigo-estudiante").value;
    var contrasena = document.getElementById("contrasena").value;

    var usuario = {
        codigo: codigo,
        contrasena: contrasena
    };

    fetch("https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Credenciales inválidas");
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("usuario", JSON.stringify(data));
        window.location.href = "notas.html";
    })
    .catch(error => {
        console.error("Error al iniciar sesión:", error);
        document.getElementById("error-message").style.display = "block"; // Mostrar el mensaje de error
        document.getElementById("codigo-estudiante").value = ""; // Limpiar el campo de código
        document.getElementById("contrasena").value = ""; // Limpiar el campo de contraseña
    });
});
