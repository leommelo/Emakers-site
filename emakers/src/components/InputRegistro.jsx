import React from 'react'

const InputRegistro = ({nome, placeHolder}) => {
  return (
    <div>
        <p>{nome}</p>
        <input type="text" placeholder={placeHolder} />
    </div>
  )
}

export default InputRegistro