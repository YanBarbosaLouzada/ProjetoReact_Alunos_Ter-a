import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div>
        <button onClick={props.tarefa} className={props.className}> {props.children} </button>
    </div>
  )
}

export default Button