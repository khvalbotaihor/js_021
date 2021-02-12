import {countDown, fact, greet} from "./00";

test("check recursion", () =>{

    const result = countDown(5)

    expect(result).toBe(0)
})

test("check greet function", ()=>{

const result =  greet('audit')

expect(result).toBe("hello audit !how are you audit ?getting ready to say bye...ok bye !")
})

test("check factorial function using recursion",()=>{
    const result = fact(5)

    expect(result).toBe(120)
})