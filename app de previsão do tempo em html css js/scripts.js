

const key = "7b0c077ccfebd7be4ea2d401f7039329"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".temp").innerHTML = dados.main.temp + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src =`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function busarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Resposta => Resposta.json())

    

    colocarDadosNaTela(dados)
   
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value 

    busarCidade(cidade)
}