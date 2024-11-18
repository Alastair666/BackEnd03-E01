import MockService from '../services/mock.service.js'

export const mockingUsers = async(req,res)=>{
    const num = req.params.num
    const result = await MockService.generateMockingUsers(num)
    if (result)
        res.status(200).json({ result: "success", payload: result })
    else
        res.status(400).json({ result: "error", errors: "Can't get mock users" })
}