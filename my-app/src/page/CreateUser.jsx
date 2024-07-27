import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import  Buttons from '../components/Buttons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { color, style } from '@mui/system'

const CreateUser = () => {

 const navigate=useNavigate()
   const [data,setData]=useState({
    id:'',
    username:'',
    fullname:'',
    age:'',
    password:'',
    phone:''
   })
   const onHandleChange=(e)=>{
     const {name,value}=e.target
     setData({
      ...data,
      id:Date.now(),
      [name]:value,

     })
     
      
   
    
    console.log(data);
   }
   const addBtn=()=>{
 
    axios.post('http://localhost:3000/create-data',data).then(res=>console.log(res))
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Şəxs uğurla əlavə edildi",
      showConfirmButton: false,
      timer: 1500
    });
    navigate("/")
   }
  return (
    <div className="container">
       <h1 style={{color:"red",textAlign:"center",margin:"10px"}} >Yeni istifadeci yarat</h1>
    <form className='form-user'>
    <Input 
    Change={onHandleChange}
    name='username'
     label='İstifadəçi adı'
     placeholder='Muslim610'
    />
    <Input 
    Change={onHandleChange}
    name='fullname'
     label='Ad ve soyad'
     placeholder='Ulvi Ibrahimov'
    />
    <Input 
    Change={onHandleChange}
    name='phone'
     label='Telefon'
     placeholder="+994XX-XX-XX"
    />
    <Input 
    Change={onHandleChange}
    name='age'
     label='Yaşınız'
     placeholder='30'
    />
     <Input 
    Change={onHandleChange}
    name='password'
     label='Şifrə'
     placeholder='3fdxsmahf'
    />
    <Buttons content='Elave et' onClick={addBtn}/>
    </form>
    </div>

  )
}

export default CreateUser