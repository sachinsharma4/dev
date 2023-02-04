<<<<<<< HEAD
import {Schema,model,models} from "mongoose";

const fungiSchema = new Schema({
  common_name: { type: String, required: true },
  fungi:{ type: String, required: true },
  kingdom: { type: String, required: true },
  phylum: { type: String, required: true },      
  class:{ type: String, required: true },
  sub_class:String,
  order:{ type: String, required: true },
  sub_order:String,
  family:{ type: String, required: true },
  genus:{ type: String, required: true },
  benifits:{ type: String, required: true },
  how_to_cultivate:{ type: String, required: true },
  video_tutorial:String,
  image_coursol: Array,
  precautions:String,
  disease:String,
  treatment:String,
},{timestamps:true});
const Fungi = models.Fungi || model('Fungi', fungiSchema);
export default Fungi;


=======
import {Schema,model,models} from "mongoose";

const fungiSchema = new Schema({
  common_name: { type: String, required: true },
  fungi:{ type: String, required: true },
  kingdom: { type: String, required: true },
  phylum: { type: String, required: true },      
  class:{ type: String, required: true },
  sub_class:String,
  order:{ type: String, required: true },
  sub_order:String,
  family:{ type: String, required: true },
  genus:{ type: String, required: true },
  benifits:{ type: String, required: true },
  how_to_cultivate:{ type: String, required: true },
  video_tutorial:String,
  image_coursol: Array,
  precautions:String,
  disease:String,
  treatment:String,
},{timestamps:true});
const Fungi = models.Fungi || model('Fungi', fungiSchema);
export default Fungi;


>>>>>>> 967230856cc5306111ce2b2eeb00fce06cce149e
