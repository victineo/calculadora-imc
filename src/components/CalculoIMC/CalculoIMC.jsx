import React, { useState } from 'react'
import { InputField } from '../InputField/InputField'
import './CalculoIMC.css'

export function CalculoIMC() {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc, setIMC] = useState(null)

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaMetros = parseFloat(altura) / 100;
            const pesoKg = parseFloat(peso);
            const resultadoIMC = (pesoKg / (alturaMetros ** 2)).toFixed(2)
            setIMC(resultadoIMC)
        } else {
            alert('Insira os valores de altura e peso.')
        }
    }
    return (
        <div className='frame-calculadora'>
            <h1>Calculadora de IMC</h1>
            <div className='form-container'>
                <InputField
                    label='Insira sua altura (em cm)'
                    type='number'
                    //placeholder='Altura (cm)'
                    required
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
                <InputField
                    label='Insira seu peso (em Kg)'
                    type='number'
                    //placeholder='Peso (kg)'
                    required
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
            </div>
            
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc && <div>Seu IMC é de: {imc}</div>}
        </div>
    )
}