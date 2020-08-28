import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const UserList = ({ key, name, image }) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>left</Col>
          <Col xs={1}>
            <img src={image} alt={name}/>
          </Col>
        </Row>
        <Row>
          <Col>left</Col>
          <Col>right</Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserList
