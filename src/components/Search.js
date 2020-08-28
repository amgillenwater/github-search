import React, { useState } from 'react'
import axios from 'axios'
import UserList from './UserList'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { Form, FormControl } from 'react-bootstrap'

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
      <Col s={2}>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
          </InputGroup.Prepend>
          <Form onSubmit={handleSearch}>
            <FormControl
              placeholder='username'
              aria-label='username'
              aria-describedby='basic-addon1'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form>
        </InputGroup>
        <UserList users={userObject.items} />

      </Col>
    </>
  )
}

export default Search
