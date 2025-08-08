// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nombre = obtenerNombreAmigo();
    agregarAmigoLista(nombre);
    console.log(nombre);
    console.log(listaAmigos);
}

function obtenerNombreAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === "") {
        alert("Ingrese un nombre de su amigo");
        return null;
    }
    return nombreAmigo;
}

function agregarAmigoLista(nombre) {
    if (existeAmigo(nombre)) {
        alert("Ya existe el nombre del amigo: " + nombre);
    } else {
        listaAmigos.push(nombre);
        alert("Ingreso el nombre del amigo: " + nombre);
    }
}

function existeAmigo(nombre) {
    return listaAmigos.includes(nombre);
}

