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
                        <i class="fa fa-home text-green-600 px-5"></i>
                    </Link>
                </button>
            </h2>
            <div class="max-w-sm rounded overflow-hidden shadow-lg content-center">
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
                            data && data.Creaciones.map((ce) => {
                                return (
                                    <tr key={ce._id}>
                                        <td onClick={() => { <Formulario /> }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.nombre}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.razonSocial}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.nit}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.identificacion}</td>
                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.numEmpleados}</td>

                                        <td onClick={() => { setOpenForm(true) }} className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{ce.logo}</td>
                                        <td>
                                            <Link to={`/Formulario/${ce._id}`}>
                                                <i className='fa fa-home text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                                            </Link>

                                        </td>


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
            <Dialog className='sm:w-full sm:h-full lg:h-full lg:w-full' open={openForm}>
                <div>
                    <div className='flex justify-between'>
                        <h1 className='text-black font-extrabold p-3'>Formulario</h1>
                        <button onClick={() => setOpenForm(false)} type='button' className='m-2 '>
                            <i class="fa fa-times hover:text-red-400 "></i>
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


// const Formulario = () => {
//     const { form, formData, updateFormData } = useFormData();
//     const { _id } = useParams();

//     const { 
//         data: queryData,
//         error: queryError,
//         loading: queryLoading, } = useQuery(GET_EMPRESA, {
//             variables: { _id },
//         });


//     const [crearEmpresa, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(CREAR_EMPRESA);

//     const [listaEmpresas, setListaEmpresas] = useState({});
//     const [openDialog, setOpenDialog] = useState(false);

//     const submitForm = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         crearEmpresa({
//             // variables: { nombre: data.value, razonSocial: data.value },
//             variables: { _id, ...formData },
//         });
//     };

//     // useEffect(() => {
//     //     console.log(data);
//     //     if (data) {
//     //         const le = {};
//     //         data.Creaciones.forEach((elemento) => {
//     //             le[elemento._id] = elemento.nombre;
//     //         });
//     //         setListaEmpresas(le);
//     //     }
//     // }, [data]);

//     useEffect(() => {
//         console.log('data mutation', mutationData);
//     });
//     // let input;

//     //if (loading) return <div>...loading</div>

//     return (
//         <div >
//             <div className="p-5 text-center justify-between sm:w-full lg:w-full lg:h-full lg:grid grid-cols-2 ">
//                 {/* onChange={updateFormData} onSubmit={submitForm} */}
//                 <form className=' sm:w-full sm:h-full lg:w-full lg:h-full' ref={form} onChange={updateFormData} onSubmit={submitForm} action="">
//                     <h2 className="p-5 text-lg text-gray-900">Aprobación de empresas</h2>
//                     <div className='p-5 flex flex-wrap  border border-solid border-gray-200 content-center w-full'>

//                         <div className='lg:grid grid-cols-1 w-full p-5 m-2'>
//                             <label className='mr-2' htmlFor="">Logo</label>

//                             <button type='button' className='bg-gray-200 rounded font-bold px-5 py-2 shadow-md m-2 w-full'>
//                                 <i class="fa fa-check-circle text-green-500 pr-2"></i>
//                                 Aprobar Empresa</button>
//                             <button type='button' className='bg-gray-200 rounded font-bold px-5 py-2 shadow-md m-2 w-full'>
//                                 <i class="fa fa-times-circle text-red-600 pr-2"></i>Rechazar Empresa</button>
//                         </div>
//                         <div className="p-5 flex-wrap lg:grid  grid-cols-2 gap-2 border border-solid border-transparent content-center w-full justify-between">
//                             <Input
//                                 label='Nombre de la empresa:'
//                                 type='text'
//                                 name='nombre'
//                                 //defaultValue={queryData.Empresa.nombre}
//                                 required={true} />
//                             <label className="p-3 m-2 content-center text-center" htmlFor="">Nombre de la empresa
//                                 <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="nombre" name="nombre" />
//                             </label>
//                             <label className="p-3 m-2 text-center" htmlFor="">Razón social
//                                 <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Razón social" name="razonSocial" />
//                             </label><br />
//                             <label className="p-3 m-2 text-center " htmlFor="">Tipo de identificación
//                                 <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Tipo de identificación" name="nit" />
//                             </label>
//                             <label className="p-3 m-2 text-center" htmlFor="">Identificación
//                                 <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="Identificación" name="identificacion" />
//                             </label><br />
//                             <label className="p-3 m-2 text-center" htmlFor=""># de empleados
//                                 <input className="bg-gray-200 py-1 block w-full" type="text" placeholder="# Empleados" name="numEmpleados" />
//                             </label>
//                             <button onClick={() => setOpenDialog(true)} type="button" className="bg-gray-400 text-white font-bold px-3 py-2  hover:bg-gray-400 shadow-md rounded m-5">
//                                 <i class="fa fa-paperclip text-indigo-900 pr-2"></i>Ver archivos adjuntos</button>
//                             <ButtonLoading text='Crear empresa' loading={false} disabled={false} />
//                         </div>
//                     </div>

//                     <Dialog className="w-screen " open={openDialog}>
//                         <div className='flex justify-between lg:w-full lg:h-full'>
//                             <h1 className='text-black font-extrabold p-3'>Documentos cargados</h1>
//                             <button onClick={() => setOpenDialog(false)} type='button' className='m-2 '>
//                                 <i class="fa fa-times hover:text-red-400"></i>
//                             </button>
//                         </div>
//                         <div>
//                             <DialogContent dividers>
//                                 Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//                                 dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//                                 consectetur ac, vestibulum at eros.
//                             </DialogContent>

//                         </div>
//                     </Dialog>

//                 </form>
//             </div>
//         </div>
//     )
// }

const pdfs = () => {
    return
}

export default CreacionEmpresas
