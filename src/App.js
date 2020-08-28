import React from 'react'
import logo from './logo.svg'
import './App.css'
import Search from './components/Search'
import UserList from './components/UserList'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  return (
    <section>
      <Jumbotron>
        <h1>Search Github</h1>
        <p>This is a simple app that allows you to search for GitHub users.</p>
      </Jumbotron>
      <Container>
        <Row>
          <Search />
        </Row>
      </Container>
    </section>
  )
}

export default App
