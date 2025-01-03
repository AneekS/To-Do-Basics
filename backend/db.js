const mongoose= require('mongoose')
const { string } = require('zod')
// Todo{
//     title: string,
//     description: string
// }
mongoose.connect("mongodb+srv://aneeksaha2020:UerhYk04dCYJQARS@cluster0.gmqv4.mongodb.net/to-do")
const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}