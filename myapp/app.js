const express = require('express');
const app = express();
const port = 3000;

//array of student JSON details
const students=require('./DB/studentdb')

app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
    //console.log(id)
    const result=students.find(student=>student.regno==id);
    //check student is available or not, if not return an error message
    //res.send(result);
    if(result)
    {
        res.send(result);
    }
    else
    {
        res.status(404).send("Student is not found")
    }
});

//filter students by gender
app.get('/stu/gender/:gen',(req,res)=>{
    const gender=req.params.gen
    const result=students.filter(student=>student.gender==gender);
    res.send(result);
});

//search by name
app.get('/stu/name/:na',(req,res)=>{
    const name=req.params.na
    const result=students.filter(student=>student.name==name);
    res.send(result);
});

app.get('/',(req,res)=>{
    res.send("Hello Express JS");
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})