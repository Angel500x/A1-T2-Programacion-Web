function conversion() {

    let celin = document.getElementById("celsius").value;

    if (celin === "") {
        alert("Ingresa un valor");
        return;
    }

    let celsius = parseFloat(celin);
    
    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("fahrenheit").value = fahrenheit;
}