var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoIsTrue = validaPeso(peso);
var alturaIstrue = validaAltura(altura);

    
if(!alturaIstrue){
    tdAltura.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido")
}
if(!pesoIsTrue){
    tdAltura.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido")
}

if(alturaIstrue && pesoIsTrue){
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc;
}
if(!alturaIstrue || !pesoIsTrue){
    tdImc.textContent = "Dados Inválidos";
    }
}


function calculaImc(peso, altura){
    var imc = 0
    imc = peso / (altura*altura);

    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso <= 0 || peso >= 1000){
        return false;
    }else{
        return true;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false
    }
}