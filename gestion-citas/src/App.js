import React from 'react';
import Disponibilidad from './componentes/Disponibilidad';
import Citas from './componentes/Citas';
import HistoriaClinica from './componentes/HistoriaClinica';

function App() {
    return (
        <div>
            <header style={styles.header}>
                <h1>Gestión de Citas Médicas</h1>
            </header>
            <main style={styles.main}>
                <Disponibilidad />
                <Citas />
                <HistoriaClinica />
            </main>
        </div>
    );
}

const styles = {
    header: {
        backgroundColor: '#0078d7',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
    },
    main: {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '0 15px',
    },
};

export default App;