import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { BaseUrl } from '../utils/constanta'
import { useNavigate } from 'react-router-dom'
import Buttons from '../components/Buttons'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss';


const ProductList = () => {
  const navigate= useNavigate()
    const [data, setData]=useState([])

    const [del,setDelete]=useState(false)

    // Get request completed
    useEffect(()=>{
        axios(`${BaseUrl}/get-data`).then(res=>setData(res.data.data))
    },[del])
    // const openCreateBtn=()=>{
    //   navigate('/create/')
    // }

    // Delete request completed
    const deleteUser=(id)=>{
    

      Swal.fire({
        title: "Əminsiniz?",
        text: "Bu istifadəçini siləcəksiniz",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Bəli, bu şəxsi sil",
      }).then((result) => {
        if (result.isConfirmed) {
        axios.delete(`${BaseUrl}/delete-data/:${id}`).then(res=>setDelete(!del))

          Swal.fire({
            title: "Silindi!",
            text: "Bu şəxsi sildiniz.",
            icon: "success"
          });
        }
      });



      
    }
    function upDateUser(id){
         navigate('/create-user/'+id)
        console.log("salam");
      
    }
  return (
    <div className='container'>

      <Buttons  onClick={()=>navigate('/create/')} className='create-btn' content='Yeni İstifadəçi yarat'/>

   <table id="customers">
        <tr>
    <th>№</th>
    <th>Istifadeci</th>
    <th>Ad Soyad</th>
    <th>Yas</th>
    <th>Telefon</th>
    <th style={{width:"300px"}} >Dəyiş</th>
  </tr>
  <tbody>
         {
          data.map((item,index)=>{
       return( 
          <tr key={item.id}>
            <td>{index+1}</td>
          <td>{item.username}</td>
          <td>{item.fullname}</td>
          <td>{item.age}</td>
          <td>{item.phone}</td>
          <td className='btn-group'>
            <Buttons onClick={()=>navigate(`/info-user/${item.id}`)}  content='info' className='see'/>
           <Buttons onClick={()=>deleteUser(item.id)} className='delete' content='sil'/>
           <Buttons onClick={()=>navigate(`/update-user/${item.id}`)} className='update' content='dəyiş'/>
          </td>
        </tr>
       )
         })
        } 
  </tbody>
  </table>
    </div>
  )
}

export default ProductList