function byName(n){return document.getElementsByName(n)[0];}
    byName("enviar").addEventListener("click", (event) =>{ 
        if(formValido()){event.preventDefault(); setEstado();}  
});

function setEstado(){
    byName("name").setAttribute("DISABLED", "");
    byName("email").setAttribute("DISABLED", "");
    byName("Telefone").setAttribute("DISABLED", "");
    byName("Message").setAttribute("DISABLED", "");
    byName("enviar").setAttribute("DISABLED", "");
    byName("enviar").setAttribute("id", "subDisabed");
    byName("enviar").style.cursor = "default";
    enviar();
}

function formValido() {
    var inputs = document.getElementById("contato-form").querySelectorAll("input[required]");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            return false;
        }
    }
    return true;
}

function enviar(numPonto, ciclo){
    numPonto=(numPonto==undefined) ? 0 : numPonto;
    ciclo=(ciclo==undefined) ? 1 : ciclo;
    var pp = [".", "..", "..."];
    if(!(ciclo >= 5)){
        if(!(numPonto >= 3)){      
            byName("enviar").innerHTML = "ENVIANDO"+pp[numPonto];
            window.setTimeout(enviar, 250, numPonto+1, ciclo);
        }else{
            window.setTimeout(enviar, 50, 0, ciclo+1);
        }
    }else{ 
        byName("enviar").innerHTML = "ENTREGUE";
        window.setTimeout(() => { document.getElementsByClassName("cobertura")[0].style.display = "flex";}, 500);
        window.setTimeout(() => { document.getElementsByClassName("cobertura")[0].style.opacity = "1";
        window.setTimeout(reDirect, 500);
        }, 1000);  
    }
}

function reDirect(tempo){ tempo=(tempo==undefined) ? 5 : tempo;
    if(tempo >= 1){
        console.log(tempo);
        byName("tempo").innerHTML = tempo;
        window.setTimeout(reDirect, 1700, tempo-1);
    }else{byName("tempo").innerHTML = tempo;
    window.setTimeout(() => {window.location.href = "index.html"}, 800);
    }
}