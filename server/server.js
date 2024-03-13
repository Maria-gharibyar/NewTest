const express=require('express');
const cors=require("cors");
const app=express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

require('./Config/player.config')
require('./Route/player.route')(app)

app.listen(8000,()=>{
    console.log("your server working with 8000 port")
})