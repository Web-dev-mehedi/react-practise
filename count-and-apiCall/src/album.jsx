
import "./image.css"
export default function Album({album}){
    console.log(album)
    const {category_id, video_id , title,others,thumbnail} = album
          return (
             <div className="friends" style={{textAlign:'left',margin:'auto'}}>
                 <h3>Album Id : {category_id}</h3>
                 <p>Id : {video_id}</p>
                 <p>Title : {title}</p>
                 <img className="img" src= {thumbnail} alt="" /> 

             </div>
          )
}