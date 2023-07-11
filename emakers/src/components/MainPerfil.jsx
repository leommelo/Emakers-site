import React from 'react'
import FotoPerfil from '../imgs/FotoPerfill.png'
import FotoUm from '../imgs/Foto1.png'
import FotoDois from '../imgs/Foto2.png'
import FotoTres from '../imgs/Foto3.png'

const MainPerfil = () => {
    
  return (
    <div className='mainPerfil'>
        <div className='perfilLayout'>
        <img src={FotoPerfil} className='fotoPerfil'/>
        <div className='dadosPerfil'>
            <h1 id='nomePerfil'>Leonardo Marques de Melo, 20</h1>
            <div className='bioPerfil'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at debitis officiis a eum unde, vitae illo assumenda, rem enim quod! Facere delectus eligendi eveniet, repellat aperiam amet voluptatem atque?</p>
            </div>
        </div>
        </div>
        <div className='imagesPerfil'>
            <img src={FotoUm} className='imgPerfil' />
            <img src={FotoDois} className='imgPerfil' />
            <img src={FotoTres} className='imgPerfil' />
        </div>
    </div>
  )
}

export default MainPerfil