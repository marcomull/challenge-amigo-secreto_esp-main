// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function asignarTextoElemento(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}

/** 
Función que agrega un amigo a la lista 
Valida el nombre ingresado
Lo guarda en listaAmigos si no existe
Limpia el input
*/
function agregarAmigo() {
    let nombre = obtenerNombreAmigo();
    if (nombre) {
        agregarAmigoLista(nombre);
        asignarTextoElemento('listaAmigos', `${(listaAmigos.join('<br>'))}`);
        limpiarCampo();
    }
}

/* 
Función que selecciona un amigo al azar de la lista
Con length se da el conteo de los amigos para generar un indice aleatorio
Retorna el nombre sorteado
*/
function sortearAmigo() {
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    asignarTextoElemento('listaAmigos', `El amigo secreto sorteado es: ${amigoSorteado}`);
    document.getElementById('listaAmigos').style.color = 'green';
    return `${amigoSorteado}`;
}


/*
Obtiene el nombre ingresado en el input con id 'amigo'
Valida que no esté vacío y retorna el nombre del amigo
 */
function obtenerNombreAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo === "") {
        alert("Ingrese un nombre de su amigo");
        return null;
    }
    return nombreAmigo;
}

/*
Agrega un nombre a la lista de amigos si no existe ya
 */
function agregarAmigoLista(nombre) {
    if (existeAmigo(nombre)) {
        alert("Ya existe el nombre del amigo: " + nombre);
    } else {
        listaAmigos.push(nombre);
    }
}

/* 
Verifica si un nombre ya está en la lista
*/
function existeAmigo(nombre) {
    return listaAmigos.includes(nombre);
}

/** 
Limpia el campo de entrada con id 'amigo'
*/
function limpiarCampo() {
    document.getElementById('amigo').value = "";
}
