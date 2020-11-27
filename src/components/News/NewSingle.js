import React, {Component} from "react"
import {Card, Button, Container, CardGroup, Col, Grid, Row} from "react-bootstrap";

const NewSingle = ({item}) => {
  return (
   

   
        <Col xs={12} md={4} lg={3} className="my-3">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.urlToImage}/>
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text className="d-flex justify-content-left">
      {item.description}
    </Card.Text>
    <Button href={item.url} variant="primary">Full article</Button>
  </Card.Body>
</Card>
</Col>




  )
   
}


export default NewSingle
