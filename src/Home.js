import React from 'react'
import Post from './Post'
import UserInfo from './UserInfo'
function Home(props) {
  return (
    <div className='home'>
      <div>
        <UserInfo />
      </div>
      <Post />
    </div>
  )
}

export default Home
