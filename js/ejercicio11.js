function convertir() {

    let kmInput = document.getElementById("kilmetros").value;

    if (kmInput.trim() === "" || isNaN(kmInput)) {
        alert("Ingresa un número en kilómetros.");
        return;
    }

      let kilometros = parseFloat(kmInput);
    //= millas.toFixed(5)

    let millas = kilometros * 0.621371;
    document.getElementById("millas").value = millas;
}