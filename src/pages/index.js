import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { BiMicrophone, BiSearch } from 'react-icons/bi';
import React, { useState} from 'react'

const inter = Inter({ subsets: ['latin'] })






      export default function  Home(props){

      console.log(props)
      
        
  const [value,setvalue]=useState("");
      const [Fungi,setFungi]=useState(props.data);
      const [placeholder,setplaceholder]=useState("enter the name fungi");

    const record = ()=>{ setplaceholder("listening...");
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = function(event) {
      setvalue(event.results[0][0].transcript);
      setplaceholder("enter the name fungi");}
    recognition.onerror = function(error) {
      console.log("recording fail because "+error)
      setvalue("");}
      recognition.start();
    
    
};
    
       
         
 




      return (
      <>
        <Head>
          <title>KMC EDOF</title>
          <meta name="description" content="KMC EDOF is database of fungus provided by department of botany of Kiroi Mal College" />
          <meta name="keyword" content=""/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="rgb(216,180,254)" />
        </Head>
      
        <header className={`${styles.header} bg-cover text-white text-center flex-col justify-center h-80`}>
          <h1 className='pt-32'>KMCEDOF</h1>
          <span className=''>A Database of Fungi by Kirori Mal College</span>
          {/*created a search box todo implement image search*/}
          <form id="fungi-form" action={`https://dev-puce.vercel.app/fungi/${value}`} method="post" className='flex justify-center '>
            <input value={value} list="fungi" onChange={(e) => setvalue(e.target.value)} placeholder={placeholder} className='rounded-full w-full lg:w-3/4 p-2 ml-6  mb-1 text-black outline-none' required/><button><BiMicrophone onClick={record}  className='text-blue-900 -translate-x-20 my-3'/></button><button type="submit" form="fungi-form" className='-translate-x-16' ><BiSearch className='text-blue-900  -translate-x-16 my-3'/></button></form>
          <datalist id='fungi'>
            {
              Fungi.map((item) => {
                return (<option key={item.fungi} value={item.fungi} />)
              })
            }

          </datalist>
        </header>
        <main className='p-3 flex flex-wrap'>
          {
            Fungi.slice(0,5).map((item) => {
              return (
                <div key={item.fungi} className='border-2   min-h-fit  rounded-xl w-fit p-2 m-2'>
                  <Link href={"./fungi/" + item.fungi}> <Image src={`/${item.fungi}/image_1.jpeg`} alt={item.fungi}  width={300} height={100} className='  bg-purple-200' />
                    <span className='font-bold italic'>{item.fungi}</span>
                    <p className=' line-clamp-2 lg:line-clamp-3 italic'>
                      {item.fungi}
                    </p></Link>
                </div>)
            })
          }




        </main>
        <footer className='w-full bg-purple-500 text-center  text-white'>
KMCEDOF <br/>
<div className='-translate-x-7'>follow us on:</div> 
        </footer>
      </>
      )
}
export const getServerSideProps = async (context) => {
 let data=await fetch("https://dev-puce.vercel.app/api/getfungus")
 .then(
    data => { return data.json() })
  return {
    props: { data}, 
  }
}