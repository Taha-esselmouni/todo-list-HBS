import express from 'express'
const router = express.Router()
import {
  getTodos,
  addTodos,
  deleteTodo,
  UpdateTodo,
} from '../controllers/todoController.js'

router.route('/all').get(getTodos)
router.route('/add').post(addTodos)
router.route('/delete/:id').delete(deleteTodo)
router.route('/update/:id').put(UpdateTodo)

export default router
