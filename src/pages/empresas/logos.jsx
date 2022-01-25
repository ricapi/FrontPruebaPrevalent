import React from 'react';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../hooks/useFormData';

const Logos = () => {
    const { form, formData, updateFormData } = useFormData();
    const submitForm = (e) => {
        e.prenventDefault();
        console.log(formData);
    }



    return <div className='p-10 flex flex-col items-center justify-center w-full'>

        <h1 className='font-bold text-2xl text-gray-900'>Espacio para carga de imágenes</h1>
        <form className='p-5 items-center justify-center' ref={form} onChange={updateFormData} onSubmit={submitForm} action="">
            <label className='p-3 y-2 text-center content-center' htmlFor="" text='nombre' name='nombre'>Nombre
                <input className="bg-gray-200 py-1 block w-full" name='nombre' type="text" placeholder='nombre' />
            </label>
            <label className='p-3 y-2 text-center content-center' htmlFor="">Razón Social
                <input className="bg-gray-200 py-1 block w-full" name='razonSocial' type="text" placeholder='razón social' />
            </label>
            <label className='p-3 y-2 text-center content-center' htmlFor="">Identificación
                <input className="bg-gray-200 py-1 block w-full" name='identificacion' type="text" placeholder='Identificación' />
            </label>
            <label className='p-3 y-2 text-center content-center block' htmlFor="">Imágenes espacio
            <input type="file" name="imagen" id="" /> </label>

            <ButtonLoading text='Confirmar' loading={false} disabled={false} />

        </form>
    </div>;
};

export default Logos;
