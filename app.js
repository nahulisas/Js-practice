const agregar = document.querySelector('.button')
const input = document.querySelector('input')
const lista = document.getElementById('lista')
const borrarTodo = document.getElementById('borrarBtn')

// agregar eventos
borrarTodo.addEventListener('click', eliminarTodas)
agregar.addEventListener('click', nuevaTarea)

// agregar elementos a la lista
function nuevaTarea() {
    const itemList = document.createElement('li')
    const p = document.createElement('p')
    p.textContent = input.value;
    if (input.value == '') {
        alert('por favor ingrese una tarea')
    } else {
        itemList.append(p)
        lista.append(itemList)
    }
    texto.value = "";


    // se agregar iconos de completar y eliminar
    const completar = document.createElement('span')
    completar.classList.add('fa-solid', 'fa-check')
    itemList.appendChild(completar)
    completar.addEventListener('click', tareaRealizada)
    const borrar = document.createElement('span')
    borrar.classList.add('fa-solid', 'fa-trash')
    itemList.appendChild(borrar)
    borrar.addEventListener('click', eliminarTarea)

}

// marcar como realizado
function tareaRealizada(e) {

    const lineThrough = e.target.parentNode;
    lineThrough.classList.toggle('check');

    const checkSelf = e.target;
    checkSelf.classList.toggle('check');

}

// eliminar item de la lista
function eliminarTarea(e) {
    const eliminar = e.target.parentNode;
    eliminar.remove();
}

// keydown event (Enter)
input.addEventListener('keydown', (enter) => {
    if (enter.key === 'Enter') {
        nuevaTarea();
    }
});

// borrar todas las tareas 
function eliminarTodas() {
    while (lista.hasChildNodes) {
        lista.removeChild(lista.firstChild);
    }
}





























