import { gql } from "@apollo/client";

const CREAR_EMPRESA = gql`
  mutation Mutation(
    $nombre: String
    $razonSocial: String
    $nit: String
    $identificacion: String
    $numEmpleados: Int
  ) {
    crearEmpresa(
      nombre: $nombre
      razonSocial: $razonSocial
      nit: $nit
      identificacion: $identificacion
      numEmpleados: $numEmpleados
    ) {
      _id
      nombre
    }
  }
`;

export { CREAR_EMPRESA };
