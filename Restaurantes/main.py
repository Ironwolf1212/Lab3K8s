from fastapi import FastAPI

app = FastAPI()

restaurantes = [
    {
        "nombre": "Restaurante A",
        "tipo_comida": "Comida Mexicana",
        "direccion": "Calle 123, Ciudad",
        "telefono": "123-456-7890",
        "calificacion": 4.5,
        "dias_especiales": ["Lunes", "Miércoles"]
    },
    {
        "nombre": "Restaurante B",
        "tipo_comida": "Comida Italiana",
        "direccion": "Avenida 456, Ciudad",
        "telefono": "987-654-3210",
        "calificacion": 4.2,
        "dias_especiales": ["Martes", "Jueves"]
    },
    {
        "nombre": "Restaurante C",
        "tipo_comida": "Comida China",
        "direccion": "Calle 789, Ciudad",
        "telefono": "555-123-4567",
        "calificacion": 4.0,
        "dias_especiales": ["Viernes", "Sábado"]
    },
    {
        "nombre": "Restaurante D",
        "tipo_comida": "Comida Japonesa",
        "direccion": "Avenida 012, Ciudad",
        "telefono": "111-222-3333",
        "calificacion": 4.8,
        "dias_especiales": ["Domingo"]
    },
    {
        "nombre": "Restaurante E",
        "tipo_comida": "Comida Española",
        "direccion": "Calle 345, Ciudad",
        "telefono": "444-555-6666",
        "calificacion": 4.3,
        "dias_especiales": ["Lunes", "Miércoles"]
    },
    {
        "nombre": "Restaurante F",
        "tipo_comida": "Comida India",
        "direccion": "Avenida 678, Ciudad",
        "telefono": "777-888-9999",
        "calificacion": 4.1,
        "dias_especiales": ["Martes", "Jueves"]
    },
    {
        "nombre": "Restaurante G",
        "tipo_comida": "Comida Tailandesa",
        "direccion": "Calle 901, Ciudad",
        "telefono": "000-111-2222",
        "calificacion": 4.6,
        "dias_especiales": ["Viernes", "Sábado"]
    },
    {
        "nombre": "Restaurante H",
        "tipo_comida": "Comida Francesa",
        "direccion": "Avenida 234, Ciudad",
        "telefono": "333-444-5555",
        "calificacion": 4.4,
        "dias_especiales": ["Domingo"]
    },
    {
        "nombre": "Restaurante I",
        "tipo_comida": "Comida Coreana",
        "direccion": "Calle 567, Ciudad",
        "telefono": "666-777-8888",
        "calificacion": 4.7,
        "dias_especiales": ["Lunes", "Miércoles"]
    },
    {
        "nombre": "Restaurante J",
        "tipo_comida": "Comida Americana",
        "direccion": "Avenida 890, Ciudad",
        "telefono": "999-000-1111",
        "calificacion": 4.9,
        "dias_especiales": ["Martes", "Jueves"]
    }
]


@app.get("/restaurantes")
def get_restaurants():
    return restaurantes

@app.get("/restaurantes/{restaurante_id}")
def get_restaurante(restaurante_id: int):
    if 0 <= restaurante_id < len(restaurantes):
        return restaurantes[restaurante_id]
    else:
        return {"error": "Restaurante no encontrado"}