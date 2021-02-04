import {studentType} from "../02/02";
import {CityType, governmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b:number) =>{
    return a + b
}
export function sum2 (a: number, b:number){
    return a + b
}

export const addSkill = (student: studentType, skill: string) =>{
    student.technologies.push({
        id:new Date().getTime(),
        title: skill
    })
}
export function addSkill2 (student: studentType, skill: string) {
    student.technologies.push({
        id:new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: studentType) {
    student.isActive = true
}

export function livesIn(student: studentType, city:string) {
   return student.address.city.title===city
}

export function addMoneyToBudget1(building: governmentBuildingsType[], type:"HOSPITAL" | "FIRE-STATION", increaseBudged: number  ) {
    return building.map(b =>b.type===type ? b.budget += increaseBudged : 0)
}

export const addMoneyToBudget = (building: governmentBuildingsType,  budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType) =>{
    house.repaired= true
}

export const fireStaff = (building: governmentBuildingsType, staffToFire: number) =>{
    building.staffCount -= staffToFire
}

export const hireStaff = (building: governmentBuildingsType, staffToHire: number) => {
    building.staffCount +=staffToHire
}

export function createMessage(city: CityType) {
        return `Hello ${city.title} citizens!. I want you to be happy all ${city.citizenNumber} people`
}