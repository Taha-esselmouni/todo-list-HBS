import express from 'express'
const router = express.Router()
import { authUser, registerUser } from '../controllers/userController.js'

router.post('/login', authUser)
router.route('/register').post(registerUser)

export default router
