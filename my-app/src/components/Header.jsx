import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { SearchIcon,AvatarIcon,MessageIcon,NotificationIcon,UserGroupIcon,InfoIcon} from '../assets/style/svg'

const  Header= () => {
  const [search,setSearch]=useState('')
  const onHandleChange=(e)=>{
      setSearch(e.target.value)
  }
  const searchBtn=(e)=>{
    console.log(search)
    
  }
  return (
    <header>
        <div className="container">
            <div className="header">

        <div className='search'>
            <input onChange={onHandleChange} placeholder='Search' type="text" />
            <span onClick={searchBtn} className='search-icon'>
                <SearchIcon/>
            </span>
        </div>
        <nav>
              <ul>
                <li className='avatar'>
                <AvatarIcon/>
                  <span >
                    Ulvi
                  </span>
                </li>
                <li>
                  <Link to='/'>Home</Link>
                  </li>
                <li>
                  <Link to='/about'>About</Link>
                  </li>

                <li>
                  <Link to='/users'> İstifadəçilər</Link>
                  </li>
                <li className='span-group'>
                  <span><UserGroupIcon/></span>
                  <span><MessageIcon/></span>
                  <span className='notfication'>
                    <NotificationIcon/>
                    <span>8</span>
                  </span>
                </li>
                <li className='info'>
                  <InfoIcon/>
                </li>
              </ul>
        </nav>
        </div>
    
        </div>
    
    </header>
  )
}

export default Header