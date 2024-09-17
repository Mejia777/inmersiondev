let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseña = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'; //aqui agregue los caracteres especiales.

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor o igual a 8");
        return;
    }

    let password = '';
    for(let i=0; i < numeroDigitado; i++){
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    
    }

    contraseña.value = password;
    setTimeout(()=>{
        validarContrasena(password); //llamo la funcion validar
    }, 100);
    
}

//funcion para validar si la contraseña es fuerte o debil
function validarContrasena(password){
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneMinuscula = /[a-z]/.test(password);
    const tieneNumero = /\d/.test(password);
    const tieneCaracterEspecial = /[!@#$%^&*()]/.test(password)

    if(tieneMayuscula && tieneMayuscula && tieneNumero && tieneCaracterEspecial && password.length >= 8){
        alert("La contraseña es fuerte.")
    } else {
        alert("La contraseña es débil. Debe tener al menos 8 caracteres, incluir una letra mayúscula, una letra minúscula, un número y un carácter especial.")
    }
}

//esta es la funcion para limpiar el input
function limpiar(){
    document.getElementById('contrasena').value = ""; 
}


