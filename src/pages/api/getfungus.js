import { Schema, model, connect } from 'mongoose';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Fungi from 'fungi/fungischema';
import connectdb from 'fungi/middelware';
mongoose.set('strictQuery', false);
const handler = async (req,res) => {
   
   await connectdb();
   
   
    res.status(200).json(await Fungi.find(req.query).catch((err)=> res.status(400).json({ err }))
    )
    console.log(req)
    console.log(res)
}
export default handler
