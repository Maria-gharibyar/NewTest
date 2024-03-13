import { useState } from "react"
import axios from 'axios'

const Player=(props)=>{
    const{PlayerName ,setPlayerName }=props;
    const[TeamName,setTeamName]=useState("")
    const[postion,setposition]=useState("")
   
    const playerhandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/player",{
            TeamName,
            postion,
            

        })
        .then(res => {
        
            console.log(res.data);
            setPlayerName([...PlayerName, res.data]); 
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="NewForm">
            <form onSubmit={playerhandler}>
                <label htmlFor="">TeamName</label>
                <input type="text" name="" id="" value={TeamName} onChange={(e)=>setTeamName(e.target.value)}/> 
                <label htmlFor="">Position</label>
                <input type="text" name="" id="" value={postion} onChange={(e)=>setposition(e.target.value)}/> 
                
                <input type="submit" value="Create"  />
                
            </form>
        </div>
    )
}
export default Player