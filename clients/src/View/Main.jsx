import { useState } from "react"
import Player from "../components/Player"
import PlayerList from "../components/PlayerList";

const Main=(props)=>{
    const[PlayerName,setPlayerName]=useState([ ]);
    
    const deletePlayer = (PlayerId) => {
        setPlayerName(PlayerName.filter(player => player._id !== PlayerId));
    }
        return(
        
            <div>
                   
                <Player PlayerName={PlayerName} setPlayerName={setPlayerName}  ></Player>
                <PlayerList PlayerName={PlayerName} setPlayerName={setPlayerName} deletePlayer={deletePlayer}></PlayerList>
            </div>
        )
}
export default Main