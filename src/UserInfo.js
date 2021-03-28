import React from 'react'
import Userimage from './userimage.png'
import './UserInfo.css'
function Home() {
  return (
    <div className='user-info'>
      <div className='user-text'>
        <h1>Bekir Yörük</h1>
        <h1>İzmir Yüksek Teknoloji Enstitüsü</h1>
        <h3>bekiryoruk1@gmail.com</h3>
      </div>
      <div>
        <img className='userpng' src={Userimage} alt='userimage'></img>
      </div>
    </div>
  )
}

export default Home
