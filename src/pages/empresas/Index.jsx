import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { GET_EMPRESAS } from '../../graphql/empresas/queries'
import { Button, Dialog, DialogContent, Icon } from '@mui/material';
import { CREAR_EMPRESA } from '../../graphql/empresas/mutations'
import ButtonLoading from '../../components/ButtonLoading'
import useFormData from '../../hooks/useFormData';


const CreacionEmpresas = () => {
    const { data, error, loading } = useQuery(GET_EMPRESAS);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        console.log('Datas server', data);
    }, [data]);
    return (
        <div>
            {/* <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link> */}
            {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link> */}


            <h2 className="p-5 text-lg">
                Creación empresas
                <i class="fa fa-home text-green-600 px-5"></i>
            </h2>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                {/* <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
            </div>
            <div className="p-5 flex w-full justify-between">
                <table className="border-2  ">
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
                            data && data.Creaciones.map((ce) => {
                                return (
                                    <tr key={ce._id}>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.nombre}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.razonSocial}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.nit}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.identificacion}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.numEmpleados}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.logo}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <Formulario />
            </div>
            <Dialog open={openForm}>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-black font-extrabold p-3'>Formulario</h1>
                        <button onClick={() => setOpenForm(false)} type='button' className='m-2 '>
                            <i class="fa fa-times hover:text-red-400 "></i>
                        </button>
                    </div>
                </div>
                <div>
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
const Formulario = () => {
    const [crearEmpresa, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(CREAR_EMPRESA);
    const [listaEmpresas, setListaEmpresas] = useState({});
    const { form, formData, updateFormData } = useFormData();
    const { data, loading, error } = useQuery(GET_EMPRESAS);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        console.log(data);
        // if (data) {
        //     const le = {};
        //     data.Creaciones.ForEach((elemento) => {
        //         le[elemento._id] = elemento.correo;
        //     });

        //     setListaEmpresas(le);
        // }
    }, [data]);

    useEffect(() => {
        console.log('data mutation', mutationData);
    });
    let input;
    const submitForm = (e) => {
        e.preventDefault();

        crearEmpresa({
            variables: { nombre: data.value, razonSocial: data.value },
        });
    };

    if (loading) return <div>...loading</div>

    return (
        <div >
            <div className="p-5">
                <form ref={form} onChange={updateFormData} onSubmit={submitForm} action="">
                    <h2 className="p-5 text-lg text-gray-900">Aprobación de empresas</h2>
                    <div className='p-5 flex flex-wrap  border border-solid border-gray-200'>

                        <div className='flex w-full p-5 mr-2'>
                            <label className='mr-2' htmlFor="">Logo</label>
                            <button type='button' className='bg-gray-200 rounded font-bold px-5 py-2 shadow-md mr-2'>
                                <i class="fa fa-check-circle text-green-500 pr-2"></i>
                                Aprobar Empresa</button>
                            <button type='button' className='bg-gray-200 rounded font-bold px-5 py-2 shadow-md mr-2'>
                                <i class="fa fa-times-circle text-red-600 pr-2"></i>Rechazar Empresa</button>
                        </div>
                        <div className="p-5 flex flex-wrap  border border-solid border-transparent">
                            <label className="p-3 mr-2" htmlFor="">Nombre de la empresa
                                <input className="bg-gray-200 py-1 block" type="text" placeholder="nombre" name="nombre" />
                            </label>
                            <label className="p-3 mr-2" htmlFor="">Razón social
                                <input className="bg-gray-200 py-1 block" type="text" placeholder="Razón social" name="razonSocial" />
                            </label><br />
                            <label className="p-3 mr-2" htmlFor="">Tipo de identificación
                                <input className="bg-gray-200 py-1 block" type="text" placeholder="Tipo de identificación" name="nit" />
                            </label>
                            <label className="p-3 mr-2" htmlFor="">Identificación
                                <input className="bg-gray-200 py-1 block" type="text" placeholder="Identificación" name="identificacion" />
                            </label><br />
                            <label className="p-3 mr-2" htmlFor=""># de empleados
                                <input className="bg-gray-200 py-1 block" type="text" placeholder="# Empleados" name="numEmpleados" />
                            </label>
                            <button onClick={() => setOpenDialog(true)} type="button" className="bg-gray-400 text-white font-bold px-3 py-2  hover:bg-gray-400 shadow-md rounded mr-2">
                                <i class="fa fa-paperclip text-indigo-900 pr-2"></i>Ver archivos adjuntos</button>
                            <ButtonLoading text='Crear empresa' loading={false} disabled={false} />
                        </div>
                    </div>
                    <Dialog open={openDialog}>
                        <div className='flex justify-between'>
                            <h1 className='text-black font-extrabold p-3'>Documentos cargados</h1>
                            <button onClick={() => setOpenDialog(false)} type='button' className='m-2 '>
                                <i class="fa fa-times hover:text-red-400"></i>
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

export default CreacionEmpresas
