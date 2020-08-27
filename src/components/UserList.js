import React, { useState } from 'react'
import UserCard from './UserCard'

const UserList = ({ users }) => {
  return (
    <div>
      {!users
        ? (
          <h1>No results found</h1>
        )
        : (<div>
          {users.map((item, idx) => {
            return (
              <UserCard
                key={users[idx].id}
                name={users[idx].login}
                image={users[idx].avatar_url}
              />
            )
          }
          )}
           </div>)}
    </div>
  )
}

export default UserList
