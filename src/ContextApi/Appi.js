/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'
import LoginContext from './LoginContext'
function Appi() {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, showProfile, setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
    </>
  )
}

export default Appi