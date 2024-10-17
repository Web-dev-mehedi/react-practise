export default function Friend({friend}){
    const {name,username,email} = friend
    return(
     
        <div className="friends" >
             <h2>Name: {name}</h2>
             <p>UserName: {username}</p>
             <p>Email: {email}</p>
        </div>

    )
}