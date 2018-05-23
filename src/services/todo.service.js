import { ODM } from "../modules/database.module";
import TodoSchema from "../schemas/todo.schema";

export default class TodoService {
    constructor() {}
    create(data) {
        return new Promise((resolve, reject)=>{
            TodoSchema.create(data)
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }
}