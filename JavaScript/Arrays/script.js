var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

                //0    //1     //2     //3
const lista = [item1, item2, item3, item4];
lista[0] = "Café";
alert(lista[0]);
alert(lista[lista.length -1]); // mostra o ultimo item caso nao saiba

const numeros = new Array(9.6, 4.4 , 3.4, 8.0);
numeros.push(7.5); // push - adiciona novo item na array
alert(numeros[4])

alert(Array.isArray(numeros)); //Se isso for um Array retorna true

const pessoa = ["Nathalia", "Oliveira", 18 ,"DEV"];
//pessoa.pop(); // remover o ultimo item da array
pessoa.shift(); // remove o primeiro item da array
pessoa.unshift("Renan"); //adiciona um item no começo da array

document.getElementById("teste").innerHTML = pessoa;