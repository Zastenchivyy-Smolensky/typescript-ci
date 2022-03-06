export default function callbackSample() {
    const url = "https://api.github.com/users/Zastenchivyy-Smolensky"
    const fetchProfile = () => {
        return fetch(url)
        .then((res) => {
            res.json()
            .then((json) => {
                console.log("1->", json);
                
                return json
            }).catch((e)=>{
                console.log(e);
            })
        }).catch((e)=>{
            console.log(e);
        })
    }

    const profile = fetchProfile()
    console.log("2->", profile);
    
}