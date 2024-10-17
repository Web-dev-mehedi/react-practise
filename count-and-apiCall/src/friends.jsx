import { useEffect, useState } from "react"
import "./friends.css"
import Friend from "./friend";

// 
export default function Friends(){
    // use useState
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users') 
         .then(res => res.json())
         .then(data => setFriends(data))

    },[])

     return(
       <div className="friends">
          <h1>Friends: {friends.length}</h1>
              
       { 
        friends.map(item =><Friend friend ={item}></Friend>)
       }

                
       </div>
     )
}
