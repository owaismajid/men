export default class TodoController{
    create(req, res, ...args){
        console.log(res)
    }
    getAll(req, res, ...args){
        res.render('index', {todos:[
                {todo: "owais", _id:1},
                {todo: "ahmed", _id:2},
                {todo: "ragha", _id:3},
            ]})
    }
}