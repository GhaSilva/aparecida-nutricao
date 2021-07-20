var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoIsTrue = true;
var alturaIstrue = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    pesoIsTrue = false;
    tdPeso.textContent = "Peso Inválido"
}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura Inválida!");
    alturaIstrue = false;
    tdAltura.textContent = "Altura Inválida"
}
    
if(alturaIstrue && pesoIsTrue){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}
if(!alturaIstrue || !pesoIsTrue){
    tdImc.textContent = "Dados Inválidos";
}
