import React from 'react'
import { useNavigate } from 'react-router-dom';

function FolderRegistro() {

    const navigate = useNavigate();

    function handleRegistro(){
        navigate('/registro')
    }

    return (
        <div className='folderRegistro'>
            <div className='escritaFolder'>
                <div className='titleFolder'>
                    <h1>Novo Aqui?</h1>
                </div>
                <div className='textFolder'>
                    <h2 id='textoFolder'>Registre-se e venha fazer parte da maior rede social!</h2>
                </div>
                <div className='buttonFolder'>
                    <button className='buttonLogin2 buttonLogin' onClick={handleRegistro}>Registrar-se</button>
                </div>
            </div>
        </div>
    );
}

export default FolderRegistro