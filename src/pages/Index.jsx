import React from 'react';
import { NavLink } from 'react-router-dom';


const Index = () => {
    return (
        <div class="p-3 bg-gray-100  content-center ">
            <div className=" p-5">
                <h1 className=" content-center text-center font-extrabold text-xl
                ">
                    Página de inicio
                </h1>
            </div>
            <div className="sm:w-full lg:grid md:grid grid-cols-2  gap-2 content-center justify-between">

                <div class=" rounded overflow-hidden shadow-lg bg-gray-50  sm:text-center content-center justify-around m-2">
                    <NavLink to="/empresas">

                        {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                        <div class="px-6 py-4 ">
                            <div class="font-bold text-xl mb-2 text-indigo-500">Solicitudes de creación de empresas</div>
                            <i class="fa fa-industry text-blue-600"></i>
                            <p class="text-gray-700 text-base mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Crear empresas</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Listar empresas</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Ver formulario</span>
                        </div>
                    </NavLink>
                </div>

                <div class="max-w-none rounded overflow-hidden shadow-lg bg-gray-50 m-2 ">
                    {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-indigo-500">Indicadores</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                    </div>
                </div>
                <div class="max-w-none rounded overflow-hidden shadow-lg bg-gray-50 m-2">
                    {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-indigo-500">Inscripción de empleados en empresas</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                    </div>
                </div>
                <div class="max-w-nose rounded overflow-hidden shadow-lg bg-gray-50 m-2">
                    {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-indigo-500" >Gestión de usuarios</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
