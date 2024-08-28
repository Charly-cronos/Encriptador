
const botonCifrar = document.querySelector(".boton-cifrar");
const textEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".boton-copiar");
const btnDesencriptar = document.querySelector(".boton-desencriptar");
const encriptadorAviso = document.querySelector(".encriptadorAviso");



botonCifrar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " ); 
    if(texto == ""){ 
        aviso.style.color = "#ea3030";
        aviso.style.fontweight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute(style);
        },1500);
    }

    else if(texto !== txt){
        aviso.style.color = "#ea3030";
        aviso.style.fontweight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute(style);
        },1500);
    }

    else if ( texto !== texto.toLowerCase()){
        aviso.style.color = "#ea3030";
        aviso.style.fontweight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute(style);
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");


        respuesta.innerHTML = texto; 
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})



btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " ); 


    if(texto == ""){ 
        aviso.style.color = "#ea3030";
        aviso.style.fontweight = "800";
        aviso.textContent = "El campo de texto no debe estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute(style);
        },1500);
    }

    else if(texto !== txt){
        aviso.style.color = "#ea3030";
        aviso.style.fontweight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute(style);
        },1500);
    }

    else if ( texto !== texto.toLowerCase()){
        aviso.style.color = "#ea3030";
        aviso.style.fontweight = "800";
        aviso.textContent = "El texto debe ser todo en minúscula";

        setTimeout(()=>{
            aviso.removeAttribute(style);
        },1500);
    }


    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto; 
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})


btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});
