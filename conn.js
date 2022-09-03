const mongoose=require("mongoose");

const DB="mongodb+srv://uma:uma123@cluster0.ynsy9km.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>console.log("connection starts"))
.catch(()=>console.log(error.message))