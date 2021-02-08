import {studentType} from "../02/02";
import {CityType, governmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b
}

export function sum2(a: number, b: number) {
    return a + b
}

export const addSkill = (student: studentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function addSkill2(student: studentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(student: studentType) {
    student.isActive = true
}

export function livesIn(student: studentType, city: string) {
    return student.address.city.title === city
}

export function addMoneyToBudget1(building: governmentBuildingsType[], type: "HOSPITAL" | "FIRE-STATION", increaseBudged: number) {
    return building.map(b => b.type === type ? b.budget += increaseBudged : 0)
}

export const addMoneyToBudget = (building: governmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true
}

export const fireStaff = (building: governmentBuildingsType, staffToFire: number) => {
    building.staffCount -= staffToFire
}

export const hireStaff = (building: governmentBuildingsType, staffToHire: number) => {
    building.staffCount += staffToHire
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens!. I want you to be happy all ${city.citizenNumber} people`
}

export function group(word: string) {
    interface KeyPair {
        key: string;
        value: number;
    }

    let letter = "";
    let counter = 0;
    let arr = []

    for (let c of word) {
        if (letter) {
            if (letter === c) {
                counter += 1;
            } else {
                let kv1: KeyPair = {key: letter, value: counter};
                arr.push(kv1)
                counter = 1;
                letter = c;
            }
        } else {
            letter = c;
            counter = 1
        }
    }
    let kv1: KeyPair = {key: letter, value: counter};
    arr.push(kv1)
    return arr

}

export function group2(word: string) {
    let w = word.split("")
    let counter = 0;
    let arr = []

    for (let x = 0; x < word.length; x++) {
        if (x === 0) {
            counter++;
        } else if (w[x] === w[x - 1]) {
            counter++
        } else {
            arr.push(counter)
            counter = 1
        }

    }
    arr.push(counter)
    return arr
}


type keyValuePair = {
    key: string,
    value: number
}

export function group3(word: string): keyValuePair[] {
    let index = 0;
    let arr: keyValuePair[] = []

    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            arr[index] = {key: word[i], value: 1}
        } else {
            if (word[i] === word[i - 1]) {
                arr[index].value++
            } else {
                index++
                arr[index] = {key: word[i], value: 1}
            }
        }
    }
    return arr
}


type keyValueType = {
    key: string
    value: number
}

export function calculateSameStringElementsOneByOne(word: string): keyValueType[] {
    let result: keyValueType[] = []
    let index = 0

    for (let i = 0; i < word.length; i++) {
        if (i === 0) {
            result[index] = {key: word[i], value: 1}
        } else {
            if (word[i] === word[i - 1]) {
                result[index].value++
            } else {
                index++
                result[index] = {key: word[i], value: 1}
            }
        }
    }
    return result
}

type keyValuePairType = {
    key: string
    value: number
}

export function splitSameLetter(input: string): keyValuePairType[] {
    const outputArray: keyValuePairType[] = []
    let indexOfArray = 0

    for (let i = 0; i < input.length; i++) {
        if (i === 0) {
            outputArray[indexOfArray] = {key: input[i], value: 1}
        } else {
            if (input[i] === input[i - 1]) {
                outputArray[indexOfArray].value++
            } else {
                indexOfArray++
                outputArray[indexOfArray] = {key: input[i], value: 1}
            }
        }
    }
    return outputArray;
}





function findSmallestIndex(array: number[]) {
    var smallestElement = array[0]; // Stores the smallest value
    var smallestIndex = 0; // Stores the index of the smallest value

    for (var i = 1; i < array.length; i++) {
        if (array[i] < smallestElement) {
            smallestElement = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

// 2. Sort the array
export function selectionSort(array:number[]) {
    var sortedArray = [];
    var length = array.length;

    for (var i = 0; i < length; i++) {
        // Finds the smallest element in the array
        var smallestIndex = findSmallestIndex(array);
        // Adds the smallest element to new array
        let varr = array.splice(smallestIndex, 1);
        sortedArray.push(varr[0]);
    }
    return sortedArray;
}

function findSmallestArrayValue (arr:number[]) : number{
    let smallest = arr[0]
    let smallestIndex = 0

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

export function sortFilteringArray (arr: number[]){
    let newArray = []
    let length = arr.length;

    for (let i = 0; i < length; i++){
        let smallestIndex = findSmallestArrayValue(arr)
        newArray.push(arr.splice(smallestIndex, 1)[0])
    }
    return newArray
}



