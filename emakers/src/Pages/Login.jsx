import React from 'react'
import LogoLateral from "../imgs/LogoLateral.png"
import FolderRegistro from '../components/FolderRegistro'


const Login = () => {

    return (
        <div className='loginPage'>
            <div className='loginBranca'>
                <img src={LogoLateral} className='logoLateral' />
                <div className='squareLogin'>
                    <h1 className='titleLogin' >Entre em Sua Conta</h1>
                    <div className='inputLogin'>
                        <p>E-mail</p>
                        <input type="text" placeholder='exemplo@email.com' />
                    </div>
                    <div className='inputLogin'>
                        <p>Senha</p>
                        <input type="text" placeholder='Digite sua senha' />
                    </div>
                    <button type='submit' className='buttonLogin'>Entrar</button>
                </div>
            </div>
            <div>
                <FolderRegistro />
            </div>
        </div>

    )
}

export default Login