import { useEffect, useState } from "react"
import Album from "./album"

export default function Albums() {
    const [albums,setAlbums] = useState([])
    // console.log(albums)
     useEffect(()=>{
          fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
          .then(res => res.json())
          .then(data =>  {
             const newData =  data.videos

               setAlbums(newData)
          })
         
        },[])
       
       
    return(
      
        <div className="grid-container">
            <h1>hello {albums.length}</h1>
            {
            albums.map( item => <Album album = {item} ></Album>)
         }
        </div>
    )
}