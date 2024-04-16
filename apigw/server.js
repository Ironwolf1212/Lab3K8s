const { ApolloServer, AuthenticationError } = require('apollo-server');
const axios = require('axios'); 

const typeDefs = `
  type Query {
    service1: String
    service2: String
    service3: String
  }
`;

const resolvers = {
  Query: {
    service1: async (parent, args, context, info) => {
      // console.log(context.token);
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

// async function getContext({ req }) {
//     const authHeader = req.headers.authorization || '';
//     const token = authHeader.split('Bearer ')[1];

//     try {
//         const response = await axios.post(process.env.AUTHSERVICE-SERVICE+'/verify-token', { token: token });
//         console.log(response.data)
//         if (response.data && response.data.isValid) {
//             return { token };
//         } else {
//             throw new AuthenticationError("No estás autorizado");
//         }
//     } catch (err) {
//         throw new AuthenticationError("Error al validar el token");
//     }
// }

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

