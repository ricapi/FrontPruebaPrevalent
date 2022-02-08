import { gql } from "@apollo/client";

const CREAR_EMPRESA = gql`
  mutation CrearEmpresa(
    $nombre: String
    $razonSocial: String
    $nit: String
    $identificacion: String
    $numEmpleados: String
    $imagen: String
  ) {
    crearEmpresa(
      nombre: $nombre
      razonSocial: $razonSocial
      nit: $nit
      identificacion: $identificacion
      numEmpleados: $numEmpleados
      imagen: $imagen
    ) {
      _id
      nombre
    }
  }
`;

const EDITAR_EMPRESA = gql`
  mutation EditarEmpresa(
    $_id: String
    $nombre: String
    $razonSocial: String
    $nit: String
    $identificacion: String
    $numEmpleados: String
  ) {
    editarEmpresa(
      _id: $_id
      nombre: $nombre
      razonSocial: $razonSocial
      nit: $nit
      identificacion: $identificacion
      numEmpleados: $numEmpleados
    ) {
      _id
      nombre
      razonSocial
      nit
      identificacion
      numEmpleados
    }
  }
`;

const CARGAR_IMAGEN = gql`
  mutation Mutation($_id: String, $campos: CamposImagen) {
    cargaImagen(_id: $_id, campos: $campos) {
      nombre
      imagen
    }
  }
`;

export { CREAR_EMPRESA, EDITAR_EMPRESA, CARGAR_IMAGEN };
