//Modificar usuarios de un formulario
const usuario = {
    nombre: "Jared",
    apellido: "Valenzuela",
    Edad: 21
};

Object.freeze(usuario);

// Intentar modificar el objeto (esto no tendrá efecto)
usuario.apellido = "Fernandez";

console.log(usuario); 
