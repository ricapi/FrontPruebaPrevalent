import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_EMPRESA, GET_EMPRESAS } from '../../graphql/empresas/queries'
import { Link, useParams } from 'react-router-dom';
import { Button, Dialog, DialogContent } from '@mui/material';
import { CREAR_EMPRESA } from '../../graphql/empresas/mutations'
import ButtonLoading from '../../components/ButtonLoading'
import useFormData from '../../hooks/useFormData';


const Formulario = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    //carga queries
    const {
        data: queryData,
        error: queryError,
        loading: queryLoading, } = useQuery(GET_EMPRESA, {
            variables: { _id },
        });

    //carga mutaciones
    const [crearEmpresa, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(CREAR_EMPRESA, { refetchQueries: [{ query: GET_EMPRESA }] });
    const [nuevaEmpresa, { data: mutationNewData, loading: mutationNewLoading, error: mutationNewError }] = useMutation(CREAR_EMPRESA);

    const [openDialog, setOpenDialog] = useState(false);
    //método del form
    const submitForm = async (e) => {
        e.preventDefault();
        console.log(formData);
        await
            crearEmpresa({
                variables: { _id, ...formData },
            });
    };

    useEffect(() => {
        if (mutationData) {
            console.log("Empresa modificada");
        }
    }, [mutationData]);

    useEffect(() => {
        console.log('data mutation', mutationData);
    });

    if (queryLoading) return <div>...loading</div>

    return (
        <div>
            <div className='flex bg-gray-100'>

                <h1 className='items-center font-extrabold text-gray-800 p-5'>Editar estado
                <button>
                    <Link className='p-5' to={`/empresas`}>
                        <i className='fa fa-arrow-left text-red-600 '></i>
                    </Link>
                </button>
                </h1>
            </div>

            <div className="p-5 text-center justify-between sm:w-full lg:w-full lg:h-full xl:w-full xl:h-full lg:grid grid-cols-1 ">
                {/* formulario con precarga de datos desde la selleción en la DB */}
                <form className=' sm:w-full sm:h-full lg:w-full lg:h-full' ref={form} onChange={updateFormData} onSubmit={submitForm} action="">
                    <h2 className="p-5 text-lg text-gray-900 font-extrabold text-gray-700">Aprobación de empresas</h2>
                    <div className='p-5 flex flex-wrap  border border-solid border-gray-200 content-center w-full'>

                        <div className='lg:grid grid-cols-1 w-full p-5 m-2'>
                            <label className='mr-2' htmlFor="">Logo</label>
                            <button type='button' className='bg-gray-200 rounded font-bold px-5 py-2 shadow-md m-2 w-full'>
                                <i className="fa fa-check-circle text-green-500 pr-2"></i>
                                Aprobar Empresa</button>
                            <button type='button' className='bg-gray-200 rounded font-bold px-5 py-2 shadow-md m-2 w-full'>
                                <i className="fa fa-times-circle text-red-600 pr-2"></i>Rechazar Empresa</button>
                        </div>
                        <div className="p-5 flex-wrap lg:grid  grid-cols-2 gap-2 border border-solid border-transparent content-center w-full justify-between">

                            <label className="p-3 m-2 content-center text-center" htmlFor="">Nombre de la empresa
                                <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="nombre" name="nombre" defaultValue={queryData.Empresa.nombre} />
                            </label>
                            <label className="p-3 m-2 text-center" htmlFor="">Razón social
                                <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Razón social" name="razonSocial" defaultValue={queryData.Empresa.razonSocial} />
                            </label>
                            <label className="p-3 m-2 text-center " htmlFor="">Tipo de identificación
                                <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Tipo de identificación" name="nit" defaultValue={queryData.Empresa.nit} />
                            </label>
                            <label className="p-3 m-2 text-center" htmlFor="">Identificación
                                <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Identificación" name="identificacion" defaultValue={queryData.Empresa.identificacion} />
                            </label>
                            <label className="p-3 m-2 text-center" htmlFor=""># de empleados
                                <input className="bg-gray-200 py-1 block w-full" type="number" placeholder="# Empleados" name="numEmpleados" defaultValue={queryData.Empresa.numEmpleados} />
                            </label>
                            <button onClick={() => setOpenDialog(true)} type="button" className="bg-gray-500 text-white font-bold px-6 py-3  hover:bg-gray-400 shadow-md rounded-xl m-2">
                                <i className="fa fa-paperclip text-indigo-900 pr-2"></i>Ver archivos adjuntos</button>
                            <ButtonLoading
                                text='Editar empresa'
                                loading={mutationLoading}
                                disabled={Object.keys(formData).length === 0} />
                            <div className=' mx-2 flex items-center justify-center text-center'>
                                <Button className='bg-gray-700 text-black'>atras</Button>
                                <Button className='bg-gray-700 text-black'>siguiente</Button>
                            </div>
                        </div>
                    </div>
                    {/* Dialog para la carga de los documentos pdfs */}

                    <Dialog className="w-screen " open={openDialog}>
                        <div className='flex justify-between lg:w-full lg:h-full'>
                            <h1 className='text-black font-extrabold p-3'>Documentos cargados</h1>
                            <button onClick={() => setOpenDialog(false)} type='button' className='m-2 '>
                                <i className="fa fa-times hover:text-red-400"></i>
                            </button>
                        </div>
                        <div>
                            <DialogContent dividers>
                                Listado archivos pdf's
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
                            </DialogContent>

                        </div>
                    </Dialog>

                </form>
            </div>
        </div>
    )
}

export default Formulario
