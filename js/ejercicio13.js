function verificar() {
    let edadInput = document.getElementById("edad").value;

    if (edadInput.trim() === "" || isNaN(edadInput)) {
        alert("Ingresa una edad");
        return;
    }

    let edad = parseInt(edadInput, 10);

    if (edad < 0) {
        alert("Ingresa una edad mayor o igual a cero.");
        return;
    }

    let mensaje = "";
    if (edad >= 18) {
        mensaje = "Puedes votar";
    } else {
        mensaje = "No puedes votar";
    }

    document.getElementById("resultado").value = mensaje;
}