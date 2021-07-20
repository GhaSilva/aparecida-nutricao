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

var pesoIsTrue = true;
var alturaIstrue = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    pesoIsTrue = false;
    tdPeso.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido")


}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura Inválida!");
    alturaIstrue = false;
    tdAltura.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido")

}
    
if(alturaIstrue && pesoIsTrue){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc.toFixed(2);
}
if(!alturaIstrue || !pesoIsTrue){
    tdImc.textContent = "Dados Inválidos";
}
};