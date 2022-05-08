const ExplorerService = require('./../lib/services/StudentsService');

describe("Pruebas para StudentsService", ()=>{
    test("1. Prueba para obtener todos los studiantes", ()=>{
        const students = ExplorerService.getAllUsers();
        expect(students.length).toBe(51)
    })
})