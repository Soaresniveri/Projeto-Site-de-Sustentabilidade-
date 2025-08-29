
/*Puxador de array do Lucas inicio */
let state = {
    secao1:document.getElementById('secao1'),
    secao2: document.getElementById('secao2'),
    acordion: document.getElementById('secao_acordion'),
    sobre: document.getElementById('sobrenos'),
    juntese: document.getElementById('juntese'),
    doacao: document.getElementById('card_doacao')
}

function carregar() {

    state.secao1.innerHTML =`
    <div class="py-5">
                <div class="row">
                    <h1 style="font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;">${galeriaFotos[9].titulo}</h1>
                    <h3>${frasesMotivacionais[7].frase}</h3>
                </div>
            </div>
    `

    state.secao2.innerHTML =`
    <div class="container py-16">
                <div class="row">
                    <div class="sec2col4 col-12 col-md-6 col-lg-3" style="background-color: #FFEEAD;">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <figure>
                            <img id="" src="${galeriaFotos[0].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>
                            </div>
                            
                            <div class="carousel-item">
                            <figure>
                            <img id="" src="${galeriaFotos[1].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>
                            </div>
                            
                            <div class="carousel-item">
                            <figure>
                            <img id="" src="${galeriaFotos[2].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>
                            </div>
                        </div>
                        </div>
                        <h3>${artigos[1].paragrafo01}</h3>
                    </div>
                    <!------------------------------------------------------------------------------------------>
                    <div class="sec2col4 col-12 col-md-6 col-lg-3">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <figure>
                            <img id="" src="${galeriaFotos[3].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>
                            </div>

                            <div class="carousel-item">
                            <figure>
                            <img id="" src="${galeriaFotos[4].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>
                            </div>

                            <div class="carousel-item">
                            <figure>
                            <img id="" src="${galeriaFotos[5].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>
                            </div>
                        </div>
                        </div>
                        <h3>${artigos[1].paragrafo02}</h3>
                    </div>

                    <!------------------------------------------------------------------------------------------>
                    <div class="sec2col4 col-12 col-md-6 col-lg-3" style="background-color: #A02334;">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <figure>
                            <img id="" src="${galeriaFotos[6].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>

                            </div>
                            <div class="carousel-item">
                            <figure>
                            <img id="" src="${galeriaFotos[7].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>
                            </div>

                            <div class="carousel-item">
                            <figure>
                            <img id="" src="${galeriaFotos[8].imagem}" class="d-block w-100" alt="..." height="200px" style="border-radius: 10px;">
                            </figure>
                            </div>
                        </div>
                        </div>
                        <h3>${artigos[1].paragrafo03}</h3>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    `
    state.acordion.innerHTML = `
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${artigos[0].titulo}
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${artigos[0].paragrafo01}
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                ${artigos[1].titulo}
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${artigos[0].paragrafo02}
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ${artigos[2].titulo}
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                ${artigos[0].paragrafo03}
                </div>
                </div>
            </div>
            </div>
    `
    state.sobre.innerHTML = `
    <div class="py-5">
                <div class="row">
                    <div class="col-md-5">
                        <img src="imgs/index/PNG_folha de guarqa.png" alt="" height="200px" style="border-radius: 50%;">
                    </div>
                    <div class="col-md-6 mb-4">
                        <h6 style="font-size:20px;">${noticias[1].resumo}</h6>
                        <a class="btn btn-dark" href="paginas/saibamais.html" role="button"><i>${artigos[19].titulo}</i></a>
                    </div>
                </div>
            </div>      
    `

    state.juntese.innerHTML = `
    <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-10 col-lg-8">
                        <p>${artigos[17].paragrafo01}</p>
                        <p>${artigos[17].paragrafo02}</p>
                        <p>${artigos[17].paragrafo03}</p>
                    </div>
                </div>
            </div>
    `
;
}

carregar();
/*Puxador de array do lucas Fim */

let home = document.getElementById('HOME')
function alerta (){
alert('VOCÊ JA ESTA EM "HOME"')

}

home.addEventListener('click', alerta);

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


