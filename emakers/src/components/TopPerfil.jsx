import React from 'react'
import LogoLateralBranca from '../imgs/LogoLateralBranca.png'

const TopPerfil = () => {
  return (
    <div className='topPerfil'>
        <img src={LogoLateralBranca} className='logoLateralBranca' />
        <div className='menuPerfil'>
            <button className='buttonsPerfil' id='butaoPesquisa'></button>
            <button className='buttonsPerfil' id='butaoAmigos'></button>
            <button className='buttonsPerfil' id='butaoEu'></button>
        </div>
    </div>
  )
}

export default TopPerfil