const { ApolloServer, AuthenticationError } = require('apollo-server');
const axios = require('axios'); 

const typeDefs = `
  type Hotel {
    nombre: String
    puntuacion: Int
    direccion: String
    ciudad: String
    pais: String
    telefono: String
    tiposHabitacion: [String]
    precioHabitaciones: [Int]
  }

  type Vuelo {
    aerolinea: String
    origen: String
    destino: String
    fecha: String
    hora: String
    duracion: String
    precio: Int
  }

  type Restaurante {
    nombre: String
    tipo_comida: String
    direccion: String
    telefono: String
    calificacion: Float
    dias_especiales: [String]
  }

  type Query {
    service1: [Hotel]
    service2: [Vuelo]
    service3: [Restaurante]
  }
`;

const resolvers = {
  Query: {
    service1: async (parent, args, context, info) => {
      try {
          const response = await axios.get(process.env.HOTELES_SERVICE+'hoteles');
          const data = response.data;
          return [...data];
      } catch (err) {
          console.error("Error al obtener datos de hoteles", err);
          return [];
      }
    },
    service2: async () => {
      try {
          const response = await axios.get(process.env.VUELOS_SERVICE+'vuelos');
          const data = response.data;
          return [...data];
      } catch (err) {
          console.error("Error al obtener datos de los vuelos", err);
          return [];
      }
    },
    service3: async() => {
      try {
          const response = await axios.get(process.env.RESTAURANTES_SERVICE+'restaurantes');
          const data = response.data;
          return [...data];
      } catch (err) {
          console.error("Error al obtener datos de cachetada", err);
          return "Error al obtener datos de cachetada";
      }
    },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

