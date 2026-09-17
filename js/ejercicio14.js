function calcularOperaciones() {
    let entrada = document.getElementById("cadenaNumeros").value;

    if (entrada.trim() === "") {
        alert("Ingresa números");
        return;
    }

    let elementos = entrada.split(",");
    let numeros = elementos.map(item => Number(item.trim()));

    let contieneInvalidos = numeros.some(num => isNaN(num) || num === null);
    if (contieneInvalidos || numeros.length === 0) {
        alert("Ingresar únicamente números");
        return;
    }

    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);
    let suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    let promedio = suma / numeros.length;

    document.getElementById("mayor").value = maximo;
    document.getElementById("menor").value = minimo;
    document.getElementById("promedio").value = promedio;
}

