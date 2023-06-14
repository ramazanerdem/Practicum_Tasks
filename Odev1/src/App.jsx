import { useEffect, useState } from 'react'
import axios from 'axios'
//style
import './App.css'
//component
import Post from './components/Post'
import User from './components/User'

function App() {
  const [id, setId] = useState(1)

  // Get User - kullanıcıları api den aldığım kısım
  const [user, setUser] = useState({})
  const fetchUser = async () => {
    const res = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    setUser(res.data)
  }

  // Get Post - postları api den aldığım kısım
  const [post, setPost] = useState('')
  const fetchPost = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    )
    setPost(res.data[0])
  }

  // butonlara tıklandığında her değişen id bilgisi için ilgili kullanıcı bilgisi ve postun gelmesini sağlayan callback fonksiyonu.
  useEffect(() => {
    fetchUser()
    fetchPost()
  }, [id])

  ////// KONSOLA YAZDIRDIĞIMIZ SON KISIM //////
  let sum = { user, post }
  console.log(sum)
  /////////////////////////////////////////////////
  return (
    <div className="App">
      {/* state olarak tuttuğum verileri, component lere prop olarak gönderdim. */}
      <User user={user} setId={setId} />
      <Post post={post} id={id} />
    </div>
  )
}

export default App
