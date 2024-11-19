import { Router } from 'express'
import { mockingUsers, mockingPets, generateData } from '../controllers/mocks.controller.js'

const router = Router()

/** GET 
 * Endpoint encargado de generar 50 usuarios
 * **/
router.get('/mockingusers/:num', mockingUsers)
/** GET 
 * Endpoint encargado de generar 100 mascotas
 * **/
router.get('/mockingpets/:num', mockingPets)
/** POST 
 * Endpoint encargado de generar los datos en BD
 * **/
router.post('/generateData/:users/:pets', generateData)

export default router