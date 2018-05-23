//** API Routes */
import { Router } from 'express'
const r = Router();
r.get('/', (req, res)=>{
    res.send("get api/")
})
r.post('/', (req, res)=>{
    res.send("post api/")
})
r.put('/', (req, res)=>{
    res.send("put api/")
})
r.delete('/', (req, res)=>{
    res.send("delete api/")
})
export { r as ApiRouter }