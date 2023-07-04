import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';


const Registro = () => {
  return (
    <div className='registroDiv'>
        <h1>Registrar</h1>
        <form >
            <h2>Nome</h2>
            <input type="text" placeholder='Digite seu nome...' />
            <h2>E-mail</h2>
            <input type="text" placeholder='exemplo@email.com'/>
            <h2>Senha</h2>
            <input type="text" placeholder='Digite sua senha...'/>
            <h2>Confirmar senha</h2>
            <input type="text" placeholder='Redigite sua senha...'/>
            <br />
            <h2>Sexo</h2>
            <select >
                <option value=""></option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
            </select>
        </form>
            <button>Registrar-se</button>
            <br />
            <a href="" className='conta'>Já possui conta?</a>   
        <div>
                
        </div> 
    </div>
  )
}

export default Registro