import mongoose from "mongoose";

var todoSchema = new mongoose.Schema({
    todo: String,
    priority: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    date:{
        created_at: {
            type: Date,
            default: Date.now()
        },
        finshed_at:{
            type: Date
        }
    }
})
const TodoSchema = mongoose.model('Todo', todoSchema)
export default TodoSchema
