

// Modificacion del DOM segun la consulta de horario
let fecha = document.querySelector('#fecha');

fecha.addEventListener("change", function() {
    let fechaDiv = document.querySelector('.fecha');

    if(fecha.nextElementSibling === null){
        let p = document.createElement('p');
        fechaDiv.append(p);
    } 

    let p = fecha.nextElementSibling;
    p.className = "parrafoFecha";

    let opcion = fecha.options[fecha.selectedIndex].text;

    if(fecha.value == "Abierto"){
        p.innerHTML = `<strong class='verde'>¡Abierto los ${opcion}!</strong> acerquese a nuestra sucursal mas cercana cuando quiera.`;
    } else if(fecha.value == "Cerrado"){
        p.innerHTML = `<strong class='rojo'>¡Cerrado los ${opcion}!</strong> consulte los demas dias.`; 
    }
});



