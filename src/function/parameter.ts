export const isUser = (userid: string, username?: string): boolean => {
    if (userid ==="123"){
        console.log("function parameter ok",username)
        return true
    }else{
        console.log("function parameter error",)
        return false
    }
} 

export const isUser2 = (userid: string, username ="no user"): boolean => {
    if (userid === "123"){
        console.log("ok")
        return true
    }else{
        console.log("error")
        return  false
    }
}

export const sumPrice = (...productsPrice: number[]): number =>{
    return productsPrice.reduce((prevTotal, productsPrice)=>{
        return prevTotal+productsPrice
    },0)
}

type logmessage = (message: string)=> void
export const logmessage6 : logmessage = (message) => {
    console.log("->",message)
}

type fullmessage = {
    (message: string): void
}
export const logmessage7 : fullmessage = (message) =>{
    console.log("->", message);   
}