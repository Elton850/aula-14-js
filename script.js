const formulario = document.querySelector("#formulario")
const cep = document.querySelector("#cep")

const error = document.createElement("p")
const endereco = document.createElement("p")
const complemento = document.createElement("p")
const bairro = document.createElement("p")
const cidade = document.createElement("p")
const estado = document.createElement("p")
document.body.appendChild(error)
document.body.appendChild(endereco)
document.body.appendChild(complemento)
document.body.appendChild(bairro)
document.body.appendChild(cidade)
document.body.appendChild(estado)

async function buscarCep(e){
    e.preventDefault()
    try{
        const requisicao = await fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        const resposta = await requisicao.json()
        if(resposta.erro){
           error.textContent = "CEP inválido"
           error.style.color = "red"
           endereco.textContent = ``
           complemento.textContent = ``
           bairro.textContent = ``
           cidade.textContent = ``
           estado.textContent = ``
        }else{
            error.textContent = ""
            endereco.textContent = `Endereço: ${resposta.logradouro}`
            complemento.textContent = `Complemento: ${resposta.complemento}`
            bairro.textContent = `Bairro: ${resposta.bairro}`
            cidade.textContent = `Bairro: ${resposta.localidade}`
            estado.textContent = `Estado: ${resposta.uf}`
            cep.value = ""
            cep.focus()

        }
    }catch(error){
        console.log("deu ruim")
    }
}

formulario.addEventListener("submit", buscarCep)
