import axios from 'axios'
import { useEffect, useState } from 'react'

const User = ({ user, setId }) => {
  return (
    <div>
      {/* User apiden ilk üç id li kullanıcıyı çekebilmek için her butona tıklandığında ilgili id deki kullanıcıyı çekmesi için gerekli event i butonlara tanımladım */}
      <h3>Select User</h3>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>

      {/* User apiden çektiğim verileri kart şeklinde ekrana yazdırdığım kısım */}
      <div className="container">
        <h2>{user.name}</h2>
        <h3>@{user.username}</h3>
        <h4>{user.email}</h4>
      </div>
    </div>
  )
}
export default User
