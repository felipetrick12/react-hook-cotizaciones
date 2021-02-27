import React from 'react';
import styled from '@emotion/styled';
import  {primerMayuscula}  from '../helpers/getPrecios';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

export const Resumen = ({datos}) => {

    const {marca,plan,year}=datos;
    return (
        <ContenedorResumen>
        <h2>Resumen de Cotización</h2>
        <ul>
            <li>Marca: { primerMayuscula(marca) } </li>
            <li>Plan: {primerMayuscula(plan)} </li>
            <li>Año del Auto: {year} </li>
        </ul>
    </ContenedorResumen>
    )
}
