import React, { useState } from 'react';

function Disponibilidad() {
    const [disponibilidad, setDisponibilidad] = useState([]);
    const [medico, setMedico] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisponibilidad([...disponibilidad, { medico, fecha }]);
        setMedico('');
        setFecha('');
    };

    return (
        <section>
            <h2>Registro de Disponibilidad</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del Médico"
                    value={medico}
                    onChange={(e) => setMedico(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
                <button type="submit">Registrar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Médico</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {disponibilidad.map((item, index) => (
                        <tr key={index}>
                            <td>{item.medico}</td>
                            <td>{item.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Disponibilidad;
