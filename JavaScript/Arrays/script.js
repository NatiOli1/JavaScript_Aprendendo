var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

                //0    //1     //2     //3
const lista = [item1, item2, item3, item4];
lista[0] = "Café";
alert(lista[0]);

const numeros = new Array(9.6, 4.4 , 3.4, 8.0);
numeros.push(7.5); // push - adiciona novo valor
alert(numeros[4])

const pessoa = {nome: "Nathalia", 
sobrenome: "Oliveira", 
idade: 18}; // objeto

//difereça entre objeto e array
pessoa.idade;
numeros[3];