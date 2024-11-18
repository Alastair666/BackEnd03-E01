import { Router } from 'express'
import { mockingUsers } from '../controllers/mocks.controller.js'

const router = Router()

/** GET 
 * Endpoint encargado de generar 50 usuarios
 * **/
router.get('/mockingusers/:num', mockingUsers)

//router.post('/generateData')

export default router