import React from 'react'
import FolderLogo from '../components/FolderLogo'
import InputRegistro from '../components/InputRegistro'
import { useState } from 'react'



const Registro = () => {

    const [textImage, setTextImage] = useState ("Selecionar imagem");

    const imageChoice = (e) => {
        const file = e.target.files[0];
        setTextImage(file.name);
    };


    return (
        <div className='registroPage'>
            <div className='registroBranca'>
                <div className='tituloRegistro'>
                    <h1>Registrar</h1>
                </div>
                <div className='formRegistro'>
                    <form >
                        <div className='inputRegistro'>
                            <InputRegistro nome={'Nome'} placeHolder={'Digite seu nome...'} />
                        </div>
                        <div className='inputRegistro'>
                            <InputRegistro nome={'E-mail'} placeHolder={'exemplo@email.com'} />
                        </div>
                        <div className='inputRegistro'>
                            <InputRegistro type="password" nome={'Senha'} placeHolder={'Digite sua senha...'} />
                        </div>
                        <div className='inputRegistro'>
                            <InputRegistro nome={'Confirmar senha'} placeHolder={'Redigite sua senha...'} />
                        </div>
                        <div className='selectRegistro'>
                            <div>
                                <p>Sexo</p>
                                <select >
                                    <option value=""></option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>
                            <div>
                                <p>Imagem</p>
                                <div>
                                    <label id='inputImageTrue' for="inputImage">{textImage}</label>
                                    <input type="file" accept='image/*' id='inputImage' onChange={imageChoice}/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <button className='butaoRegistrar buttonLogin' type='submit'>Registrar-se</button>
                <a href="/ " className='conta'>Já possui conta?</a>
            </div>
            <div>
                <FolderLogo />
            </div>
        </div>
    )
}

export default Registro