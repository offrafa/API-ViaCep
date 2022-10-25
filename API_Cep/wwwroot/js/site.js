const cep = document.querySelector("#cep")


const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#" + campo)){
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}



// Função que quando o usuário tira o foco pega o que foi digitado
cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-", "") // Retira os caractere especial 

    const options = {
        method: 'GET',
        mode: 'cors',
        Cache: 'default'
    } 

    fetch(`https://viacep.com.br/ws/${search}/json`, options)
    .then(Response => {Response.json()
        .then(data => showData(data))
    })// Se dar carto
    .catch(e => console.log('Deu erro '+ e,message))// Se dar erro

})