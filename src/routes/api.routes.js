//** API Routes */
import { Router } from 'express'
import TodoService from '../services/todo.service';
import TodoController from '../controllers/todo.controller';
const r = Router();
r.get('/', (req, res)=>{
    res.send("get api/")
})

r.get('/test', (req, res)=>new TodoController().getAll(req, res))

r.put('/', (req, res)=>{
    res.send("put api/")
})
r.delete('/', (req, res)=>{
    res.send("delete api/")
})
export { r as ApiRouter }

// new TodoService().create({
//     todo: 'test to do',
//     priority: 2
// })
// .then(result=> res.send("OK"))
// .catch(error=> res.send(error))