function soma(valor1,valor2) {
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,10);

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar
}

var total = realParaDolar(10, 4.50);
alert(total);

function alertHello(){
    alert('Olá pessoal')
}

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);
alert("A temperatura é de " + x + " graus celsius")