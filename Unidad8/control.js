const nombre = document.querySelector('#name');
const password = document.querySelector('#password');
const error = document.querySelector('#error');
error.style.color = 'Red';

document.querySelector('#formulario')
.addEventListener('submit', validarform);

function validarform() {
    let mjserror = [];

    if (nombre.value === null || nombre.value === ''){
        mjserror.push('Ingrese nombre de usuario');        
    } 
    if (password.value === null || password.value === ''){
        mjserror.push('Ingrese una contraseña');
    }
    
    error.innerHTML = mjserror.join(', ')
}

// var form = document.querySelector('#form');
//     form.addEventListener('submit',function(evt){
//         evt.preventDefault();
//     })