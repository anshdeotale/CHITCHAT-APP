import mongoose from "mongoose"
import { ENV } from "./env.JS";

export const connectDB = async () =>{
    try{
        const {MONGO_URL} = ENV;
        if(!MONGO_URL) throw new Error("MONGO_URL is not set")

        const conn = await mongoose.connect(ENV.MONGO_URL)
        console.log("MONGODB CONNECTED:",conn.connection)
    } catch (error) {
        console.log("Error connection to MONGODB:",error)
        process.exit(1); //1 status code means fail, 0 means successful
    }
}