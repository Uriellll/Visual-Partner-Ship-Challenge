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
    static getStudentsFilterByCredits(){
        let studentCredits = students.filter((student)=> student.credits >500);
        return studentCredits;
    }
}
module.exports = StudentsService;