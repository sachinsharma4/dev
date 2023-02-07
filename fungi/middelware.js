import * as Mongoose from "mongoose";


 const connectdb = async ()=> {
    
    if(Mongoose.connections[0].readyState){

     
    }
    
  await Mongoose.connect(Process.MONGO_URI).catch(err => console.log(err));
  console.log("Mongoose Connection Established");

 
  
}
export default connectdb