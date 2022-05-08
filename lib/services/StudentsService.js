const Reader = require('./../utils/Reader');
const students = Reader.readJsonFile('students.json');
class StudentsService{
    static getAllUsers(){
        return students;
    }
}
module.exports = StudentsService;