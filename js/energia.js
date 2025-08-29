let home = document.getElementById('ENERGIA')
function alerta (){
alert('VOCÊ JA ESTA EM "ENERGIA"')

}

home.addEventListener('click', alerta)


let state ={
hidreletrica: document.getElementById('hidreletrica'),
biomassa: document.getElementById('biomassa'),
energia: document.getElementById('energia')
}

function carregar (){
state.hidreletrica.innerHTML = `
<div class="py-5">
        <div class="row">
            <div class="carousel1 col-lg-4">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img id="" src="${galeriaFotos[3].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                            <div class="carousel-item">
                            <img id="" src="${galeriaFotos[4].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                            <div class="carousel-item">
                            <img id="" src="${galeriaFotos[5].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                        </div>
                        </div>
                        <h1>HIDRELETRICA</h1>
                        <h3>${artigos[13].paragrafo01}</h3>
            </div>

            <div class="col-lg-6">
                <h1>HIDRELETRICA</h1>
                <h3 id="" style="font-size: 20px;">${artigos[15].paragrafo01}${artigos[15].paragrafo02}${artigos[15].paragrafo03}</h3>

                <figure><img src="${galeriaFotos[6].imagem}" alt="" height="200px" width="700px" style="border-radius: 10px; margin: 40px 0px;"></figure>

                <h3 style="font-size: 20px;">
                    >${artigos[3].paragrafo01}
                </h3>
            </div>
        </div>
    </div>

`
state.biomassa.innerHTML = `
<div class="py-5">
        <div class="row">

            <div class="col-lg-6">
                <h1>HIDRELETRICA</h1>
                <h3 style="font-size: 20px;">${artigos[12].paragrafo01}${artigos[12].paragrafo02}${artigos[12].paragrafo03}</h3>

                <figure><img src="${galeriaFotos[7].imagem}" alt="" height="200px" width="700px" style="border-radius: 10px; margin: 40px 0px;"></figure>

                <h3 id="" style="font-size: 20px;">
                    ${artigos[7].paragrafo01}
                </h3>
            </div>

        <div class="carousel1 col-lg-4">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img id="" src="${galeriaFotos[8].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                            <div class="carousel-item">
                            <img id="" src="${galeriaFotos[9].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                            <div class="carousel-item">
                            <img id="" src="${galeriaFotos[10].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                        </div>
                        </div>
                        <h1>HIDRELETRICA</h1>
                        <h3 id="">${artigos[5].paragrafo01}${artigos[5].paragrafo02}${artigos[5].paragrafo03}</h3>
            </div>
        </div>
    </div>
`

state.energia.innerHTML = `
<div class="py-5">
        <div class="row">
            <div class="carousel1 col-lg-4">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img id="" src="${galeriaFotos[13].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                            <div class="carousel-item">
                            <img id="" src="${galeriaFotos[14].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                            <div class="carousel-item">
                            <img id="" src="${galeriaFotos[15].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px; margin: 40px 0px;">
                            </div>
                        </div>
                        </div>
                        <h1>HIDRELETRICA</h1>
                        <h3 id="">${artigos[5].paragrafo01}</h3>
            </div>

<div class="col-lg-6">
                <h1>ENERGIA SOLAR</h1>
                <h3 style="font-size: 20px;">${artigos[6].paragrafo01}${artigos[6].paragrafo02}${artigos[6].paragrafo03}</h3>

                <figure><img src="${galeriaFotos[16].imagem}" alt="" height="200px" width="700px" style="border-radius: 10px; margin: 40px 0px;"></figure>

                <h3 style="font-size: 20px;">
                   ${artigos[2].paragrafo01}
                </h3>
            </div>
        </div>
    </div>
`

}

carregar()

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


