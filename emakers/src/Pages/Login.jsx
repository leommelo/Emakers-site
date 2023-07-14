import React from 'react'
import LogoLateral from "../imgs/LogoLateral.png"
import FolderRegistro from '../components/FolderRegistro'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Login = () => {

    const navigate = useNavigate();
    
    function handleRegistro(){
        navigate('/perfil')
    }

    const [password, setPassword] = useState ('password');
    const [icon, setIcon] = useState ('icon');

    const showHide = () => {
        if(password === 'password'){
            setPassword('text');
            setIcon('iconHide');
        }else{
            setPassword('password');
            setIcon('icon');
        }
    };

    

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
                        <section>
                        <input id='pass' type={password} placeholder='Digite sua senha' />
                        <div id={icon} onClick={showHide}></div>
                        </section>
                    </div>
                    <button type='submit' className='buttonLogin' onClick={handleRegistro}>Entrar</button>
                </div>
            </div>
            <div>
                <FolderRegistro />
            </div>
        </div>

    )
}

export default Login