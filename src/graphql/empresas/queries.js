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
      imagen
    }
  }
`;

const GET_EMPRESA = gql `
query Empresa($_id: String) {
  Empresa(_id: $_id) {
    _id
    nombre
    razonSocial
    nit
    identificacion
    numEmpleados
    imagen
  }
}
`;

export { GET_EMPRESAS, GET_EMPRESA };
