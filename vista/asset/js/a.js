let registros = []

const idID = document.getElementById("idID"); //Con getElementById, seleccionamos un elemento por su ID.
const idNombre = document.getElementById("idNombre");
const idApellido = document.getElementById("idApellido");
const idEdad = document.getElementById("idEdad");
const idTabla = document.getElementById("idTabla");

const registrar = () => {
    const usuario = { //Esto es un objeto
        id : uuidv4(), //Es un generador de números random.
        nombre : idNombre.value, //Con .value obtenemos el valor de un elemento. O sea que nos devolverá lo que el usuario registre.
        apellido : idApellido.value,
        edad : idEdad.value
    }

    //JSON.parse analiza una cadena de texto JSON y getItem me regresa el valor que se pasa por parámetro.
    registros = JSON.parse(localStorage.getItem("usuarios")) || []; 
    registros.push(usuario);
    /*setItem es el método para almacenar información en nuestro localStorage. 
    En el primer parámetro ingresamos el nombre de nuestro elemento, y en el segundo ingresamos el valor de éste.
    .stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON*/
    localStorage.setItem("usuarios", JSON.stringify(registros)); 

    mostrarRegistros();
}