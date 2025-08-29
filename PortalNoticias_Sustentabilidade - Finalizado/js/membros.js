let state = {
grid_img: document.getElementById('dislay_grid_img'),
section2: document.getElementById('section_2'),
section3: document.getElementById('secao3')
}

function carregar (){
state.grid_img.innerHTML = `
<div class="pai col-md-8">
        <div class="div1" id="div_img_1"><figure><img src="${catalogoFilmesSeries[0].imagem}"></figure></div>
        <div class="div2" id="div_img_2"><figure><img src="${catalogoFilmesSeries[1].imagem}"></figure></div>
        <div class="div3" id="div_img_3"><figure><img src="${catalogoFilmesSeries[2].imagem}"></figure></div>
        <div class="div4" id="div_img_4"><figure><img src="${catalogoFilmesSeries[3].imagem}"></figure></div>
        <div class="div5" id="div_img_5"><figure><img src="${catalogoFilmesSeries[4].imagem}"></figure></div>
        <div class="div6" id="div_img_6"><figure><img src="${catalogoFilmesSeries[5].imagem}"></figure></div>
        <div class="div7" id="div_img_7"><figure><img src="${catalogoFilmesSeries[6].imagem}"></figure></div>
        <div class="div8" id="div_img_8"><figure><img src="${catalogoFilmesSeries[7].imagem}"></figure></div>
        <div class="div9" id="div_img_9"><figure><img src="${catalogoFilmesSeries[8].imagem}"></figure></div>
</div>

<div id="txt_1" class="col-md-4 d-flex align-items-center justify-content-center txt_1">
<div class="bg-black text-white"><h1>MEMBROS FUNDADORES</h1></div>
    
</div>
`
state.section2.innerHTML = `
<section class="row d-flex">
    
    <div class="col-md-8">
        <h2>${poemas[0].autor}</h2>
        <p>${artigos[19].paragrafo01}</p>
        <p>${artigos[19].paragrafo02}</p>
    </div>

    <div class="col-md-4">
       <figure >
         <img src="${catalogoFilmesSeries[8].imagem}" class= "img-fluid">
       </figure>
    </div>


</section>
`
state.section3.innerHTML = `
 <div class="row align-items-center">
        <div class="col-md-4 col-12">
            <figure>
                <img src="${catalogoFilmesSeries[8].imagem}" class="img-fluid">
            </figure>
        </div>
        <div class="col-md-8 col-12">
            <h2>${poemas[12].autor}</h2>    
            <p>${artigos[19].paragrafo02}</p>
        </div>
    </div>
`


}

carregar();

let mais = document.getElementById('MEMBROS')
function alerta (){
alert('VOCÊ JA ESTA EM "MEMBROS"')

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


