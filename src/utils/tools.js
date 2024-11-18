import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'

/**
 * Funciones de encriptación para la contraseña
 * **/
export const createHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}
/**
 * Funciones de generación de datos (Mocks)
 * **/
export const generateUser = () => {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        sex: faker.person.sex(),
        password: createHash('coder123'),
        role: Math.random() > 0.5 ? 'user' : 'admin',
        pets: []
    }
}