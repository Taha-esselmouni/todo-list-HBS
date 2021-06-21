import asyncHandler from 'express-async-handler'
import Todos from '../models/todosModel.js'
import { todoValidation } from '../validation/todoValidation.js'



const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todos.find({})
  res.json(todos)
})



const addTodos = asyncHandler(async (req, res) => {
  const { title } = req.body

  //Validate infos
  const { error } = todoValidation(req.body)
  if (error) return res.status(400).json({ message: error.details[0].message })

  const todoExists = await Todos.findOne({ title })

  if (todoExists) {
    res.status(400)
    throw new Error('todo already exists')
  }

  const todo = await Todos.create({
    title,
  })

  if (todo) {
    res.status(201).json({
      _id: todo._id,
      title: todo.title,
    })
  } else {
    res.status(400)
    throw new Error('Invalid todo data')
  }
})

//@desc  remove todo
//@route  POST /todos/add
//@access Public

const deleteTodo = asyncHandler(async (req, res) => {
  await Todos.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      return res.status(404).send({ message: 'Cannot delete the Todo' })
    }
    res.status(201).send('Todo removed')
  })
})

//@desc  update todo
//@route  PUT /todos/add
//@access Public

const UpdateTodo = asyncHandler(async (req, res) => {
  const todo = await Todos.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
    },
    { new: true }
  )

  if (!todo) return res.status(400).send('the todo cannot be update!')

  res.send(todo)
})

export { getTodos, addTodos, deleteTodo, UpdateTodo }
