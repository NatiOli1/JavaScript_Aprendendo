var contador = 0;

while(contador < 5){
    console.log(contador);
    ++contador;
}

//interromper o contador a força - break
var contador = 0
while (contador < 0){
    if (contador === 3){
        break;
    } 
    console.log(contador);
    ++contador
}

//for (let i = 0; i < 100; i ++){
//    document.getElementById("teste").innerHTML += i + ", ";
//}
var ano = new Date().getFullYear();


for(let i= ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='"+ i +"'>"+ i + "</option>"
}

