const formRegistro = document.getElementById("formRegistro");
const formIniciarSesion = document.getElementById("formIniciarSesion");
const formContraseña = document.getElementById("formContraseña");
const iniciar = document.getElementById("iniciar");
const Registrar = document.getElementById("Registrar");
const RecuperarContraseña = document.getElementById("RecuperarContraseña");


function mostrarFormulario(formulario) {

    [formRegistro, formIniciarSesion, formContraseña].forEach(form => {
        form.classList.remove("active");
    });

    formulario.classList.add("active");
}


iniciar.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarFormulario(formIniciarSesion);
});

Registrar.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarFormulario(formRegistro);
});

RecuperarContraseña.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarFormulario(formContraseña);
});
