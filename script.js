var crip = document.querySelector('#crip')
var descrip = document.querySelector('#descr')
var btn = document.querySelector('.btn')
var passo = document.getElementById('passo') //id do input
var passos = document.getElementById('passos') //div do input
var select = document.getElementById('selectid')
var entrada = document.getElementById('entrada')
var resultado = document.getElementById('resultado')

crip.addEventListener('click', function () {
    
    if(crip.checked){
        btn.innerText = 'Criptografar'
    }
})

descrip.addEventListener('click', function(){
    if(descrip.checked){
        btn.innerText = 'Descriptografar'
    }
})

select.addEventListener('change', function(){

    if(select.value === 'cesar'){
        passos.style.display = 'block'
    }else{
        passos.style.display = 'none'
    }
})

btn.addEventListener('click', function () {
    var valor = entrada.value
    
    if (crip.checked) {
        if (select.value == 'base64') {
            resultado.value = base64(valor)
        }
        else {
            resultado.value = codificar(valor)
        }
    }
    else {
        if (select.value == 'base64') {
            resultado.value = deco64(valor)
        }
        else {
            resultado.value = decodificar(valor)
        }
    }
})

function codificar(entradaUsuario) {
    var resultado = ''
    var incremento = +passo.value 

    for (var i = 0; i < entradaUsuario.length; i++) {
        if (entradaUsuario[i].charCodeAt() >= 65 && entradaUsuario[i].charCodeAt() <= 90) {
            
            resultado += String.fromCharCode(((entradaUsuario[i].charCodeAt() - 65 + incremento) % 26) + 65)
        }
        else if (entradaUsuario[i].charCodeAt() >= 97 && entradaUsuario[i].charCodeAt() <= 122) {
            resultado += String.fromCharCode(((entradaUsuario[i].charCodeAt() - 97 + incremento) % 26) + 97)
        }
        else {
            resultado += entradaUsuario[i]
        }
    }
    
    return resultado
}

function decodificar(entradaUsuario) { 
    var resultado = ''
    var incremento = +passo.value 

    for (var i = 0; i < entradaUsuario.length; i++) {
        if (entradaUsuario[i].charCodeAt() >= 65 && entradaUsuario[i].charCodeAt() <= 90) {
            
            resultado += String.fromCharCode(((entradaUsuario[i].charCodeAt() - 90 - incremento) % 26) + 90)
        }
        else if (entradaUsuario[i].charCodeAt() >= 97 && entradaUsuario[i].charCodeAt() <= 122) {
            resultado += String.fromCharCode(((entradaUsuario[i].charCodeAt() - 122 - incremento) % 26) + 122)
        }
        else {
            resultado += entradaUsuario[i]
        }
    }
    
    return resultado
}


function base64(entradaUsuario) {
    var cod = btoa(entradaUsuario)
    return cod
}
function deco64(entradaUsuario) {
    var deco = atob(entradaUsuario)
    return deco
}