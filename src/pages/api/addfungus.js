
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Fungi from 'fungi/fungischema'
import Admin from 'fungi/adminschema';
import connectdb from 'fungi/middelware';



export default async function handler(req,res) {
   
if (req.method == "POST") {
    await connectdb();
    let admin = await Admin.findOne({ "name": req.body.admin_name }).catch((err) => res.status(400).json({ err }));
    if (admin) {
        if (req.body.password == admin.password) {
            let p = new Fungi({
                "common_name": req.body.common_name,
                "fungi":req.body.fungi,
                "kingdom": req.body.kingdom,
                "desc":req.body.desc,
                "phylum": req.body.phylum,
                "class": req.body.class,
                "order": req.body.order,
                "family": req.body.family,
                "genus": req.body.genus,
                "benifits": req.body.benifits,
                "how_to_cultivate": req.body.how_to_cultivate,
                "precautions": req.body.precautions,
                "disease": req.body.disease,
              
        })
            p.save()
            res.status(200).json({ name: "succesfully added" })
        
        }
        else { res.status(500).json({ "Fatal Error": "wrong password" }) }
    }
    res.status(404).json({ "Error": "" })
}
    else {
        res.status(400).json({ name: "bad req" })
    }

}


