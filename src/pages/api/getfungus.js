import { Schema, model, connect } from 'mongoose';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Fungi from 'fungi/fungischema';
import connectdb from 'fungi/middelware';
<<<<<<< HEAD
mongoose.set('strictQuery', false);
=======

>>>>>>> 967230856cc5306111ce2b2eeb00fce06cce149e
const handler = async (req,res) => {
   
   await connectdb();
   
<<<<<<< HEAD
   
=======
>>>>>>> 967230856cc5306111ce2b2eeb00fce06cce149e
    res.status(200).json(await Fungi.find(req.query).catch((err)=> res.status(400).json({ err }))
    )
    console.log(req)
    console.log(res)
}
export default handler
