const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3100;

const vuelos = [
    {
        aerolinea: "Avianca",
        origen: "Bogotá",
        destino: "Medellín",
        fecha: "2021-12-01",
        hora: "08:00",
        duracion: "1h",
        precio: 100
    },
    {
        aerolinea: "LATAM",
        origen: "Medellín",
        destino: "Cali",
        fecha: "2021-12-02",
        hora: "09:00",
        duracion: "1h",
        precio: 120
    },
    {
        aerolinea: "Viva Air",
        origen: "Cali",
        destino: "Cartagena",
        fecha: "2021-12-03",
        hora: "10:00",
        duracion: "1h",
        precio: 130
    },
    {
        aerolinea: "Copa Airlines",
        origen: "Cartagena",
        destino: "Santa Marta",
        fecha: "2021-12-04",
        hora: "11:00",
        duracion: "1h",
        precio: 140
    },
    {
        aerolinea: "Aeroméxico",
        origen: "Santa Marta",
        destino: "Bogotá",
        fecha: "2021-12-05",
        hora: "12:00",
        duracion: "1h",
        precio: 150
    }
];

// Middleware para parsear el body de las peticiones
app.use(bodyParser.json());

// Ruta para obtener todos los vuelos
app.get('/vuelos', (req, res) => {
    res.json(vuelos);
});

// Ruta para obtener un vuelo por su aerolinea
app.get('/vuelos/:aerolinea', (req, res) => {
    const aerolinea = req.params.aerolinea;
    const vuelo = vuelos.find(vuelo => vuelo.aerolinea === aerolinea);

    if (vuelo) {
        res.json(vuelo);
    } else {
        res.status(404).send(`Vuelo con aerolinea ${aerolinea} no encontrado`);
    }
});

// Ruta para obtener vuelos por destino
app.get('/vuelos/destino/:destino', (req, res) => {
    const destino = req.params.destino;
    const vuelosDestino = vuelos.filter(vuelo => vuelo.destino === destino);

    if (vuelosDestino.length > 0) {
        res.json(vuelosDestino);
    } else {
        res.status(404).send(`No se encontraron vuelos con destino a ${destino}`);
    }
});

//Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
