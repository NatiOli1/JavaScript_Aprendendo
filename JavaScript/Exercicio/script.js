let informacoes = {
    endereco:"Endereço: Av. Mal. Castelo Branco, 1000 - Jardim Primavera, Piracicaba - SP, 13412-010",
    data: "07/10/23",
    horarioInicio: 16,
    horarioTermino: 21,
    valorIngresso: 10.00

}
let atracoesParque = ["Scape Room", " Boca do Palhaço", " Cupido Alegante", " Argola", " Xavequinho"];

let entretenimentoParque = ["Dj", " Miss e Mister Havaí", " Campeonato de Truco"];

let barracasComida = ["Espetinho", " Pastel", " Cachorro quente", " Bebidas", " Sorvete", " Doce"]

let atracoesEntretenimento = {
    atracoes: atracoesParque,
    entretenimento: entretenimentoParque,
    comida: barracasComida
}

document.getElementById('conteudoInformacoes').innerHTML += 
`<div class="card" style="width: 18rem;">
<div class="card-body text-center">
  <h5 class="card-title">Informações</h5>
  <p class="card-text"><p>Endereço: ${informacoes.endereco}</p>
  <p>Data: ${informacoes.data}</p>
  <p>Horário: ${informacoes.horarioInicio}H -${informacoes.horarioTermino}H</p>
  <p>Valor Ingresso: R$${informacoes.valorIngresso}</p>
</div>
</div>`

document.getElementById('AtracoesEntretenimento').innerHTML += 
`<div class="card" style="width: 18rem;">
<div class="card-body text-center">
  <h5 class="card-title ">Atrações e Entretenimento</h5>
  <p class="card-text"><p>Atrações: ${atracoesEntretenimento.atracoes}</p>
  <p>Entretenimento: ${atracoesEntretenimento.entretenimento}</p>
  <p>Barracas de Comida: ${atracoesEntretenimento.comida}</p>
</div>
</div>`

const imagens = ["fundo2.jpg", "fundo3.avif", "fundo4.avif", "fundo.jpeg"];
let index = 0;

function changeBackground(){
    
    document.body.style.backgroundImage = `url(${imagens[index]})`;
    index = (index + 1) % imagens.length
   
}

const changeImage = document.getElementById('changeImage');
changeImage.addEventListener('click', changeBackground)



