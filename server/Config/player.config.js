const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Player",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(()=>console.log("your databse is ready"))
.catch(()=>console.log("Wrong connections"))