import { useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import '../css/style.css'
const PlayerList=(props)=>{
    const{deletePlayer,PlayerName,setPlayerName}=props;
    const removePlayer = (PlayerId) => {
        axios.delete('http://localhost:8000/api/player/' + PlayerId)
            .then(res => {
                deletePlayer(PlayerId);
            })
            .catch(err => console.log(err));
          
    };
  
    useEffect(()=>{
        axios.get("http://localhost:8000/api/player")
        .then((res) => {
            setPlayerName(res.data);
            
        })
        .catch((err) => {
            console.log(err);
        });
        console.log("playername", PlayerName)
    },[])
    
    return (
        <div>
            <h1 style={{textAlign:"center", letterSpacing:"6PX", marginBottom:"40px"}}>TEAMNAME AND POSITIONS</h1>
            <Link to="/player/addplayer"  >
                        Add Player
            </Link>
            {
                PlayerName.map((player, index) => {

                    return <div key={index} className="PlayerList">
                        <div className="info"> 
                        <div className="teamName">{player.TeamName}</div>
                         <div className="position">{player.postion}</div>
                         <button className="delete" onClick={(e) =>{ removePlayer(player._id) }}>
                        Delete
                        </button>

                        </div>
                        
        
                        
                    </div>
                })
            }
        </div>
    );
  
}
export default PlayerList