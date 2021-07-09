const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
       await  mongoose.connect("mongodb+srv://mohamed:1234@mern-stack-restaurant.ixjds.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
       ,{ useNewUrlParser: true ,
        useUnifiedTopology: true
    }
       )
       console.log("database connected")
    } catch(err) {
        console.log("error database")
    }
}
module.exports=connectDB