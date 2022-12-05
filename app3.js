
let galeria = document.querySelector('#galeria');
galeria.className = 'galeria';

for (let i = 1; i < 11; i++) {
    let div = document.createElement('div');
    div.innerHTML = `
        <img class="fullScreen" src="img/${i}.jpg" alt="">
    `

    galeria.append(div);
}

let imagenes = document.querySelectorAll('.fullScreen');

imagenes.forEach(e => {
    e.addEventListener('click',() => {
        Swal.fire({
            background: 'none',
            padding: '10px',
            imageUrl: `${e.src}`,
            imageWidth: '85%',
            imageHeight: '85%',   
            showConfirmButton: false,
        })
    })
});

let lista = [1, 2, 3, 4];

for(let i = 0; i < lista.length; i++){
    lista[i] + 1;
}

console.log(lista)