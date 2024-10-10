import React, { useState } from 'react'
import { InputField } from '../InputField/InputField'
import './CalculoIMC.css'

export function CalculoIMC() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        if (altura && peso) {
            const alturaMetros = parseFloat(altura) / 100;
            const pesoKg = parseFloat(peso);
            const resultadoIMC = (pesoKg / (alturaMetros ** 2)).toFixed(2);
            setIMC(resultadoIMC);
            setClassificacao(classificacaoIMC(resultadoIMC));
        } else {
            alert('Insira os valores de altura e peso.')
        }
    }

    const classificacaoIMC = (valorIMC) => {
        if (valorIMC >= 18.5 && valorIMC <= 24.9) {
            return 'normal'
        } else if (valorIMC >= 25.0 && valorIMC <= 29.9) {
            return 'acima do peso'
        } else if (valorIMC >= 30.0 && valorIMC <= 34.9) {
            return 'obesidade grau I'
        } else if (valorIMC >= 35.0 && valorIMC <= 39.9) {
            return 'obesidade grau II'
        } else if (valorIMC >= 40.0) {
            return 'obesidade grau III'
        } else {
            return 'abaixo do peso'
        }
    }

    return (
        <div className='frame-calculadora'>
            <h1>Calculadora de IMC</h1>
            <div className='form-container'>
                <InputField
                    label='Insira sua altura (em cm)'
                    type='number'
                    required
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />
                <InputField
                    label='Insira seu peso (em Kg)'
                    type='number'
                    required
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
            </div>
            
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc && (
                <div>
                    <p>Seu IMC é de: <strong>{imc}</strong></p>
                    <p>Classificação: <strong>{classificacao}</strong></p>
                </div>
            )}
        </div>
    )
}