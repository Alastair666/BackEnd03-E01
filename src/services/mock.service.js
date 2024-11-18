import { generateUser } from '../utils/tools.js'

export default class MockService {
    static async generateMockingUsers(no = 50) {
        let users = []
        for (let i = 0; i < no; i++) {
            users.push(generateUser())
        }
        return users
    }
}