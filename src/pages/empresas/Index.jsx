import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_EMPRESAS } from '../../graphql/empresas/queries'
import { Link, useParams } from 'react-router-dom';
import { Button, Dialog, DialogContent, Icon } from '@mui/material';
import ButtonLoading from '../../components/ButtonLoading'
import useFormData from '../../hooks/useFormData';
import Formulario from '../empresas/Formulario'


const CreacionEmpresas = () => {
    //carga de datos
    const { data, error, loading } = useQuery(GET_EMPRESAS, { refetchQueries: [{ query: GET_EMPRESAS }], });
    const [openForm, setOpenForm] = useState(false);
    useEffect(() => {
        console.log('Datas server', data);
    }, [data]);
    return (
        <div>
            <div className='flex bg-gray-100'>

                <h2 className="p-5 text-lg font-extrabold">
                    Listar empresas
                    <button>
                        <Link to="/">
                            <i className="fa fa-home text-green-600 px-5"></i>
                        </Link>
                    </button>
                </h2>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg content-center">
            </div>
            {/* tabla de consulta de datos */}
            <div className="p-5 flex w-full sm:h-full sm:w-full xl:w-full content-center ">
                <table className="border flex-col sm:w-full sm:h-full lg:w-full lg:h-full md:w-full md:h-full ">
                    <thead className="min-w-full leading-normal border-gray-300">
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nombre</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Razón Social</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">NIT</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Identificación</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Num epleados</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Logo</th>
                    </thead>
                    <tbody className="border-gray-300">
                        {
                            // carga de datos en la tabla desde los registros de la base de datos
                            data && data.Creaciones ? (
                                <>
                                    {
                                        data && data.Creaciones.map((ce) => {
                                            return (
                                                <tr key={ce._id}>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/empresas/formulario/${ce._id}`}>
                                                            {ce.nombre}
                                                        </Link></td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/empresas/formulario/${ce._id}`}>
                                                            {ce.razonSocial}
                                                        </Link>
                                                    </td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/empresas/formulario/${ce._id}`}>
                                                            {ce.nit}
                                                        </Link></td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/empresas/formulario/${ce._id}`}>
                                                            {ce.identificacion}
                                                        </Link></td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/empresas/formulario/${ce._id}`}>
                                                            {ce.numEmpleados}
                                                        </Link></td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.logo}</td>

                                                </tr>
                                            )
                                        })
                                    }
                                </>
                            ) : (
                                <div>No autorizado</div>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                {/* <Formulario /> */}
            </div>
            {/* dialogo para cargar el formulario  */}
            <Dialog className='sm:w-full sm:h-full lg:h-full lg:w-full' open={openForm}>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-black font-extrabold p-3'>Formulario</h1>
                        <button onClick={() => setOpenForm(false)} type='button' className='m-2 '>
                            <i className="fa fa-times hover:text-red-400 "></i>
                        </button>
                    </div>
                </div>
                <div className='lg:h-full lg:w-full'>
                    <Formulario />
                    <div className=' mx-2 flex items-center justify-center'>
                        <Button className='bg-gray-700 text-black'>atras</Button>
                        <Button>siguiente</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
};


export default CreacionEmpresas
