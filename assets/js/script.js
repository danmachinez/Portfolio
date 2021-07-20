let inputNome = document.querySelector('#nome')
let inputEmail = document.querySelector('#email')
let texteareaMensagem = document.querySelector('#mensagem')
let btnEnviar = document.querySelector('#enviar')


inputNome.addEventListener('keyup', () => {
    if(inputNome.value.length < 2){
        inputNome.style.borderColor = 'red'
    } else {
        inputNome.style.borderColor = 'green'
    }
})

inputEmail.addEventListener('keyup', () => {
    if(inputEmail.value.indexOf('@') == -1 || inputEmail.value.indexOf('.' ) == -1){
        inputEmail.style.borderColor = 'red'
    } else {
        inputEmail.style.borderColor = 'green'
    }

})

texteareaMensagem.addEventListener('keyup', () =>{
    if (texteareaMensagem.value.length > 100){
        texteareaMensagem.style.borderColor = 'red'
    } else{
        texteareaMensagem.style.borderColor = 'green'
    }
})

btnEnviar.addEventListener('click', () => {
    alert('Formulário enviado com sucesso!')
})
