const form = document.querySelector('#formulario')
const user = document.querySelector('#user')
const container = document.querySelector('#container')
const nomeUser = document.createElement('h2')
const imgUser = document.createElement('img')
const bibliografiaUser = document.createElement('p')

container.appendChild(nomeUser, imgUser, bibliografiaUser)

async function buscarUser(e){
    e.preventDefault()
    try{
        const request = await fetch(`https://api.github.com/users/${user.value}`)
        const response = await request.json()
        if(response.message === "Not Found"){
            console.log('Usuário não localizado')
        } else {
            nomeUser.textContent = user.login
            imgUser.textContent = user.avatar_url
        }
    }catch{
        console.log("Erro")
    }
}

form.addEventListener('submit', buscarUser)