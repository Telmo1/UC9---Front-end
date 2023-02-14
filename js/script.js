function alerta(){
   window.alert("Vamos ganhar na mega em 2023!");
}

//DOM -> Modelo de documento de objeto.

let menu = document.getElementById("menu");

function mostrarMenu(){
    //Ações 
    // Se, o meu menur n~so estiver aparecendo, ele irá aparecer
    if(menu.style.display == "none" ){

        menu.style.display = "flex";
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

// USANDO O JQUARY

$(document).ready(function(){

    $("#barras").click(function(){
        // if($("#menu").hasClass("menu-ativo")){
        //     $("menu").removeClass("menu-ativo");
        // }else{
        //     $("menu").addClass("menu-ativo");
        // }
        $("menu").toggleClass("menu-ativo");
    });

    $("#carrosel img:eq(0)").addClass("banner-ativo").show();
        //Se existir uma proxima imagem
    setInterval(slide, 1000)
    function slide(){
        if($(".banner-ativo").next().length){
        //A imagem deixará de aparecer, para que a próxima apareça
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show();
        }else {
            $(".banner-ativo").removeClass().hide();
            $("#carrosel img:eq(0)").addClass("banner-ativo").show();
        }
    }

});