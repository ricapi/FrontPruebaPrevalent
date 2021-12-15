import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { CREAR_EMPRESA } from '../../graphql/empresas/mutations'
import { GET_EMPRESAS, GET_EMPRESA } from '../../graphql/empresas/queries'
import { Link, useParams } from 'react-router-dom';
import { Button, Dialog, DialogContent, Icon } from '@mui/material';
import ButtonLoading from '../../components/ButtonLoading'
import useFormData from '../../hooks/useFormData';
import Input from '../../components/Input';
import Formulario from '../empresas/Formulario'

const CreacionEmpresas = () => {
    const { data, error, loading } = useQuery(GET_EMPRESAS);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        console.log('Datas server', data);
    }, [data]);
    return (
        <div>
            <h2 className="p-5 text-lg font-extrabold">
                Creación empresas
                <button>
                    <Link to="/">
                        <i className="fa fa-home text-green-600 px-5"></i>
                    </Link>
                </button>
            </h2>
            <div className="max-w-sm rounded overflow-hidden shadow-lg content-center">
            </div>
            <div className="p-5 flex w-full sm:h-full sm:w-full xl:w-full content-center ">
                <table className="border flex-col w-full sm:w-full sm:h-full ">
                    <thead className="min-w-full leading-normal border-gray-300">
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nombre</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Razón Social</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">NIT</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Identificación</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Num epleados</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Logo</th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Edición</th>
                    </thead>
                    <tbody className="border-gray-300">
                        {
                            data && data.Creaciones ? (
                                <>
                                    {
                                        data && data.Creaciones.map((ce) => {
                                            return (
                                                <tr key={ce._id}>

                                                    <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.nombre}</td>
                                                    <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.razonSocial}</td>
                                                    <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.nit}</td>
                                                    <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.identificacion}</td>
                                                    <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.numEmpleados}</td>

                                                    <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.logo}</td>
                                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                        <Link to={`/empresas/formulario/${ce._id}`}>
                                                            <i className=' fa fa-edit text-yellow-600 hover:text-yellow-400 text-center cursor-pointer mx-2' />

                                                        </Link>
                                                    </td>



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
