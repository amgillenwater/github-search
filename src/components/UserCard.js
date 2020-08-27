import React, { useState } from 'react'

const UserList = ({ key, name, image }) => {

  return (
    <div>
      <p>{key}</p>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  )
}

export default UserList
