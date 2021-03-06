interface Bread {
    calories: number;
}

interface Bread {
    type: string
}

const francePan: Bread = {
    calories: 300,
    type:"hard"
}

type MaboDofu = {
    calories: number;
    spicyLevel: number;
}

type Rice ={
    calories: number
    gram: number
}

type MaboDon = MaboDofu & Rice

const MaboDon: MaboDon = {
    calories: 500,
    spicyLevel: 200,
    gram: 350
}

interface Book {
     page: number
     title: string
}

interface Magazine extends Book {
    cycle: "daily" | "weekly" | "monthly" | "yearly"
}

const jump: Magazine  = {
    page: 300,
    title:"週刊少年ジャンプ",
    cycle: "weekly"
}

type BookType = {
    page: number
    title: string
}

interface HandBook extends BookType {
    theme: string
}

const cotrip: HandBook = {
    page: 120,
    title:"小鳥っぷ",
    theme: "旅行"
}


class Comic implements Book {
    page: number
    title: string
    constructor (page: number, title: string, private publishYear: string){
        this.page =page
        this.title=title
    }

    getPublishYear(){
        return this.title+"が発売されたのは"+this.publishYear+"年です"
    }
}

const popularComic = new Comic(200,"銀魂","2016")
console.log(popularComic.getPublishYear());
