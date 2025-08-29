let state = {
biotxt: document.getElementById('bio_txt'),
patrocio: document.getElementById('patrocio')
}

function carregar (){

state.biotxt.innerHTML = `
<h5>${artigos[19].paragrafo01}
</h5>
<h5>${artigos[19].paragrafo02}
</h5>
<h5>${artigos[19].paragrafo03}
</h5>
`
state.patrocio.innerHTML =`
<div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card" style="width: 18rem; margin-bottom: 35px;">
                    <img src="${listaFotos[0].imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${frasesMotivacionais[0].autor}</h5>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card" style="width: 18rem; margin-bottom: 35px;">
                    <img src="${listaFotos[1].imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${frasesMotivacionais[1].autor}</h5>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card" style="width: 18rem; margin-bottom: 35px;">
                    <img src="${galeriaFotos[2].imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${frasesMotivacionais[2].autor}</h5>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card" style="width: 18rem; margin-bottom: 35px;">
                    <img src="${galeriaFotos[3].imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${frasesMotivacionais[12].autor}</h5>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card" style="width: 18rem; margin-bottom: 35px;">
                    <img src="${galeriaFotos[4].imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${frasesMotivacionais[9].autor}</h5>
                    </div>
                    </div>
                </div>

                <div class="col-lg-4">
                    <div class="card" style="width: 18rem; margin-bottom: 35px;">
                    <img src="${galeriaFotos[5].imagem}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${frasesMotivacionais[5].autor}</h5>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
`
}

carregar()

let mais = document.getElementById('MAIS')
function alerta (){
alert('VOCÊ JA ESTA EM "SAIBA MAIS"')

}

mais.addEventListener('click', alerta);

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


