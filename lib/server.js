const StudentsController = require('./controllers/StudentsController');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Students Visual Partner-Ship api welcome!"});
});
app.get("/students/getStudent", (request, response)=>{
    const allStudents = StudentsController.getAllStudents();
    response.json(allStudents);
});
app.get("/students/getFilterEmails", (request, response)=>{
    const studentsEmails = StudentsController.getEmailsStudents();
    response.status(200).send(studentsEmails);
})
app.get("/students/getStudentsByCredits", (request, response)=>{
    const studentsCredits = StudentsController.getStudentsFilterByCredits();
    response.status(200).send(studentsCredits);
})


app.listen(port, () => {
    console.log(`Students Visual Partner-Ship API in localhost:${port}`);
});