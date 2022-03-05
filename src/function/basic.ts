export const basicmessage = (message: string): void =>{
    console.log("->",message);
}
export function logmessage(message: string): void {
    console.log("->",message)
}

export const logmessage2= function(message: string): void {
    console.log("->",message)
}

export const logmessage3 = (message: string):void => console.log("->", message)

export const kageyama = (message: string):never =>{
    throw new Error(message)
}