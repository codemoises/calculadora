function insert(num) {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
    if (num == '%') {
        document.getElementById('result').innerHTML = number/100;
    }
}

function clean() {
    document.getElementById('result').innerHTML = '';
}

function back() {
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function calculate() {
    var resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        document.getElementById('result').innerHTML = eval(resultado);
    } else {
        document.getElementById('result').innerHTML = '';
    }
}