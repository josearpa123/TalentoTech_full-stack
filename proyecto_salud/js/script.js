// script.js

// Registro de Disponibilidad
const formDisponibilidad = document.getElementById('form-disponibilidad');
const tablaDisponibilidad = document.getElementById('tabla-disponibilidad');

formDisponibilidad.addEventListener('submit', (e) => {
    e.preventDefault();
    const medico = document.getElementById('medico').value;
    const fecha = document.getElementById('fecha-disponible').value;

    const row = document.createElement('tr');
    row.innerHTML = `<td>${medico}</td><td>${fecha}</td>`;
    tablaDisponibilidad.appendChild(row);

    formDisponibilidad.reset();
});

// Registro de Citas
const formCitas = document.getElementById('form-citas');
const tablaCitas = document.getElementById('tabla-citas');

formCitas.addEventListener('submit', (e) => {
    e.preventDefault();
    const paciente = document.getElementById('paciente').value;
    const tipo = document.getElementById('tipo-solicitud').value;
    const medico = document.getElementById('medico-cita').value;
    const fecha = document.getElementById('fecha-cita').value;

    const row = document.createElement('tr');
    row.innerHTML = `<td>${paciente}</td><td>${medico}</td><td>${fecha}</td><td>${tipo}</td>`;
    tablaCitas.appendChild(row);

    formCitas.reset();
});

// Registro de Historia Clínica
const formHistoria = document.getElementById('form-historia');
const tablaHistoria = document.getElementById('tabla-historia');

formHistoria.addEventListener('submit', (e) => {
    e.preventDefault();
    const paciente = document.getElementById('paciente-historia').value;
    const motivo = document.getElementById('motivo').value;
    const tratamiento = document.getElementById('tratamiento').value;

    const row = document.createElement('tr');
    row.innerHTML = `<td>${paciente}</td><td>${motivo}</td><td>${tratamiento}</td>`;
    tablaHistoria.appendChild(row);

    formHistoria.reset();
});
