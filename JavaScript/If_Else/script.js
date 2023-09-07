var interruptor = "on";

if (interruptor == "on") {
    alert('A lampada está ligada');
}else{
    alert('A lampada está desligada');
}

let hora = new Date().getHours();

if (hora < 12){
    alert('Bom dia');
}else if (hora < 18){
    alert('Boa tarde');
}else {
    alert('Boa Noite');
}

function verificar(){
    let nome = document.getElementById("nome").nodeValue;

    if ( nome == "" || nome== null){
        {
            alert('O campo não pode ser vazio')
        }
    }
} 