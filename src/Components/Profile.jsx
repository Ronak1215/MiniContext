import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if (!user) return <div>Pls Login</div>
  return (
    <div>
      <h1>Profile: {user.userName}</h1>
    </div>
  )
}

export default Profile
