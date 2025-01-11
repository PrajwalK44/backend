import 'dotenv/config'
import express from "express";

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

let subjectData = [];
let nextId = 1;

//add a subject
app.post("/addSubjects", (req, res) => {
  const { name, marks } = req.body;
  const newSub = { id: nextId++, name, marks };
  subjectData.push(newSub);
  res.status(200).send(newSub);
});

//see how many subjects are there
app.get("/listSubjects", (req, res) => {
  res.status(201).send(subjectData);
});

//get a particular subject
app.get("/listSubjects/:id", (req,res)=>{
    const id = parseInt(req.params.id, 10);
    const subject = subjectData.find((sub)=> sub.id === id);
    if(!subject){
        return res.status(404).send({message:"Subject not found"});
    }
    res.status(200).send(subject);
})
//update subject
app.put("/listSubjects/:id",(req,res)=>{
    const id=parseInt(req.params.id) 
    const subject = subjectData.find((sub)=> sub.id === id);
    if(!subject){
        return res.status(404).send({message:"Subject not found"});
    }

    const {name, marks} = req.body
    subject.name=name;
    subject.marks=marks
    res.status(200).send(subject)

})

//delete subject
app.delete("/listSubjects/:id", (req,res)=>{
    const index = subjectData.findIndex((sub)=> sub.id === parseInt(req.params.id))
    if(index === -1){
        res.status(404).send('Not found')
    }
    subjectData.splice(index, 1)
    res.status(200).send('deleted')
})

app.listen(port, () => {
  console.log(`server is running at port: ${port}...`);
});
