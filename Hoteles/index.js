const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const hoteles = [
    {
        nombre: "Hotel Plaza",
        puntuacion: 4,
        direccion: "Calle 1, 123",
        ciudad: "Bogotá",
        pais: "Colombia",
        telefono: "1234567",
        tiposHabitacion: ["Sencilla", "Doble", "Suite"],
        precioHabitaciones: [100, 150, 200]
    },
    {
        nombre: "Hotel Estrella",
        puntuacion: 5,
        direccion: "Calle 2, 456",
        ciudad: "Medellín",
        pais: "Colombia",
        telefono: "7654321",
        tiposHabitacion: ["Sencilla", "Doble", "Suite"],
        precioHabitaciones: [120, 170, 220]
    },
    {
        nombre: "Hotel Luna",
        puntuacion: 3,
        direccion: "Calle 3, 789",
        ciudad: "Cali",
        pais: "Colombia",
        telefono: "9876543",
        tiposHabitacion: ["Sencilla", "Doble", "Suite"],
        precioHabitaciones: [80, 130, 180]
    },
    {
        nombre: "Hotel Sol",
        puntuacion: 4,
        direccion: "Calle 4, 1011",
        ciudad: "Cartagena",
        pais: "Colombia",
        telefono: "3456789",
        tiposHabitacion: ["Sencilla", "Doble", "Suite"],
        precioHabitaciones: [110, 160, 210]
    },
    {
        nombre: "Hotel Mar",
        puntuacion: 5,
        direccion: "Calle 5, 1213",
        ciudad: "Santa Marta",
        pais: "Colombia",
        telefono: "2345678",
        tiposHabitacion: ["Sencilla", "Doble", "Suite"],
        precioHabitaciones: [130, 180, 230]
    }
];

// Middleware para parsear el body de las peticiones
app.use(bodyParser.json());

// Ruta para obtener todos los hoteles
app.get('/hoteles', (req, res) => {
    res.json(hoteles);
});

// Ruta para obtener un hotel por su nombre
app.get('/hoteles/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const hotel = hoteles.find(hotel => hotel.nombre === nombre);
    if (hotel) {
        res.json(hotel);
    } else {
        res.status(404).send('Hotel no encontrado');
    }
});

//Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
