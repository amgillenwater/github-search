import React from 'react'
import UserCard from './UserCard'
import Row from 'react-bootstrap/Row'

const UserList = ({ users }) => {
  return (
    <Row>
      {!users
        ? (
          <></>
        )
        : (<Row>
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
        </Row>)}
    </Row>
  )
}

export default UserList
