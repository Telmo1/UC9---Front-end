function alerta(){
   window.alert("Vamos ganhar na mega em 2023!");
}

//DOM -> Modelo de documento de objeto.

let menu = document.getElementById("menu");

function mostrarMenu(){
    //Ações 
    // Se, o meu menur n~so estiver aparecendo, ele irá aparecer
    if(menu.style.display == "none" ){
        menu.style.displey = "flex";
    } else {
        menu.style.display = "none";
    }

    //Então, se o menur estiver aparecendo, ele irá desaparecer
}






let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigigitado = email.value;

    console.log(emailDigigitado);
}