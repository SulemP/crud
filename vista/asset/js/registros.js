let registros = []

const idId = document.getElementById("idId")
const idNombre = document.getElementById("idNombre")
const idApellido = document.getElementById("idApellido")
const idEdad = document.getElementById("idEdad")

const crearRegistro = () => {
    let usuario = {
        id: uuidv4(), //Es un generador de números aleatorios.
        nombre: idNombre.value,
        apellido: idApellido.value,
        edad: idEdad.value
    }

//La información ingresada por el usuario se agrega en el array y se almacena en localStorage.
registros = JSON.parse(localStorage.getItem("usuarios")) || []
registros.push(usuario) //Sirve para agregar valores a un array.
localStorage.setItem("usuarios", JSON.stringify(registros))

mostrarRegistros()

}

//Vamos a mostrar los datos ingresados y ya alamacenados, en la tabla de HTML.
const mostrarRegistros = () => {
    let registrosLocales = JSON.parse(localStorage.getItem("usuarios")) || []

    idTabla.innerHTML = ""
    registrosLocales.forEach((registroLocal) => {
        let fila = `
            <tr>
                <td>#</td>
                <td>${registroLocal.nombre}</td>
                <td>${registroLocal.apellido}</td>
                <td>${registroLocal.edad}</td>
                <td>
                    <button 
                        type="button" class="botonEditar" onclick="iniciarEditarRegistro('${registroLocal.id}')">Editar
                    </button>
                </td>
                <td>
                    <button 
                        type="button" class="botonEliminar" onclick="eliminarRegistro('${registroLocal.id}')">Eliminar
                    </button>
                </td>
            </tr>
        `
        idTabla.innerHTML += fila
    })
}