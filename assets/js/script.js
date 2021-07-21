let inputNome = document.querySelector('#nome')
let inputEmail = document.querySelector('#email')
let inputTxtArea = document.querySelector('#mensagem')
let btnEnviar = document.querySelector('#enviar')
let nomeLiberado = false
let emailLiberado = false
let txtAreaLiberado = false


inputNome.addEventListener('keyup', () => {
    if(inputNome.value == '""' ||inputNome.value == null || inputNome.value.length < 3){
        inputNome.style.borderColor = 'red'
        nomeLiberado = false
    } else {
        inputNome.style.borderColor = 'green'
        nomeLiberado = true
    }
})

inputEmail.addEventListener('keyup', () => {
    if(inputEmail.value.indexOf('@') == -1 || 
        inputEmail.value.indexOf('.' ) == -1 ||
        inputEmail.value == "''" ||
        inputEmail.value == null){
            inputEmail.style.borderColor = 'red'
            emailLiberado = false
    } else {
        inputEmail.style.borderColor = 'green'
        emailLiberado = true
    }

})
inputTxtArea.addEventListener('keyup', () =>{
    if (inputTxtArea.value == '' ||
        inputTxtArea.value == null ||
        inputTxtArea.value.length > 50){
            inputTxtArea.style.borderColor = 'red'
            txtAreaLiberado = false
    } else{
        inputTxtArea.style.borderColor = 'green'
        txtAreaLiberado = true
    }

    if (nomeLiberado && emailLiberado && txtAreaLiberado){
        btnEnviar.disabled = false
    } else{
        btnEnviar.disabled = true
    }

})

btnEnviar.addEventListener('click', () => {
    alert('Formulário enviado com sucesso!')
})
