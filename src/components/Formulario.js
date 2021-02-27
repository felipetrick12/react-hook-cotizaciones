import React, { useState } from 'react';
import styled from '@emotion/styled/';
import { getMarca, getPlan, getYear } from '../helpers/getPrecios';


const Campo= styled.div` 
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label= styled.label` 
  flex: 0 0 100px;
  
`;
const Select= styled.select` 
  display:block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  margin-top:2%;
`;
const InputRadio= styled.input` 
  margin: 0 1rem;
`;
const Boton= styled.button` 
    background-color:#26C6DA;
    border:none;
    font-size:16px;
    font-weight:bold;
    padding: 1rem;
    margin-top:2rem;
    transition: background-color 2s ease;
    text-transform:uppercase;
    width:100%;
    color:#FFF;

    &:hover {
        background-color: #2683da;
        cursor:pointer;
    }
`;
const Error= styled.div` 
  background-color:red;
  color:white;
  padding:1rem;
  width:100%;
  text-align:center;
`;

export const Formulario = ( {setGuardarResumen}) => {

    const [datos,setGuardarDatos] =useState({
            marca :'',
            year:'',
            plan: ''
    })
    const [error,setGuardarError] =useState(false);

    const {marca,year,plan}= datos;

    const handleChange = (e)=>{
        setGuardarDatos ({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit= (e)=>{
        e.preventDefault();

        if(marca.trim()==='' || year.trim()==='' || plan.trim()===''){
            setGuardarError(true)
            return;
        }

        let resultado= 2000;

        const diferencia= getYear(year);
        resultado -= (( diferencia * 3) * resultado)/100;

        resultado = getMarca(marca) * resultado;

        resultado = parseFloat(getPlan(plan)*resultado).toFixed(2);
        
        
        setGuardarResumen({
            datos,
            cotizacion:resultado
        })
    }
    

    return (
        <form onSubmit={handleSubmit}>
                {
                    (error && marca.trim()==='' )?<Error>Ingrese marca del vehiculo</Error> :null ||
                    (error && year.trim()==='' )?<Error>Ingrese año del vehiculo</Error> :null ||
                    (error && plan.trim()==='' )?<Error>Ingrese el plan para su cotizacion</Error> :null 
                }
        <Campo>
             <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
        </Campo>

        <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value = {year}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={handleChange}
                /> Básico
        
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={handleChange}
                /> Completo
          </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
    )
}
