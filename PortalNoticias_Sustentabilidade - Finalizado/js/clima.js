let home = document.getElementById('CLIMA')
function alerta (){
alert('VOCÊ JA ESTA EM "CLIMA"')

}

home.addEventListener('click', alerta)


let state = {
txt1: document.getElementById('txt_1'),
txt2: document.getElementById('txt_2'),
txt3: document.getElementById('txt_3'),
txt4: document.getElementById('txt_4'),
txt5: document.getElementById('txt_5'),
txt6: document.getElementById('txt_6'),
txt7: document.getElementById('txt_7'),
txt8: document.getElementById('txt_8'),
txt9: document.getElementById('txt_9'),
txt10: document.getElementById('txt_10'),
txt11: document.getElementById('txt_11'),
txt12: document.getElementById('txt_12'),
txt13: document.getElementById('txt_13'),
txt14: document.getElementById('txt_14')
}

function carregar (){
state.txt1.innerHTML = `
<h1>DOMINGO</h1>
<h3 style="font-size: 20px;">${poemas[0].texto}</h3>
`
state.txt2.innerHTML = `
<p class="col-lg-4">${poemas[6].texto}</p>`

state.txt3.innerHTML = `
<h1>SEGUNDA</h1>
<h3 style="font-size: 20px;">${poemas[1].texto}</h3>
`
state.txt4.innerHTML = `
<p class="col-lg-4">${poemas[7].texto}</p>`

state.txt5.innerHTML = `
<h1>TERÇA</h1>
 <h3 style="font-size: 20px;">${poemas[2].texto}</h3>
`
state.txt6.innerHTML = `
<p class="col-lg-4">${poemas[8].texto}</p>`

state.txt7.innerHTML = `
<h1>QUARTA</h1>
 <h3 style="font-size: 20px;">${poemas[3].texto}</h3>`

state.txt8.innerHTML = `
<p class="col-lg-4">${poemas[9].texto}</p>`

state.txt9.innerHTML = `
<h1>QUINTA</h1>
 <h3 style="font-size: 20px;">${poemas[4].texto}</h3>`

state.txt10.innerHTML = `
<p class="col-lg-4">${poemas[10].texto}</p>`

state.txt11.innerHTML = `
<h1>SEXTA</h1>
 <h3 style="font-size: 20px;">${poemas[5].texto}</h3>`

state.txt12.innerHTML = `
<p class="col-lg-4">${poemas[11].texto}</p>`

state.txt13.innerHTML = `
<h1>SABADO</h1>
 <h3 style="font-size: 20px;">${poemas[6].texto}</h3>`

state.txt14.innerHTML = `
<p class="col-lg-4">${poemas[12].texto}</p>
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


