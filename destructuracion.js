// Datos recibidos del formulario
const formData = {
    username: 'Jared77',
    email: 'jared@hotmail.com',
    password: 'admin'
};
  // Desestructuración para extraer campos
const { username, email, password } = formData;

console.log(`Usuario: ${username}, Correo Electrónico: ${email}, Contraseña: ${password}`);
