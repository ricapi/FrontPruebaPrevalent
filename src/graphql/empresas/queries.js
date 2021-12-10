import { gql } from "@apollo/client";

const GET_EMPRESAS = gql`
  query Query {
    Creaciones {
      _id
      nombre
      razonSocial
      nit
      identificacion
      numEmpleados
    }
  }
`;

export { GET_EMPRESAS };
