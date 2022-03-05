export default function BasicSample(){
    const numberReduce = (array: number[], initialValue: number): number  =>{
        let result = initialValue
        for(let i=0;i<array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("->", numberReduce([100,200,300],1000))

    type Reduce = {
        (array: string[], initialValue: string): string
        (array: number[], initialValue: number): number
    }
    type GenericReduct<T>={
        (array: T[], initialValue: T): T
    }

    const GenericStringReduct: GenericReduct<string> = (array, initialValue) => {
        let result = initialValue
        for(let i=0;i<array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("->", GenericStringReduct(["ka","ge","ya"],"ka"))

    const GenericnumberReduct: GenericReduct<number> = (array, initialValue) => {
        let result = initialValue
        for(let i=0;i<array.length; i++){
            result += array[i]
        }
        return result
    }
    console.log("->", GenericnumberReduct([100,200,300],1000))


    type GenericReduct2 = {
        <T>(array: T[], initialValue: T):T
        <U>(array: U[], initialValue: U):U
    }

    type GenericReduct3<T> = (array: T[], initialValue: T) => T
    type GenericReduct4 = <T>(array: T[], initialValue: T) => T
}