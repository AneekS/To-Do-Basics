const express=require('express')
const app=express();
//middle-ware
app.use(express.json())
const {body,validationResult}=requir('express-validator')
//body{title:......, description:.....}
app.post("/todos",(req,res)=>{

})
 
app.get("/todos",(req,res)=>{
    
})

app.put("/completed",function(req,res){

})










app.listen(3500)