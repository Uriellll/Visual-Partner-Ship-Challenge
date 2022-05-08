const StudentsService = require('./../services/StudentsService');

class StudentsController{
    static getAllStudents(){
        return StudentsService.getAllUsers();

    }

}
module.exports = StudentsController;