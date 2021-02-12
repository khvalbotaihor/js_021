import {countDown, greet} from "./00";

test("check recursion", () =>{

    const result = countDown(5)

    expect(result).toBe(0)
})

test("check greet function", ()=>{

const result =  greet('audit')

expect(result).toBe("hello audit !how are you audit ?getting ready to say bye...ok bye !")
})