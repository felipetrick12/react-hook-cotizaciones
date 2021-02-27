import React, { useState } from 'react'
import { Header } from './components/Header';
import styled from '@emotion/styled/';
import { Formulario } from './components/Formulario';
import { Resumen } from './components/Resumen';
import { Resultado } from './components/Resultado';
import { Spinner } from './components/Spinner';

const Contenedor= styled.div`
    max-width:600px;
    margin:0 auto;
`;

const ContenedorFormulario= styled.header` 
  background-color:#FFF;
  padding:3rem;

`;

export function App() {

  const [resumen, setGuardarResumen] = useState({});
  const {datos,cotizacion}=resumen;
  

  return (
    < Contenedor>
          <Header  
          titulo={'cotizador de productos'}
          />
          <ContenedorFormulario>
            <Formulario
            setGuardarResumen={setGuardarResumen}
            />
            <Spinner/>
            {
              datos
              ?(
                <Resumen
                datos={datos}
                />
              ):null
            }

                <Resultado 
                cotizacion={cotizacion}
                />
           
          </ContenedorFormulario>
    </Contenedor>
  );
}

