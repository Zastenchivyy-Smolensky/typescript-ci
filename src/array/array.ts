export default function Arraysample(){
    const colors: string[] = ["red","blue"]
    colors.push("yellow")
    console.log(colors);

    const even: Array<number> = [2,4,5]
    even.push(3)
    console.log(even);
    const ids: (string | number) [] = ["ABC",123]
    ids.push("BGT")
    ids.push(333)
    console.log(ids);
    
    const generate = () =>{
        const _someArray = []
        _someArray.push(123)
        _someArray.push("ABC")
        return _someArray
    }

    const someArray = generate()
    someArray.push(456)
    console.log(someArray);

    const commands: readonly string[] =["git","git add"]
    console.log(commands);
    
}