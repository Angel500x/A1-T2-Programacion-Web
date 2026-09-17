const crearGestorTareas = () => {
    const CLAVE_STORAGE = "tareas_app";

    const obtenerTareas = () => {
        const datos = localStorage.getItem(CLAVE_STORAGE);
        return datos ? JSON.parse(datos) : [];
    };

    // Función privada para guardar en Local Storage usando JSON.stringify
    const guardarTareas = (tareas) => {
        localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
    };

    const renderizar = () => {
        const listaUl = document.getElementById("listaTareas");
        if (!listaUl) return;

        listaUl.innerHTML = "";
        const tareas = obtenerTareas();

        tareas.forEach((tarea, index) => {
            const li = document.createElement("li");
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.marginBottom = "8px";

            li.innerHTML = `
                <span>${tarea}</span>
                <button onclick="gestor.eliminar(${index})">Eliminar</button>
            `;
            listaUl.appendChild(li);
        });
    };

    return {
        init: () => {
            renderizar();
        },
        agregar: () => {
            const input = document.getElementById("nuevaTarea");
            const texto = input.value.trim();

            if (texto === "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Campo vacío',
                    text: 'Escribe una tarea antes de agregar.'
                });
                return;
            }

            const tareas = obtenerTareas();
            tareas.push(texto);
            guardarTareas(tareas);
            input.value = "";
            renderizar();
        },
        eliminar: (index) => {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: "Esta acción no se puede deshacer.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    const tareas = obtenerTareas();
                    tareas.splice(index, 1);
                    guardarTareas(tareas);
                    renderizar();
                    Swal.fire('¡Eliminada!', 'La tarea ha sido removida.', 'success');
                }
            });
        }
    };
};

const gestor = crearGestorTareas();

document.addEventListener("DOMContentLoaded", () => {
    gestor.init();
});