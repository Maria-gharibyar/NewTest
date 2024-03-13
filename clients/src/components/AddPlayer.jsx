import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const AddPlayer=()=>{
 const [error, setError] = useState({}); 
const [AddPlayer,setPlayer]=useState({
    TeamName:"",
    postion:""
})
const playerhandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/player', AddPlayer)
        .then(res => {
            console.log(res.data);
           
            setPlayer({
                TeamName:"",
                postion:""
            })
        })
        .catch(err => {
            console.log(err);
            setError(err.response.data.errors); 
          
        });
    
}
    return(
        <div>
            <Link to="/home">List</Link> <br />
            <Link to="/player/addplayer">Add Player</Link>
            <form onSubmit={playerhandler}>
                <label htmlFor="">TeamName</label>
                {error.TeamName ? 
                    <p>{error.TeamName.message}</p>
                    : null
                }
                <input type="text" name="" id="" value={AddPlayer.TeamName} onChange={(e)=>setPlayer({...AddPlayer , TeamName:e.target.value})}/> 
                <label htmlFor="">Position</label>
                <input type="text" name="" id="" value={AddPlayer.postion} onChange={(e)=>setPlayer({...AddPlayer , postion:e.target.value})}/> 
                <input type="submit" value="Add Player"  />
                </form>
        </div>
    )
}
export default AddPlayer