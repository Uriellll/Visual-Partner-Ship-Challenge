const ExplorerService = require('./../lib/services/StudentsService');

describe("Pruebas para StudentsService", ()=>{
    test("1. Prueba para obtener todos los studiantes", ()=>{
        const students = ExplorerService.getAllUsers();
        expect(students.length).toBe(51)
    })
    test("2. Obteniendo todos los emails de los estudiantes que tiene certificacion", ()=>{
        const studentsEmails = ExplorerService.getAllEmails();
        expect(studentsEmails.length).toBe(29)
    })
    test("3. Obteniendo todos los estudiantes donde sus créditos son mayor a 500",()=>{
        const studentsBycredits = ExplorerService.getStudentsFilterByCredits();
        expect(studentsBycredits.length).toBe(27)
    })
})