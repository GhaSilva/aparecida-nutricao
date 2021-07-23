var botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.add("invisivel")
    
            for(var i = 0; i < pacientes.length; i ++){
                adicionaPacienteNaTabela(pacientes[i])
            }
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel")
        }  
    })
});

