import React, { useState } from 'react';

function HistoriaClinica() {
    const [historias, setHistorias] = useState([]);
    const [paciente, setPaciente] = useState('');
    const [motivo, setMotivo] = useState('');
    const [tratamiento, setTratamiento] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setHistorias([...historias, { paciente, motivo, tratamiento }]);
        setPaciente('');
        setMotivo('');
        setTratamiento('');
    };

    return (
        <section>
            <h2>Registro de Historia Clínica</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del Paciente"
                    value={paciente}
                    onChange={(e) => setPaciente(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Motivo"
                    value={motivo}
                    onChange={(e) => setMotivo(e.target.value)}
                    required
                ></textarea>
                <textarea
                    placeholder="Tratamiento"
                    value={tratamiento}
                    onChange={(e) => setTratamiento(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Registrar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Paciente</th>
                        <th>Motivo</th>
                        <th>Tratamiento</th>
                    </tr>
                </thead>
                <tbody>
                    {historias.map((item, index) => (
                        <tr key={index}>
                            <td>{item.paciente}</td>
                            <td>{item.motivo}</td>
                            <td>{item.tratamiento}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default HistoriaClinica;
