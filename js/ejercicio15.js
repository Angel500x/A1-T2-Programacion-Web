let estudiantes = [];

function estudiante() {
    let nombreadd = document.getElementById("nombre").value.trim();
    let calificacionadd = document.getElementById("calificacion").value.trim();

    if (nombreadd === "" || calificacionadd === "" || isNaN(calificacionadd)) {
        alert("Ingresa nombre y calificación");
        return;
    }

    let calificacionx = parseFloat(calificacionadd);

    if (calificacionx < 0 || calificacionx > 100) {
        alert("La calificación debe estar entre 0 y 100.");
        return;
    }

    let estudiante = {
        nombre: nombreadd, 
        calificacion: calificacionx
    };

    estudiantes.push(estudiante);

    document.getElementById("contar").textContent = estudiantes.length;
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
    document.getElementById("nombre").focus();

    alert(`Estudiante "${estudiante.nombre}" agregado correctamente.`);
}
    function calcular() {
    if (estudiantes.length === 0) {
        alert("Agrega al menos un estudiante.");
        return;
    }

    let sumaTotal = estudiantes.reduce((total, e) => total + e.calificacion, 0);
    let promedio = sumaTotal / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let mejorEstudiante = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let peorEstudiante = estudiantes.find(e => e.calificacion === calificacionMinima);

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("estudiantemax").value = `${mejorEstudiante.nombre} (${mejorEstudiante.calificacion})`;
    document.getElementById("estudiantemin").value = `${peorEstudiante.nombre} (${peorEstudiante.calificacion})`;
}