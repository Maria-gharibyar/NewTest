const mongoose=require("mongoose");

const PlayerSchema=new mongoose.Schema({
    TeamName:{
        type:String,
        
        required:[true,"Every player has a team required"],
        minlength: [3, "Team Name must be at least 2 characters long"]
    },
    postion:{
        type:String,
        required:[true,"positions are also neccessary"]
    },
    status: {
        type: String,
        required: [true, "status is required"],
        default: "undecided"
    }
    
},{timestamps:true})
const player=mongoose.model('player',PlayerSchema)
module.exports=player