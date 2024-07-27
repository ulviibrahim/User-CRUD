import React from 'react'

const Input = ({label,name,placeholder,Change,value}) => {
  return (
    <div>
   
        <label htmlFor={name}>{label}</label>
      <input value={value} id={name} name={name}onChange={Change} className='input' type="text" placeholder={placeholder}/>
    

  </div>
  )
}

export default Input