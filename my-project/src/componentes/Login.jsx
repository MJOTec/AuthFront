import React from 'react';

function Login() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-15 mx-auto flex justify-center items-center h-screen">
        <div className="bg-gray-100 rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
          <div className="relative mb-4 text-left">
            <label htmlFor="nombre" className="leading-7 text-sm text-gray-600">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Introduce tu nombre" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4 text-left">
            <label htmlFor="correo" className="leading-7 text-sm text-gray-600">Correo</label>
            <input type="text" id="correo" name="correo" placeholder="Introduce tu correo" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4 text-left">
            <label htmlFor="idCredencial" className="leading-7 text-sm text-gray-600">IdCredencial</label>
            <input type="text" id="idCredencial" name="idCredencial" placeholder="Introduce tu ID de credencial" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4 text-left">
            <label htmlFor="contraseña" className="leading-7 text-sm text-gray-600">Contraseña</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="Introduce tu contraseña" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Subir</button>
          <p className="text-xs text-gray-500 mt-3">Agregar Usuario</p>
        </div>
      </div>
    </section>
  );
}

export default Login;