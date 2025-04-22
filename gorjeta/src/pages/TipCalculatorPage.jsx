import React, {useState} from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import ResultDisplay from "../components/ResultDisplay";
import style from "./TipCalculatorPage.module.css"


function TipCalculatorPage() {

    const [valorConta, setValorConta] = useState("");
    const [percentualGorjeta, setPercentualGorjeta] = useState("");
    const [resultado, setResultado] = useState(null);

    const calcularGorjeta = () => {
        const valor = parseFloat(valorConta);
        const valorGorjeta = (valor * parseFloat(percentualGorjeta))/100;
        const total = valor + valorGorjeta;
        setResultado({gorjeta: valorGorjeta, total: total});
    }

  return (
    <>
        <main className={style.container}>
            <h1>Calculadora de Gorjeta</h1>
            <InputField label="Valor da Conta:"
            value={valorConta}
            onChange={(e) => setValorConta(e.target.value)}
            />
            <InputField label="Porcentagem da Gorjeta (%):"
            value={percentualGorjeta}
            onChange={(e) => setPercentualGorjeta(e.target.value)}
            />
            <Button text="Calcular" onClick={calcularGorjeta}/>
            {
                resultado && (
                    <ResultDisplay gorjeta={resultado.gorjeta} total={resultado.total}/>
                )
            }
        </main>
        
    </>
  )
}

export default TipCalculatorPage;
