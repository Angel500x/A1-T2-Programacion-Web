function convertirr() {
    const TASA_DE_CAMBIO = 0.055;

    let mxnInput = document.getElementById("mxn").value;

    if (mxnInput.trim() === "" || isNaN(mxnInput)) {
        alert("Ingresa una cantidad en pesos.");
        return;
    }

     let pesos = parseFloat(mxnInput);
     
    if (pesos <= 0) {
        alert("Ingresa una cantidad mayor a cero.");
        return;
    }
   
    let dolares = pesos * TASA_DE_CAMBIO;

    document.getElementById("usd").value = dolares.toFixed(2);
}