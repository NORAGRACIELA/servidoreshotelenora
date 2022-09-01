//IMPORTAR A MONGOOSE
import mongoose from "mongoose";

//ME CONECTO A LA BASE DATOS
export async function conectar (){
    try{
        await mongoose.connect(process.env.DATABASE);
        console.log("exitooooooooooo")
    }catch(error){

        console.log("Upss"+error)
    }
}
