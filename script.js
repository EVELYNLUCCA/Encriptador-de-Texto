var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar");
var botonLimpiar = document.querySelector(".btn-limpiar");
var munieco = document.querySelector(".container-munieco");
var h3 = document.querySelector(".container-h3");
var parrafo = document.querySelector(".container-parrafo");
var textoResultado = document.querySelector(".texto-resultado");
var textArea = document.querySelector(".textarea");



botonEncriptar.onclick = encriptar; 
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;
botonLimpiar.onclick = limpiarTextAreas;
// los paréntesis de las funciones NO se colocan porque sino se estaría llamando a cada función ni bien se cargue o actualice la página.


function encriptar() {
    ocultarMuniecoYTextos();
    var textarea  = recuperarTexto();
    textoResultado.textContent = encriptarTexto(textarea);
    textArea.value = "";
}

function desencriptar() {
    ocultarMuniecoYTextos();
    var textarea  = recuperarTexto();
    textoResultado.textContent = desencriptarTexto(textarea);
}

function recuperarTexto() {
    var textarea = document.querySelector(".textarea"); // probar con un alert(textarea.value) para saber si está capturando el texto del textarea al hacer click.
        return textarea.value; // cada vez que se llama a la función recuperarTexto(), es lo mismo que: return textarea.value; es decir me devuelve lo que está en el textarea.
}

function ocultarMuniecoYTextos() {
    munieco.classList.add("ocultar"); 
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    // la propiedad classList.add agrega la clase (ocultar, en este caso).
}

function encriptarTexto(textoRecuperado) {
    var texto = textoRecuperado;
    var mensaje = "";

    for(var i = 0; i < texto.length; i++) { // recordar: i arranca en cero.
        if(texto[i] == "a") {
            mensaje = mensaje + "ai";
        }
        else if(texto[i] == "e") {
            mensaje = mensaje + "enter";
        }
        else if(texto[i] == "i") {
            mensaje = mensaje + "imes";
        }
        else if(texto[i] == "o") {
            mensaje = mensaje + "ober";
        }
        else if(texto[i] == "u") {
            mensaje = mensaje + "ufat";
        } else {
            mensaje = mensaje + texto[i];
        }
    }
        
    return mensaje;
}

function desencriptarTexto(textoRecuperado) {
    var texto = textoRecuperado;
    var mensaje = "";

    for(var i = 0; i < texto.length; i++) {  
        if(texto[i] == "a") {
            mensaje = mensaje + "a"; //si encuentra la letra "a" agregra la letra "a"
            i = i + 1; // como lee letra por letra, para que no itere las letras que vienen después (de la "a", en este caso), incrementamos i, entonces cuando encuentre una "a" que le sume 1 (porque "ai" es la letra "a" + 1 letra -entonces lee la "a" y salta 1 letra- en el caso de la "e", que es "enter", es la letra "e" + 4 letras -entonces lee la "e" y salta 4 letras-, etc.
        }
        else if(texto[i] == "e") {
            mensaje = mensaje + "e";
            i = i + 4;
        }
        else if(texto[i] == "i") {
            mensaje = mensaje + "i";
            i = i + 3;
        }
        else if(texto[i] == "o") {
            mensaje = mensaje + "o";
            i = i + 3;
        }
        else if(texto[i] == "u") {
            mensaje = mensaje + "u";
            i = i + 3;
        } else {
            mensaje = mensaje + texto[i];
        }
    }
        
    return mensaje;
}

    function copiarTexto() {
        var resultado = document.querySelector(".texto-resultado");
        navigator.clipboard.writeText(resultado.innerHTML);
        alert("Mensaje Copiado!");
        var textarea = document.querySelector(".textarea");
        textarea.value = resultado.innerHTML;
        //console.log(textarea.value);
        resultado.innerHTML = "";
    }   

    function limpiarTextAreas() {
    document.querySelector(".textarea").value = "";
    var limpiar = document.querySelector(".texto-resultado");
    limpiar.innerHTML = "";
    // munieco.style.display = "flex";
    // h3.style.display = "flex";
    // parrafo.style.display = "flex";
    location. reload(); // Método para recargar la página.
    }

    