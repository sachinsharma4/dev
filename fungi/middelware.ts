<<<<<<< HEAD
import * as Mongoose from "mongoose";


 const connectdb = async ()=> {
    
    if(Mongoose.connections[0].readyState){

     
    }
  await Mongoose.connect('mongodb://127.0.0.1:27017/fungi').catch(err => console.log(err));
  console.log("Mongoose Connection Established");

 
  
}
=======
import * as Mongoose from "mongoose";


 const connectdb = async ()=> {
    
    if(Mongoose.connections[0].readyState){

     
    }
  await Mongoose.connect('mongodb://127.0.0.1:27017/fungi').catch(err => console.log(err));
  console.log("Mongoose Connection Established");

 
  
}
>>>>>>> 967230856cc5306111ce2b2eeb00fce06cce149e
export default connectdb