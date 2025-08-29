let prd = document.getElementById('NOTICIAS')
function alerta (){
alert('VOCÊ JA ESTA EM "NOTICIAS"')

}

prd.addEventListener('click', alerta)



let state = {
container: document.getElementById('container'),
semanais: document.getElementById('semanais')
}

function carregar (){
state.container.innerHTML= `
 <div class="row">
                <div class="col-lg-6 center2">
                    <img src="${listaFotos[0].imagem}" alt="" height="400px" style="border-radius:10px; backdrop-filter: blur (30px);">
                </div>

                <div class="col-lg-2">
                    <div class="image-container" style="width: 400;">
                        <div class="center1">
                            <img src="${listaFotos[1].imagem}" alt="" height="210px" width="500px" style="margin: 10px; border-radius: 10px;">
                            <div class="text-overlay text-white">${frasesMotivacionais[1].tema}</div>
                        </div>
                    </div>

                    <div class="image-container">
                        <div class="center1">
                            <div class="center2"><img src="${listaFotos[2].imagem}" alt="" height="210px" width="500px" style="margin: 10px; border-radius: 10px;"></div>
                            <div class="text-overlay text-white">${frasesMotivacionais[0].tema}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

`

state.semanais.innerHTML = `
<div class="row">
                <div class="col-lg-8">
                    <div class="center1">
                        <img src="${listaFotos[3].imagem}" alt="" height="210px" width="500px" style="margin: 10px; border-radius: 10px;">
                        <h3>${catalogoFilmesSeries[0].titulo}</h3>
                        <hr>
                    </div>

                    <div class="center1">
                        <img src="${listaFotos[4].imagem}" alt="" height="210px" width="500px" style="margin: 10px; border-radius: 10px;">
                        <h3>${catalogoFilmesSeries[1].titulo}</h3>
                        <hr>
                    </div>

                    <div class="center1">
                        <img src="${listaFotos[5].imagem}" alt="" height="210px" width="500px" style="margin: 10px; border-radius: 10px;">
                        <h3>${catalogoFilmesSeries[2].titulo}</h3>
                        <hr>
                    </div>

                    <div class="center1">
                        <img src="${listaFotos[6].imagem}" alt="" height="210px" width="500px" style="margin: 10px; border-radius: 10px;">
                        <h3>${catalogoFilmesSeries[3].titulo}</h3>
                        <hr>
                    </div>

                    <div class="center1">
                        <img src="${listaFotos[7].imagem}" alt="" height="210px" width="500px" style="margin: 10px; border-radius: 10px;">
                        <h3 id="">${catalogoFilmesSeries[4].titulo}</h3>
                        <hr>
                    </div>


                </div>

                <div class="col-lg-4" style="background-color: #A02334; border-radius: 20px;">
                    <img src="${listaFotos[8].imagem}" alt="" height="210px" width="300px" style="margin: 10px; border-radius: 10px;">
                    <hr>
                    <img src="${listaFotos[9].imagem}" alt="" height="210px" width="300px" style="margin: 10px; border-radius: 10px">
                    <img src="${listaFotos[8].imagem}" alt="" height="210px" width="300px" style="margin: 10px; border-radius: 10px;">
                    <hr>
                    <img src="${listaFotos[9].imagem}" alt="" height="210px" width="300px" style="margin: 10px; border-radius: 10px">
                    <img src="${listaFotos[8].imagem}" alt="" height="210px" width="300px" style="margin: 10px; border-radius: 10px;">
                    <hr>
                    <img src="${listaFotos[9].imagem}" alt="" height="210px" width="300px" style="margin: 10px; border-radius: 10px">
                </div>
            </div>
        </div>
    </section>

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


