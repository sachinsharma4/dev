
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Fungi from 'fungi/fungischema'





export default function handler(
    req,
    res
) {
    if (req.method == "POST") {
       // if(req.body.admin=="sachin"&&req.body.admin_password=="1234"){
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
    else {
        res.status(400).json({ name: "bad req" })
    }

}


