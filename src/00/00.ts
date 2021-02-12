

export const countDown = (i:number) : number =>{
    if (i <=0) {
        console.log(`I equals ${i}`)
        return  i
    }
    console.log(`I equals ${i}`)
    return countDown(i -1)
}

export const greet = (name:string) =>{
    let a = (`hello ${name} !`)
    let b = greet2(name)
    let c = (`getting ready to say bye...`)
    let d = bye()
    return a + b + c + d
}


const bye = () =>{
    let a;
    return a = `ok bye !`
}

const greet2 = (name:string) =>{
    let a
    return a =`how are you ${name} ?`
}

export const fact = (num: number) : number=>{
    if(num ===1){
        return 1
    }
    return num * fact(num -1)
}