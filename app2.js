// Form
let form = document.querySelector('form')
let check = document.querySelector('#check')
let nombre = form.elements.name;
let mail = form.elements.mail;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(check.checked === true){
        Swal.fire({
            icon: 'success',
            title: `${mail.value}`,
            text: `Perfecto tu correo fue enviado y recibiras correos con nuestra informacion ${nombre.value}!`,
        })
    } else{
        Swal.fire({
            icon: 'success',
            title: `${mail.value}`,
            text: `Perfecto tu correo fue enviado ${nombre.value}!`,
        })
    }
    
})