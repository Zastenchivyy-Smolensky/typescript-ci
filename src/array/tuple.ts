export default function TuppleSample() {
    let response: [number, string] = [200, "ok"]
    console.log(response);
    

    const girlFriends: [string, ...string[]] = ["kane","index","hana"]
    girlFriends.push("aaa")
    console.log(girlFriends);
}