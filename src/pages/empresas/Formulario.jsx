import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_EMPRESAS, GET_EMPRESA, } from '../../graphql/empresas/queries'
import { Link, useParams } from 'react-router-dom';
import { Button, Dialog, DialogContent, Icon } from '@mui/material';
import { CREAR_EMPRESA, EDITAR_EMPRESA } from '../../graphql/empresas/mutations'
import ButtonLoading from '../../components/ButtonLoading'
import useFormData from '../../hooks/useFormData';
import Input from '../../components/Input';

const Formulario = () => {
    const [userData, setUserData] = useState({});
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

    const {
        data: queryData,
        error: queryError,
        loading: queryLoading, } = useQuery(GET_EMPRESA, {
            variables: { _id },
        });


    const [crearEmpresa, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(CREAR_EMPRESA);
    const [nuevaEmpresa, { data: mutationNewData, loading: mutationNewLoading, error: mutationNewError }] = useMutation(CREAR_EMPRESA);

    const [listaEmpresas, setListaEmpresas] = useState({});
    const [openDialog, setOpenDialog] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        console.log(formData);
        await
            crearEmpresa({
                variables: { _id, ...formData},
            });
            // nuevaEmpresa({
            //     variables: formData,
            // });
    };

    useEffect(() => {
        if (mutationData) {
            console.log("Empresa modificada");
        }
    }, [mutationData]);

    useEffect(() => {
        console.log('data mutation', mutationData);
    });
    // let input;

    if (queryLoading) return <div>...loading</div>

    return (
        <div>
            <h1 className='items-center font-extrabold text-gray-800'>Editar estado</h1>

            <div className="p-5 text-center justify-between sm:w-full lg:w-full lg:h-full lg:grid grid-cols-2 ">
                {/* onChange={updateFormData} onSubmit={submitForm} */}
                <form className=' sm:w-full sm:h-full lg:w-full lg:h-full' ref={form} onChange={updateFormData} onSubmit={submitForm} action="">
                    <h2 className="p-5 text-lg text-gray-900">Aprobación de empresas</h2>
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
                            <Input
                                label='Nombre de la empresa:'
                                type='text'
                                name='nombre'
                                //defaultValue={queryData.Empresa.nombre}
                                required={true} />
                            <label className="p-3 m-2 content-center text-center" htmlFor="">ID de la empresa
                                <input defaultValue={queryData.Empresa._id} className="bg-gray-200 py-1 block w-full" type="text" placeholder="_id" name="_id" />
                            </label>
                            <label className="p-3 m-2 content-center text-center" htmlFor="">Nombre de la empresa
                                <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="nombre" name="nombre" defaultValue={queryData.Empresa.nombre} />
                                
                            </label>
                            <label className="p-3 m-2 text-center" htmlFor="">Razón social
                                <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Razón social" name="razonSocial" defaultValue={queryData.Empresa.razonSocial}/>
                            </label><br />
                            <label className="p-3 m-2 text-center " htmlFor="">Tipo de identificación
                                <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Tipo de identificación" name="nit" defaultValue={queryData.Empresa.nit}/>
                            </label>
                            <label className="p-3 m-2 text-center" htmlFor="">Identificación
                                <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Identificación" name="identificacion" defaultValue={queryData.Empresa.identificacion}/>
                            </label><br />
                            <label className="p-3 m-2 text-center" htmlFor=""># de empleados
                                <input className="bg-gray-200 py-1 block w-full" type="number" placeholder="# Empleados" name="numEmpleados" defaultValue={queryData.Empresa.numEmpleados}/>
                            </label>
                            <button onClick={() => setOpenDialog(true)} type="button" className="bg-gray-400 text-white font-bold px-3 py-2  hover:bg-gray-400 shadow-md rounded m-5">
                                <i className="fa fa-paperclip text-indigo-900 pr-2"></i>Ver archivos adjuntos</button>
                            <ButtonLoading text='Editar empresa' loading={mutationLoading} disabled={Object.keys(formData).length === 0} />
                            <ButtonLoading text='Crear nueva empresa' loading={mutationNewLoading} disabled={Object.keys(formData).length === 0} />
                        </div>
                    </div>

                    <Dialog className="w-screen " open={openDialog}>
                        <div className='flex justify-between lg:w-full lg:h-full'>
                            <h1 className='text-black font-extrabold p-3'>Documentos cargados</h1>
                            <button onClick={() => setOpenDialog(false)} type='button' className='m-2 '>
                                <i className="fa fa-times hover:text-red-400"></i>
                            </button>
                        </div>
                        <div>
                            <DialogContent dividers>
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
