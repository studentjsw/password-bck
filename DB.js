import mongoose from "mongoose";


export function dataBaseConnection(){
    const params={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {
        mongoose.connect(process.env.MONGO_URL,params)
        console.log("DB connected Via Mongoose")
    } catch (error) {
        console.log("error : ",error)
        
    }
}