import React from 'react'
import Post from './Post'
import UserInfo from './UserInfo'
function Home(props) {
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ))
  return (
    <div className='home'>
      {content}

      <div>
        <UserInfo />
      </div>
      <Post />
    </div>
  )
}

export default Home
