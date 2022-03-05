export default function typeAliasSample(){
    type Country = {
        capital: string
        language: string
        name: string
    }

    const japan: Country={
        capital:"Tokyo",
        language:"japanese",
        name:"Japan"
    }
    console.log("->", japan)

    const ameriaca: Country = {
        capital: "Wahinton",
        language:"English",
        name:"USA"
    }
    console.log("->", ameriaca)

    type Knight ={
        hp: number
        sp: number
        weapon: string
        swordSkill: string
    }

    type Wizard ={
        hp: number
        sp: number
        weapon: string
        magicSkill: string
    }
    type Adventurer = Knight | Wizard 
    type Paladin = Knight & Wizard
    
    const Adventurer1: Adventurer = {
        hp: 100,
        sp: 30,
        weapon: "木の剣",
        swordSkill: "三連切り"
    }

    const Adventurer2: Adventurer = {
        hp: 100,
        sp: 30,
        weapon: "木の杖",
        magicSkill: "ファイヤーボール"
    }
    console.log("->",Adventurer1);
    console.log("->",Adventurer2);
    
    
}