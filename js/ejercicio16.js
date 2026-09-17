const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const input1 = document.getElementById("numero1").value.trim();
    const input2 = document.getElementById("numero2").value.trim();

    if (input1 === "" || input2 === "" || isNaN(input1) || isNaN(input2)) {
        Swal.fire({
            icon: 'error',
            title: 'Entrada inválida',
            text: 'Por favor, ingresa números válidos en ambos campos.'
        });
        document.getElementById("resultado").value = "";
        return;
    }

    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let res;

    switch (operacion) {
        case 'suma':
            res = sumar(num1, num2);
            break;
        case 'resta':
            res = restar(num1, num2);
            break;
        case 'multiplicar':
            res = multiplicar(num1, num2);
            break;
        case 'dividir':
            res = dividir(num1, num2);
            break;
        default:
            return;
    }

    if (res === 'Error: División por cero') {
        Swal.fire({
            icon: 'error',
            title: 'Error matemático',
            text: 'No es posible dividir entre cero.'
        });
        document.getElementById("resultado").value = "";
    } else {
        document.getElementById("resultado").value = res;
    }
};