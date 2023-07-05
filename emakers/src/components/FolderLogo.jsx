import React from 'react'
import LogoEmakers from "../imgs/emakerslogo.png"


const FolderLogo = () => {
  return (
    <div className='squareLogo'>
        <img src={LogoEmakers} className='logoEmakers' />
        <div className='textSlogan'>
        <h2>Venha fazer parte da </h2> <br />
        <h2 id='redeSocialText'>maior rede social também!</h2>
        </div>
    </div>
  )
}

export default FolderLogo