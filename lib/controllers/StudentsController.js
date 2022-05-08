const StudentsService = require('./../services/StudentsService');

class StudentsController{
    static getAllStudents(){
        return StudentsService.getAllUsers();

    }
    static getEmailsStudents(){
        return StudentsService.getAllEmails();
    }
    static getStudentsFilterByCredits(){
        return StudentsService.getStudentsFilterByCredits();
    }

}
module.exports = StudentsController;