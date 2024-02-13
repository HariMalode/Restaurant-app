import mongoose from "mongoose";

 export const dbConnection=async ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log("Error occured while connecting to database",err);
    })
        
        
}
//export kro, used this in app.js
