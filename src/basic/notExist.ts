export default function notExistSample() {
    let name = null;
    console.log("->", typeof name, name)
    name="kageyama"
    if (!name){
        console.log("->","null")
    }else{
        console.log("=>",name)
    }

    let age =undefined

    console.log("->", typeof age ,age)
    age=28
    if(!age){
        console.log("not");
    }else{
        console.log("->",age);
    }
}