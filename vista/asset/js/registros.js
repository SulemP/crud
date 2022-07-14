let registros = []

const idId = document.getElementById("idId")
const idNombre = document.getElementById("idNombre")
const idApellido = document.getElementById("idApellido")
const idEdad = document.getElementById("idEdad")
const idTabla = document.getElementById("idTabla")

const crearRegistro = () => {
    const usuario = {
        id: uuidv4(),
        nombre: idNombre.value,
        apellido: idApellido.value,
        edad: idEdad.value
    }

    registros = JSON.parse(localStorage.getItem("usuarios")) || []
    registros.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(registros))

    mostrarRegistros()
}

const mostrarRegistros = () => {
    const registrosLocales = JSON.parse(localStorage.getItem("usuarios")) || []

    idTabla.innerHTML = ""
    registrosLocales.forEach((registroLocal) => {
        const fila = `
            <tr>
                <td>#</td>
                <td>${registroLocal.nombre}</td>
                <td>${registroLocal.apellido}</td>
                <td>${registroLocal.edad}</td>
                <td>
                    <button type="button" class="editar" onclick="preEditar('${registroLocal.id}')">
                    Editar
                    </button>
                </td>
                <td>
                    <button type="button" class="eliminar" onclick="eliminarRegistro('${registroLocal.id}')">
                    Eliminar
                    </button>
                </td>
            </tr>
        `
        idTabla.innerHTML += fila 
    })
}

const preEditar = (idRegistro) => {
    const registrosLocales = JSON.parse(localStorage.getItem("usuarios")) || []
    const usuario = registrosLocales.find((registroLocal) => {
        return registroLocal.id === idRegistro
    })

    idId.value = idRegistro
    idNombre.value = usuario.nombre 
    idApellido.value = usuario.apellido 
    idEdad.value = usuario.edad 

}

const editarRegistro = () => {
    const registrosLocales = JSON.parse(localStorage.getItem("usuarios")) || []
    const usuario = registrosLocales.find((registroLocal) => {
        return registroLocal.id === idId.value 
    })

    usuario.nombre = idNombre.value 
    usuario.apellido = idApellido.value 
    usuario.edad = idEdad.value

    localStorage.setItem("usuarios", JSON.stringify(registrosLocales))
    mostrarRegistros()
}

const eliminarRegistro = (idRegistro) => {
    const registrosLocales = JSON.parse(localStorage.getItem("usuarios")) || []
    const registrosFiltrados = registrosLocales.filter((registroLocal) => {
        return registroLocal.id !== idRegistro 
    })
    localStorage.setItem("usuarios", JSON.stringify(registrosFiltrados))
    mostrarRegistros()
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
  
  window.onload = () => {
    mostrarRegistros();
  };