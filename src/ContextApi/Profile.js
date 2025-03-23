/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import LoginContext from './LoginContext'

function Profile() {
  const {username} = useContext(LoginContext);
  return (
    <>
    <h2>Profile</h2>
<h2>UserName: {username} </h2>

    </>
  )
}

export default Profile