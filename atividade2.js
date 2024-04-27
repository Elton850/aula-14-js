<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Bucando seu GitHub</h1>
    <form id="formulario">
        <label for="usuario">Nome do Usuário</label>
        <input type="text" name="usuario" id="usuario" placeholder="Digite o nome do usuário">
        <button>Buscar</button>
    </form>

    <script src="./script.js"></script>
</body>
</html>



const formulario = document.querySelector("#formulario")
const usuario = document.querySelector("#usuario")

const error = document.createElement("p")
const nome_do_usuario = document.createElement("h2")
const foto_do_usuario = document.createElement("img")
const biografia_do_usuario = document.createElement("p")

document.body.append(nome_do_usuario, foto_do_usuario, biografia_do_usuario, error)





async function buscarUsuario(e){
    e.preventDefault()
    try{
        const request = await fetch(`https://api.github.com/users/${usuario.value}`)
        const response = await request.json()
        console.log(response)
        if(response.message === "Not Found"){
            error.textContent = "Usuário não existe"
        }else{
            error.textContent = ""
            nome_do_usuario.textContent = response.name
            foto_do_usuario.src = response.avatar_url
            foto_do_usuario.alt = "Foto do perfil do usuário"
            foto_do_usuario.width = "300"
            biografia_do_usuario.textContent = response.bio || "Usuário não possui biografia"
    
        }
        usuario.value = ""
        usuario.focus()


    }catch(error){
        console.log(error)
    }
}


formulario.addEventListener("submit", buscarUsuario)