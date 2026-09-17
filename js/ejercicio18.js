const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = input.value.trim();

    if (texto !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center animate__animated animate__fadeIn';

        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.className = 'btn btn-outline-danger btn-sm';

        botonEliminar.addEventListener('click', function() {
            Swal.fire({
                title: '¿Eliminar elemento?',
                text: `Se borrará "${texto}" de la lista.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    li.remove();
                }
            });
        });

        li.appendChild(spanTexto);
        li.appendChild(botonEliminar);

        lista.appendChild(li);

        input.value = '';
        input.focus();
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Por favor, escribe algo antes de agregar a la lista.'
        });
    }
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarElemento();
    }
});