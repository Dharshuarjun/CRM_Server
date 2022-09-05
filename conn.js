const mongoose=require("mongoose");

const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>console.log("connection starts"))
.catch(()=>console.log(error.message))