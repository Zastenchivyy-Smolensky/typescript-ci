export default function objective(){
    const a: object = {
        name: "kageyama",
        age: 28
    }
    let country: {
        language: string
        name: string
    } = {
        language: "japanese",
        name: "japan"
    }
    console.log("->",country)
    country = {
        language:"english",
        name:"usa"
    }

    console.log("->",country);
    
    const kageyama:{
        age: number
        name: string
        readonly firstname:string
        gender?: string
    } = {
        age:1,
        name:"kageyama",
        firstname:"ryota"
    }

    kageyama.age = 12,
    kageyama.name="yamada",
    kageyama.gender="man"

    console.log("->", kageyama)

    const capitals:{
        [countryname: string]: string
    } = {
        Japan: "tokyo",
        Korean:"soul"
    }
    capitals.China ="neijing"
    capitals.Canada = "ottawa"

    console.log("->",capitals)
}
