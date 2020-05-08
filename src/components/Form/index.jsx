import React, { useState } from 'react';
import {FormInput, FormButtom, FormContainer, FormResult} from './Style'

function Form() {
  
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState();

  function HandleConvert(e){
    let binary= true
    e.preventDefault();
    if(number.length > 8){
      setResult("O numero maximo de digitos é 8.")
    }else{
      number.toString();
      for(var i = 0 ; i < number.length; i++){
        if(number.charAt(i) !== '1' && number.charAt(i) !== '0'){
          console.log(number.charAt(i));
          binary = false;
        }
      }
      console.log(binary);
      if(binary === true){
        console.log("passei no if")
        setResult(parseInt(number, 2).toString(10));
      }else{
        setResult("Numero invalido coloque somente numeros 0 ou 1.")
      }
    }
    
  }
 
  return (
    <>
      <FormContainer >
        <h1>Escreva o numero binario a baixo</h1>
        <FormInput value = {number} onChange = {e => setNumber(e.target.value)} type = "number" />
        <FormButtom onClick = {HandleConvert}>Converter</FormButtom>
        <FormResult>{result}</FormResult>
      </FormContainer>
    </>
  );

}

export default Form;