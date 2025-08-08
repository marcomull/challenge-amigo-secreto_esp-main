// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();

    if (nombreAmigo === "") {
        alert("Ingrese un nombre de su amigo");
        return null;
    } 

    alert(`Ingreso el nombre del amigo: ${(nombreAmigo)}`)
    return nombreAmigo;
}

