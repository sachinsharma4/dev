
import {Schema,model,models} from "mongoose";

const adminSchema = new Schema({
  name:{ type: String, required: true },
  password:{ type: String, required: true }
});
const Admin = models.Admin || model('Admin', adminSchema);
export default Admin;