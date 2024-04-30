import { useEffect, useState } from "react"

export default function GitHubUser(){
    let [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(response=>response.json())
        .then(data=> {
            console.log(data);
            setData(data);    
        });
    },[]);
    return (
       <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">GitHub Followers : {data.followers}
        <img className="text-center" src={data.avatar_url} alt="user-logo" width={300} />
       </div>
    )
}