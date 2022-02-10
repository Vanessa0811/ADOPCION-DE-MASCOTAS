class Usuario {

    constructor() {
        this.img = ""
        this.nombre = ""
        this.apellido = ""
        this.correo = ""
    }
}

let PERFIL;

document.querySelector('#frm-perfil').addEventListener('submit', e => {
    e.preventDefault();
    if (document.querySelector('#frm-perfil').checkValidity()) {
        let usuario = new Usuario()
        usuario.nombre = document.querySelector('#name').value
        usuario.apellido = document.querySelector('#surname').value
        usuario.correo = document.querySelector('#email').value
        //Se almacena la información del usuario
        localStorage.setItem('perfil', JSON.stringify(usuario));
    }
})

window.addEventListener('load', e => {
    cargarPerfil();
    pintarFormulario()
})

function cargarPerfil() {
    //Se recupera la información del usuario
    if (localStorage.getItem('perfil')) {
        PERFIL = JSON.parse(localStorage.getItem('perfil'));
    } else {
        //si no existe creamos uno por defecto para mostrarlo
        PERFIL = new Usuario()
        PERFIL.nombre = "Vanessa";
        PERFIL.apellido = "Rodriguez";
        PERFIL.correo = "vanero@gmail.com";
    }
}

function pintarFormulario() {
    document.querySelector('.nombre-usuario').innerHTML = (PERFIL.nombre + " " + PERFIL.apellido);
    document.querySelector('#name').value = PERFIL.nombre;
    document.querySelector('#surname').value = PERFIL.apellido;
    document.querySelector('#email').value = PERFIL.correo;
}
