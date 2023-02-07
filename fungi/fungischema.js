
import {Schema,model,models} from "mongoose";

const fungiSchema = new Schema({
  common_name: { type: String, required: true },
  fungi:{ type: String, required: true },
  desc:{ type: String, required: true },
  kingdom: { type: String, required: true },
  phylum: { type: String, required: true },      
  class:{ type: String, required: true },
  order:{ type: String, required: true },
  family:{ type: String, required: true },
  genus:{ type: String, required: true },
  benifits:{ type: String, required: true },
  how_to_cultivate:{ type: String, required: true },
  precautions:String,
  disease:String,
  
},{timestamps:true});
const Fungi = models.Fungi || model('Fungi', fungiSchema);
export default Fungi;



