import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ todo }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Card.Text as='h3'>${todo.title}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
