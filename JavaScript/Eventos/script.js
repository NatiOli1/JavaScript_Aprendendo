function eventoClique(){
    alert('Acionou um evento clique')
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClique() {
    alert('Evento de clique dublo')
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

//function adicionaTexto() {
//    let p = document.getElementById("teste");
//    p.append('O mouse moveu');
//}
//append = adicionar

function limpaTexto(){
    document.getElementById("campoTexto").value = "";
}

function mudou(){
    console.log('mudou');
}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input)
    
}