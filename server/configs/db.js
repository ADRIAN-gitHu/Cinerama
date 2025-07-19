import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        mongoose.connection.on('connected',()=>console.log('Base de Datos conectada'));    
        await mongoose.connect(`${process.env.MONGODB_URI}/Cinerama`)
    } catch(error){
        console.log(error.message);
    }
}

export default connectDB;