let prd = document.getElementById('PRODUTOS')
function alerta (){
alert('VOCÊ JA ESTA EM "PRODUTOS"')

}

prd.addEventListener('click', alerta)



let state = {
ppdrt: document.getElementById('pdrt'),
polaroid: document.getElementById('POLAROID'),
secao3: document.getElementById('secao3')
}

function carregar (){
state.ppdrt.innerHTML= `
<h3>${artigos[10].paragrafo02}</h3>
`
state.polaroid.innerHTML = `
<h1 style="background-color: #96CEB4; padding: 10px; border-radius: 30px; margin: 20px ;">POLAROIDES</h1>
            <div class="row">


                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[0].imagem}" alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>

                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[1].imagem}" alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>

                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[2].imagem}" alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>

                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[3].imagem} alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>

                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[4].imagem}" alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>

                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[5].imagem}" alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>
                </div>
`

state.secao3.innerHTML = `
<div class="container py-12">
            <h1 style="background-color: #96CEB4; padding: 10px; border-radius: 30px; margin: 20px ;">CAMISAS</h1>
            <div class="row">


                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[0].imagem}" alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>

                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[1].imagem}" alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>

                <div class="col-lg-4">
                    <figure id=""><img src="${listaFotos[2].imagem}" alt="" height="300px" style="padding: 10px 10px 50px 10px; background-color: rgb(255, 241, 241);"></figure>
                </div>


        </div>
`


}

carregar();

/*Formulario de inscrição começo*/

let button_formulario = document.getElementById('modal_button_enviar')
function form (){

let rslt = document.getElementById('rslt')
let input_nome = document.getElementById('input_nome')
let input_idade = document.getElementById('input_idade')
let input_telefone = document.getElementById('input_telefone')
let input_endereço = document.getElementById('input_endereço')
let input_email = document.getElementById('input_email')
let valido = true


let input_nome_value = input_nome.value
let input_idade_value = input_idade.value
let input_telefone_value = input_telefone.value
let input_endereço_value = input_endereço.value
let input_email_value = input_email.value

if (input_nome_value.trim() !== "") {
        input_nome.classList.add('ok');
        input_nome.classList.remove('erro');
    } else {
        input_nome.classList.add('erro');
        input_nome.classList.remove('ok');
        valido = false
    }

if (input_idade_value.trim() !== "") {
        input_idade.classList.add('ok');
        input_idade.classList.remove('erro');
    } else {
        input_idade.classList.add('erro');
        input_idade.classList.remove('ok');
        valido = false
    }

if (input_telefone_value.trim() !== "") {
        valido
        input_telefone.classList.add('ok');
        input_telefone.classList.remove('erro');
    } else {
        input_telefone.classList.add('erro');
        input_telefone.classList.remove('ok');
        valido = false
    }

if (input_endereço_value.trim() !== "") {
        valido
        input_endereço.classList.add('ok');
        input_endereço.classList.remove('erro');
    } else {
        input_endereço.classList.add('erro');
        input_endereço.classList.remove('ok');
        valido = false
    }

if (input_email_value.trim() !== "") {
        valido
        input_email.classList.add('ok');
        input_email.classList.remove('erro');
    } else {
        input_email.classList.add('erro');
        input_email.classList.remove('ok');
        valido = false
    
    }
    
    if (valido) {
rslt.innerHTML = `<p class="text-success">Inscrição feita com sucesso!</p>`;
    } else {
        rslt.innerHTML = `<p class="text-danger">Por favor, preencha todos os campos corretamente.</p>`;
    }
}

button_formulario.addEventListener('click', form)

/*Formulario de inscrição fim*/


