export default function promiseSample(){
    const url = "https://api.github.com/users/Zastenchivyy-Smolensky"
    type Profile = {
        login: string
        id: number
    }

    type FetchProfile = () => Promise<Profile | null>
    const fetchProfile: FetchProfile = () =>{
        return new Promise((resolve, reject) => {
            fetch(url)
                .then((res)=>{
                    res.json()
                        .then((json: Profile) =>{
                            console.log("promise1", json);
                            resolve(json)
                }).catch((e)=>{
                    console.log(e);
                    reject(null)
                })
        }).catch((e)=>{
            console.log(e)
            reject(null)
        })
      })
    }
    fetchProfile()
        .then((profile: Profile | null) =>{
            if(profile){
                console.log("2->",profile);
                
            }
        }).catch((e)=>{

        })
}