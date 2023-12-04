// Crear variables para cada elemento a utilizar

	// Representa el input donde escribirán la tarea
	var entradaTarea = document.getElementById("entradaTarea");
	
	// Representa el elemento donde se almacenarán todas las tareas
	var listaTareas = document.getElementById("listaTareas");

// Evento click del botón Agregar

function BotonAgregarTareas() 
{
    



  var textoTarea = entradaTarea.value;

  // Si el input NO se encuentra vacio, se agrega la tarea:

  if (textoTarea !== "") {
    var elementoTarea = document.createElement("li");
    elementoTarea.textContent = textoTarea;

    var botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("delete-button");
    elementoTarea.appendChild(botonEliminar);

    // Evento click del botón Eliminar
    botonEliminar.addEventListener("click", function () {elementoTarea.remove();});

    // Agregar la tarea a la lista
    listaTareas.appendChild(elementoTarea);

		// Vaciar el input al agregar la tarea
    entradaTarea.value = "";
  }
}