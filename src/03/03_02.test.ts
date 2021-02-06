import { CityType } from "../02/02_02";
import {
    addMoneyToBudget,
    calculateSameStringElementsOneByOne,
    createMessage,
    fireStaff,
    group,
    group2,
    group3,
    hireStaff,
    repairHouse, selectionSort, splitSameLetter
} from "./03";

let city : CityType;

beforeEach(()=>{
    city = {
        title: "New York",
        houses: [
            {
                buildedAt:2012, repaired: false,
                address: {number: 100, street:{title: "White street"}}
            },{
                buildedAt:2008, repaired: false,
                address: {number: 100, street:{title: "Happy street"}}
            },{
                buildedAt:2020, repaired: false,
                address: {number: 101, street:{ title: "Happy street" }}
            }
        ],
        governmentBuildings: [
            {type:"HOSPITAL", budget: 200000, staffCount: 200,
                address: {street: {title: "Central Str"}}},
            {type:"FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {street: {title: "South Str"}}}
        ],
        citizenNumber: 1000000
    }
})


test("Budget should be changed for Hospital", ()=>{

    addMoneyToBudget(city.governmentBuildings[0],   100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test("Budget should be changed for FireStation", ()=>{

    addMoneyToBudget(city.governmentBuildings[1],  -100000);

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})


test("House should be repaired", ()=>{
    expect(city.houses[1].repaired).toBe(false)

    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy()
})

test("People should be fired", ()=>{

    fireStaff(city.governmentBuildings[0], 20)
    expect(city.governmentBuildings[0].staffCount).toBe(180);
})
test("People should be hired", ()=>{

    hireStaff(city.governmentBuildings[0], 20)
    hireStaff(city.governmentBuildings[1], 100)
    expect(city.governmentBuildings[0].staffCount).toBe(220);
    expect(city.governmentBuildings[1].staffCount).toBe(1100);
})
test("Greeting message should be correct for city", ()=>{

    const message = createMessage(city)

    expect(message).toBe("Hello New York citizens!. I want you to be happy all 1000000 people");
})

test("check keys", ()=> {
    const sentence = "aaaabbbcca"

    const result = group(sentence)

    expect(result).toStrictEqual([{ key: 'a', value: 4 },
        { key: 'b', value: 3 },
        { key: 'c', value: 2 },
        { key: 'a', value: 1 }]    )
    }
)
test("check keys second function", ()=> {
    const sentence = "aaaabbbcca"

    const result = group2(sentence)

    expect(result).toStrictEqual([4,3,2,1] )
    }
)
test("check keys third function", ()=> {
    const sentence = "aaaabbbcca"

    const result = group3(sentence)

    expect(result).toStrictEqual([
        { key: 'a', value: 4 },
        { key: 'b', value: 3 },
        { key: 'c', value: 2 },
        { key: 'a', value: 1 }
    ] )
    }
)
test("check keys third function", ()=> {
    const sentence = "aaaabbbcca"

    const result = calculateSameStringElementsOneByOne(sentence)

    expect(result).toStrictEqual([
        { key: 'a', value: 4 },
        { key: 'b', value: 3 },
        { key: 'c', value: 2 },
        { key: 'a', value: 1 }
        ]
    )
    }
)
test("check keys third function", ()=> {
    const sentence = "aaaabbbcca"

    const result = splitSameLetter(sentence)

    expect(result).toStrictEqual([
        { key: 'a', value: 4 },
        { key: 'b', value: 3 },
        { key: 'c', value: 2 },
        { key: 'a', value: 1 }
        ]
    )
    }
)


test("" +
    "", ()=> {
    const arr = [4,3,2,1]

    const result = selectionSort(arr)

    expect(result).toBe(2)
    }
)
