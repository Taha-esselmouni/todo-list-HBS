import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Todo from '../components/Todo'
import Message from '../components/Message'
import Loader from '../components/Header'
import { listTodos } from '../actions/todosAction'

const Todos = () => {
  const dispatch = useDispatch()

  const todosList = useSelector((state) => state.todosList)
  const { loading, error, todos } = todosList

  useEffect(() => {
    dispatch(listTodos())
  }, [dispatch])

  return (
    <>
      <h1>My Todos</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {todos.map((todo) => (
            <Col key={todo._id} sm={12} md={6} lg={4} xl={3}>
              <Todo todo={todo} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Todos
