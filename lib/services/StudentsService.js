const Reader = require('./../utils/Reader');
const students = Reader.readJsonFile('students.json');
class StudentsService{
    static getAllUsers(){
        return students;
    }
    static getAllEmails(){
        let filterStudents = students.filter( (student) => student.haveCertification == true);
        let emails = filterStudents.map(stude => stude.email);
        return emails;  
    }
}
module.exports = StudentsService;