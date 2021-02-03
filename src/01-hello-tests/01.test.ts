import {multiply, sum} from "./01";


test("sum should be correct",()=>{
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result1 = sum(a,b)
    const result2 = sum(c,b)

    //expect
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test("multiply should be correct",()=>{
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result1 = multiply(a,b)
    const result2 = multiply(c,b)

    //expect
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})
