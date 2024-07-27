import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import  Buttons from '../components/Buttons'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { color, style } from '@mui/system'
import { BaseUrl } from '../utils/constanta'

const Update = () => {
const navigate=useNavigate()
    const {id}=useParams()
const [data,setData]=useState({
    
})
useEffect(()=>{
axios(`${BaseUrl}/get-data`).then(res=>res.data.data.map((item)=>{if(item.id==id){setData(item)}}))
},[])
   const onHandleChange=(e)=>{
 const {name,value}=e.target
 setData({
    ...data,
    [name]:value
 })
   }
const updateBtn=(userid)=>{
    axios.put(`${BaseUrl}/update-data${userid}`,data).then(res=>console.log(res))
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Şəxs uğurla yenilendi",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/")
}
  return (
    <div>
         <h1 style={{color:"red",textAlign:"center",margin:"10px"}} >İstifadəçini dəyiş</h1>
    <form className='form-user'>
    <Input 
    Change={onHandleChange}
    name='username'
     label='İstifadəçi adı'
     placeholder='Muslim610'
     value={data.username}
    />
    <Input 
    Change={onHandleChange}
    name='fullname'
     label='Ad ve soyad'
     placeholder='Ulvi Ibrahimov'
     value={data.fullname}
    />
    <Input 
    Change={onHandleChange}
    name='phone'
     label='Telefon'
     placeholder="+994XX-XX-XX"
     value={data.phone}
    />
    <Input 
    Change={onHandleChange}
    name='age'
     label='Yaşınız'
     placeholder='30'
     value={data.age}
    />
     <Input 
    Change={onHandleChange}
    name='password'
     label='Şifrə'
     placeholder='3fdxsmahf'
     value={data.password}
    />
    <Buttons onClick={()=>updateBtn(data.id)} content='Yenile' />
    </form>
    </div>
  )
}

export default Update