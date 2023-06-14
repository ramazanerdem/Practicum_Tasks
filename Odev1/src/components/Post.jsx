import axios from 'axios'
import { useEffect, useState } from 'react'

const Post = ({ post }) => {
  return (
    // api den gelen ilgili post u yazdırdığım kısım.
    <div className="post">
      <p>{post.title}</p>
    </div>
  )
}
export default Post
