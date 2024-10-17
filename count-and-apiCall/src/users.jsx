import { useEffect, useState } from "react"

export default function Users (){
    const [users, setUsers] = useState ([]);

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUsers(data))
      
    },[])

    return(
        <div>
            <h1>users:{users.length}</h1> 
        </div>
    )
}