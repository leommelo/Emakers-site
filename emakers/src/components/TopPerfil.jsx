import React from 'react'
import LogoLateralBranca from '../imgs/LogoLateralBranca.png'

const TopPerfil = () => {
  return (
    <div className='topPerfil'>
        <img src={LogoLateralBranca} className='logoLateralBranca' />
        <div className='menuPerfil'>
            <button className='buttonsPerfil buttonsP' id='butaoPesquisa'></button>
            <button className='buttonsPerfil buttonsP' id='butaoAmigos'></button>
            <button className='buttonsPerfil buttonsP' id='butaoEu'></button>
            <button className='buttonsPerfil' id='butaoCompacto'></button>
        </div>
    </div>
  )
}

export default TopPerfil