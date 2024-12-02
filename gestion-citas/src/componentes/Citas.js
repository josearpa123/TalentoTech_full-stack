import React, { useState } from 'react';

function Citas() {
    const [citas, setCitas] = useState([]);
    const [paciente, setPaciente] = useState('');
    const [tipo, setTipo] = useState('normal');
    const [medico, setMedico] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setCitas([...citas, { paciente, tipo, medico, fecha }]);
        setPaciente('');
        setTipo('normal');
        setMedico('');
        setFecha('');
    };

    return (
        <section>
            <h2>Registro de Citas</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del Paciente"
                    value={paciente}
                    onChange={(e) => setPaciente(e.target.value)}
                    required
                />
                <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
                    <option value="normal">Normal</option>
                    <option value="prioritaria">Prioritaria</option>
                    <option value="urgencia">Urgencia</option>
                </select>
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
                        <th>Paciente</th>
                        <th>Tipo</th>
                        <th>Médico</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {citas.map((item, index) => (
                        <tr key={index}>
                            <td>{item.paciente}</td>
                            <td>{item.tipo}</td>
                            <td>{item.medico}</td>
                            <td>{item.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Citas;
