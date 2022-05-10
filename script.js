function valor(x) {
    var resultado = document.getElementById("pantalla");
    switch (x) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            resultado.value = resultado.value + x;
            break;

            // *operadores
        case '+':
        case '-':
        case '*':
        case '/':
            v1 = resultado.value;
            operador = x;

        case 'C':
            resultado.value = '';
            break;
        case '=':
            v2 = resultado.value;
            n1 = parseFloat(v1);
            n2 = parseFloat(v2);
            switch (operador) {
                case '+':
                    r = n1 + n2;
                    break;
                case '-':
                    r = n1 - n2;
                    break;
                case '*':
                    r = n1 * n2;
                    break;
                case '/':
                    r = n1 / n2;
                    break;
            }
            resultado.value = r;

    }
}