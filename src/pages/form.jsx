
import Head from 'next/head'
import { useState } from 'react'
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

    /* 
    Todo: make required true in admin name and password 
    "": "pleurotus",
     "":" fungi",
     "": "basidomyphyta",      
     "":"Agaricomycetes",
     "":"Agaricales",
     "":"Pleurotaceae",
     "":"pleurotus",
     "":"<ol><li>Improves strength</li><li>Boosts immune system</li><li>Antimicrobial</li><li>Anti-cancer</li><li>Anti-viral</li><li>Protein rich about 13%</li><li>carbohydrate rich about 82%</li><li>Fat free</li><li>Contains vitamin B, D, D3, D5 and A</li></ol>",
     "":"These mushrooms are easiest to cultivate .They can be grown with straw of paddy, wheat and ragi, stalk and leaves of maize, millets and cotton, used citronella leaf, sugarcane bagasse, saw dust, jute and cotton waste, dehulled corncobs, pea nut shells, dried. We cultivate with wheat husk  in 3 steps: namely Inoculation, Incubation and Fruiting <p>These mushrooms are easiest to cultivate .They can be grown with  straw of paddy, wheat and ragi, stalk and leaves of maize, millets and cotton, used  citronella leaf, sugarcane bagasse, saw dust, jute and cotton waste, dehulled corncobs, pea nut shells, dried  grasses, sunflower stalks, used tea leaf waste, discarded waste paper and synthetic compost of button  mushrooms etc.</p> <p>we cultivate with wheat husk  in 3 steps:</p> <ol><li>Inoculation</li><li>Incubation</li><li>Fruiting</li></ol> <b>Inoculation</b>: Oyster mushroom spawn is mixed in the sterile husk. This growing medium is filled in PP bags of 33X18 cm size or 88X33 cm with small holes in them for air exchange. 100 g spawn is required for 1 kg straw.<br><br><b>Incubation</b>: The bags are placed in a dark room at a temperature of 20-240 C.<br> About 20-25 days are required for the running of hyphae onto the husk.<br><br><b>Fruiting</b>:Once the growing medium is fully colonized by the spawn. It is the time for mushrooms to start fruiting. The bags are exposed to fresh oxygen and high humidity about 85%, low level of light and cool temperature of about 12-150 C.In the starting small pin head like structures forms and with in 5-6 days full fruit body formation takes place. They are ready to harvest.<br>A crop of mushroom can be harvested 3-4 times before the mycelium becomes exhausted, after 7-8 days other crop will be ready to harvest.<br><br><br><b>Packaging</b>: As the shelf life of oyster mushrooms is very short can be of 5-6 days in Refrigerator.It can be sun dried or oven dried to increase its uses. It can be packed in boxes and in paper bags.<br><br></div>",
     "":"Green mold (Penicillium), black mold (Aspergillus) and Coprinus the most common infections on the spawn. "
 */
export default function Home() {
  const [value,setvalue]=useState("")
  const [text,settext]=useState(true)
  return (<>
    <form method='post' action='./api/addfungus' className='flex-col content-center p-7 bg-gray-300'  >
   
    <label>kingdom</label>
    <input name='kingdom'placeholder='Enter the kingdom' className='border-2 w-4/5 block' required/>
    <label>phylum</label>
    <input name='phylum' placeholder='Enter the phylum' className='border-2 w-4/5 block' required/>
    <label>class</label>
    <input name='class' placeholder='Enter the class' className='border-2 w-4/5 block' required/>
    <label>order</label>
    <input name='order'placeholder='Enter the order' className='border-2 w-4/5 block' required/>
    <label>family</label>
    <input name='family' placeholder='Enter the family' className='border-2 w-4/5 block' required/>
    <label>genus</label>
   
    <input name='common_name' placeholder='Enter common name' className='border-2 w-4/5 block' required/>
    <label>common name</label>
    <input name='genus' placeholder='Enter the genus' className='border-2 w-4/5 block' required/>
    <label>description</label>
    <textarea name='desc' placeholder='Enter the description' className='border-2 w-4/5 block my-3' required/>
    <label>benifits</label>
    <textarea name='benifits' placeholder='Enter the benifits of fungi' className='border-2 w-4/5 block' required/>
    <label>how to cultivate</label>
    <textarea name='how_to_cultivate'placeholder='Enter protocol to cultivate this fungi' className='border-2 w-4/5 block' required/>
    <label>disease</label>
    <textarea name='disease' placeholder='Enter diseases' className='border-2 w-4/5 block my-3' required/>
    <label>prcaution</label>
    <textarea name='precaution' placeholder='Enter precautions' className='border-2 w-4/5 block my-3' required/>
    <label>fungi</label>
    <input name='fungi' value={value.toLowerCase()} onChange={(e) => setvalue(e.target.value)} placeholder='Enter unique name used for search' className='border-2 w-4/5 block' required/>
    <label>Admin Name</label>
    <input name='Admin_Name' placeholder='Enter your name' className='border-2 w-4/5 block' required/>
    <label>password</label><br/>
    <input name='password' type={text?'password':"text"} placeholder='Enter password' className='border-2 w-4/5 ' required/>{text?<AiFillEye onClick={()=>settext(!text)} className="text-blue-400 inline -translate-x-7"/>:<AiFillEyeInvisible onClick={()=>settext(!text)} className="text-blue-400 inline -translate-x-7"/>}<br/>
    <input type="submit" className='border-2 w-32 bg-purple-500 text-white m-3 rounded-xl' />
    </form>
</> )
   
   
  
 

}