const express=require('express');
const types = require('./types');
const app=express();
//middle-ware
app.use(express.json())
const {body,validationResult}=requir('express-validator')
//body{title:......, description:.....}

const { createTodo }=require(types)


app.post("/todos",(req,res)=>{
const createPayload= req.body;
const parsePayload=createTodo.safeParse(req.body)
if(!parsePayload)
{
    res.status(411).json({msg: " You sent the wrong inputs"})
    return;
}
// else
// put details in mongoDB
})
 
app.get("/todos",(req,res)=>{
    
})

app.put("/completed",function(req,res){

})










app.listen(3500)