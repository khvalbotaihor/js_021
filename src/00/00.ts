

export const countDown = (i:number) : number =>{
    if (i <=0) {
        console.log(`I equals ${i}`)
        return  i
    }
    console.log(`I equals ${i}`)
    return countDown(i -1)
}