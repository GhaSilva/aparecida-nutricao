var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    console.log(validaPeso(paciente.peso));




    if(!validaPaciente(paciente)){
        if(!validaPeso(paciente.peso)){
            var pesoErro = document.querySelector("#peso-erro");
            pesoErro.textContent = "Peso inválido";
            return
        }
        if(!validaAltura(paciente.altura)){
            var alturaErro = document.querySelector("#altura-erro");
            alturaErro.textContent = "Altura inválida";
            return
        }
        if(paciente.nome == ""){
            var nomeErro = document.querySelector("#nome-erro");
            nomeErro.textContent = "Insira o nome";
            return
        }
    
        if(paciente.gordura == ""){
            var gorduraErro = document.querySelector("#gordura-erro");
            gorduraErro.textContent = "Percentual de gordura inválido(1 - 100)"
            return
        }
        if(paciente.gordura <= 0 || paciente.gordura > 100){
            var gorduraErro = document.querySelector("#gordura-erro");
            gorduraErro.textContent = "Percentual de gordura inválido(1 - 100)";
            return;
        }
        return;
    }

    console.log(paciente);
    //Adicionando o Paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    
    form.reset();
    

});
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");


    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        if(validaAltura(paciente.altura)){
            if(paciente.nome != ""){
                var nomeErro = document.querySelector("#nome-erro");
                nomeErro.textContent = "";
                    if((paciente.gordura > 0 && paciente.gordura < 100) && paciente.gordura != ""){ 

                         return true;  
                }
            
        } 
    }
}
    else{
        return false;
    }
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}