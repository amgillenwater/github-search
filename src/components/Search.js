import React, { useState } from 'react'
import axios from 'axios'
import UserList from './UserList'

const Search = () => {
  const [userObject, setUserObject] = useState([])
  const [username, setUsername] = useState('')

  const handleSearch = async (event) => {
    try {
      event.preventDefault()
      const result = await axios
        .get(`https://api.github.com/search/users?q=${username}`)
      setUserObject(result.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <section className='search'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Search by username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </form>
      </section>
      <section>
        <UserList users={userObject.items} />
      </section>
    </>
  )
}

export default Search
