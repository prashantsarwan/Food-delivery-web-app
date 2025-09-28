import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://Subham_199:MongoDB2024@cluster0.5hlv2k1.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}

// mongodb+srv://Subham_199:MongoDB2024@cluster0.5hlv2k1.mongodb.net/