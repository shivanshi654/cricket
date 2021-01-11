const API_KEY="73Zd61nrbNVp8ArUsyT6a9Lcqq93";

export const getMatches=()=>{
    const url= `https://cricapi.com/api/matches/?apikey=${API_KEY}`;
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("ERROR:",error));
}