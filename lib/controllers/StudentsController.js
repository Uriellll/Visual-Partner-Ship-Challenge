const StudentsService = require('./../services/StudentsService');

class StudentsController{
    static getAllStudents(){
        return StudentsService.getAllUsers();

    }
    static getEmailsStudents(){
        return StudentsService.getAllEmails();
    }

}
module.exports = StudentsController;