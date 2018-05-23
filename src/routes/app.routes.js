//** APP Routes */
import { Router } from 'express'
const r = Router();
r.get('/', (req, res)=>{
    res.send("Working on / app")
})

export { r as AppRouter }