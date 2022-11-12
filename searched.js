import React, { useEffect, useRef,useLayoutEffect } from "react";
import Nav from "./Nav";
import { useState } from "react";
import ScaleLoader from "react-spinners/ClipLoader";
import { Link, useFetcher, useLocation } from "react-router-dom";
import {css} from "@emotion/react"
import Footer from "./Footer";
import BookData from "./Data.json";
import Jobs from "./Jobs.json"
import apifile from './Api.json'

const Searched=(props)=>{
const location=useLocation();
  const [searched, setsearched] = useState({ whatd: location.state.whatd, whered: location.state.whered })
    const [exists,setexists]=useState(true)
    const [apidata, setapidata] = useState([]);
    const [jobapidata, setjobapidata] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
    const [whatsearched, setwhatsearched] = useState('');
    const [isloading,setisloading]=useState(true)
    const [status,setstatus]=useState(true);
    //const [api,setapi]=useState(apifile);
    const api=useRef(null)
    const [apiclick,setapiclick]=useState(false)
    const [jobft,setjobft]=useState(null)
    const [whereexists,setwhereexists]=useState(true)
    const [apikey,setapikey]=useState(<YOUR-API-KEY>)
 //  const [apitime,setapitime]=useState('')
    function changewhat(e) {

        let changed = e.target.value;
        setWordEntered(changed)
setwhereexists(true)
        const newFilter = BookData.filter((value) => {
return value.name.toLowerCase().includes(wordEntered.toLowerCase()) ;        
          });

    if (changed === "") {
      setapidata([]);
    } else {
      setapidata(newFilter);
    }
  
    
}
function jobchange(e){
    let changedd=e.target.value;
    setexists(true)
    setwhatsearched(changedd)
    const newjobFilter = Jobs.filter((value) => {
        return value.name.toLowerCase().includes(whatsearched.toLowerCase()) ;     
          });
    if (changedd === "") {
      setjobapidata([]);
    } else {
      setjobapidata(newjobFilter);
    
    }    
}

const apiasync=async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts')
    const body= await (response.json());
return body
}





useLayoutEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
            //'3080ae25famsh2a48333bf8619d4p118e5djsnbca874ca3480'
            'X-RapidAPI-Key': apikey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    }
fetch('https://jsearch.p.rapidapi.com/search?query='+searched.whatd+'%20in%20'+searched.whered+'&num_pages=1', options)
	.then(response => response.json())
	.then(response => {
        setisloading(false)
        api.current=response.data;
    console.log(api.current)
    })
	.catch(err => {console.error(err)
    setstatus(false)
    setapikey('<NEW-API-KEY>')
    });
},[]);
const submit =(e)=>{
        e.preventDefault();
   //   const res=await apiasync();
   
   const options = {
    method: 'GET',
    headers: {
        //'3080ae25famsh2a48333bf8619d4p118e5djsnbca874ca3480'
        'X-RapidAPI-Key': '<API-KEY>',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
}
   fetch('https://jsearch.p.rapidapi.com/search?query='+whatsearched+'%20in%20'+wordEntered+'&num_pages=1', options)
   .then(response => response.json())
   .then(response => {
       setisloading(false)
       api.current=response.data;
   console.log(api.current)
   })
   .catch(err => {console.error(err)
   setstatus(false)
   setapikey('<API-KEY>')
   });

    }        
    function clickeditem(item){
        setWordEntered(item);

    }
    const override= css`
    display:block;
    margin-left:500px;
    margin-top:100px
    border-width: 7px;

    ` ;
    return(
        <>
        <Nav/>
         <div className='div33'>
         <form className='inputdiv2' onSubmit={submit} >
   
<input placeholder='job title,keywords,company' name='whatd'  onChange={jobchange} value={whatsearched} autocomplete="off"></input>
{jobapidata.length !=0 && exists &&(
<div className="dataResult2">
 
        {jobapidata.slice(0, 15).map((value, key) => {
    return(
    <div className="dataItem2" onClick={()=>{
        setwhatsearched(value.name) 
         setexists(false)}}  >
        <p>{value.name}</p>
        </div>
)})}
    </div>
    )}

 <input placeholder='city or postcode'  name='whered' onChange={changewhat} value={wordEntered} autocomplete="off"></input>
 {apidata.length !=0 && whereexists &&(
<div className="dataResult">
 
        { apidata.slice(0, 15).map((value,key) => {
    return(

    <div className="dataItem" key ={key} onClick={()=>{
        setWordEntered(value.name)
        setwhereexists(false)
        }}>
          <p>{value.name}</p>
        </div>
)})}
    </div>
    )}
<button className="searchbutton" >search</button>
   </form>
   </div>
{   
isloading ? 
<div className="loader"><ScaleLoader
 size={150}
 margin-left={'500px'}
 color={'#2557a7'}
 borderwidth= {'7px'}
 
 css={override} 
/></div>
    :
// status ?
// <div> Api 429 Error</div>:
   api.current != null && api.current.length != 0 && 
<div className="apidiv">
   <div className="subapidiv">
{  api.current.map((value)=>{
    let header=value.job_title.slice(0,35)
    let qual=value.job_highlights.Qualifications
 //  setapitime(value.job_posted_at_datetime_utc)
let kkey=Math.random();
    return(
        <div className="apiinfo" key={kkey} onClick={()=>{
            setapiclick(true) 
        setjobft(value)}}>
           <h2 className="apih" key={kkey} > {header} {header.length>34 &&<span>...</span>}</h2>
           <p className="apipara" key={kkey} > {value.employer_name}</p>
        { value.job_is_remote==true ? <p className="apipara" key={kkey} >Remote</p>
    : <p key={kkey} >{value.job_city}</p>    
    }
        <p key={kkey} >{qual}</p>   
        
            </div>
    )
})}
</div>
<div>

{apiclick && <div className="applicationdiv">
    <button className="Xbutton" onClick={()=>setapiclick(false)} > X </button>
    <h2 className="apih">{jobft.job_title}</h2>
   { jobft.employer_website &&<a className="bluepara" href={jobft.employer_website.slice(12)}>{jobft.employer_name}.com</a>}
   <p className="bluepara">{jobft.employer_name}</p>
   <a href={jobft.job_apply_link}>
   <button className="uploadbutton" >Apply on company site</button>
   </a>
   { jobft.job_is_remote==true ? <p className="apipara">Remote</p>
    : <p>{jobft.job_city}</p>    
}
    <p className="apipara">salary:</p>
    <p className="apipara">Location:</p>
    <p className="apipara">{jobft.job_description}</p>
  
</div>}
</div>
</div>
}

   <Footer/>
        </>
    ) 
    }
export default Searched;

