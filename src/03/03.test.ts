import {studentType} from "../02/02";
import { addSkill, livesIn, makeStudentActive} from "./03";

let student : studentType;

beforeEach(()=>{
    student={
        id: 1,
        name: "Dimich",
        age: 32,
        isActive : false,
        address:{
            streetTitle: "Surganova 2",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            }
        },
        technologies: [
            {
                id:1,
                title: "HTML"
            }, {
                id:2,
                title: "CSS"
            }, {
                id:3,
                title: "HTML"
            },
        ]
    }
})

test("new tech skill is added", ()=>{
    addSkill(student, "Angular")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("Angular")
    expect(student.technologies[3].id).toBeDefined()
})

test("make student active", ()=>{
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)

})
test("check that user lives in: ", ()=>{
   const result1 =  livesIn(student, "Moskow")
   const result2 =  livesIn(student, "Minsk")

    expect(result1).toBe(false)
    expect(result2).toBe(true)

})