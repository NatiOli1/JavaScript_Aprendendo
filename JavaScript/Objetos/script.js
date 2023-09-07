const carro = {
    marca: "ford", 
    modelo: "ka", 
    ano: 2015, 
    placa:"ABC-1234",
    buzina: function(){alert('Biiiiiiiiiii')},
    completo: function(){
        return "A marca é "+ this.marca + " e o modelo é " + this.modelo ;
    },
};
//const é usado mais para objetos
//this = esse
console.log(carro.completo);
carro.buzina();

