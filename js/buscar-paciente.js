var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText
        console.log(resposta);
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);

        for(var i = 0; i < pacientes.length; i ++){
            adicionaPacienteNaTabela(pacientes[i])
        }
            
      

        adicionaPacienteNaTabela(paciente)
    })

});

