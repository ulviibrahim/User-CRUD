import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Buttons = ({content,onClick,className,value}) => {
  return (
    <div>
        <Button value={value} className={className} onClick={onClick} variant="contained">{content}</Button>
    </div>
  )
}

export default Buttons