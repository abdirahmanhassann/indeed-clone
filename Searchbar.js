import React from "react";
import BookData from "./Data.json";
import Jobs from "./Jobs.json"
import { useState } from "react";
 const Searchbar=()=>{
 //   const [searched, setsearched] = useState({ whatd: location.state.whatd, whered: location.state.whered })
    const [exists,setexists]=useState(true)
    const [apidata, setapidata] = useState([]);
    const [jobapidata, setjobapidata] = useState([]);
    const [wordEntered, setWordEntered] = useState('');
    const [whatsearched, setwhatsearched] = useState('');
    function changewhat(e) {

        let changed = e.target.value;
        setWordEntered(changed)

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
const submit =async (e)=>{
    e.preventDefault();
  const res=await apiasync();
  console.log(api);
    setapi(res)
}        
    return(
<>
<div className='div3'>
<form className='inputdiv2' onSubmit={submit}>
   
   <input placeholder='job title,keywords,company' name='whatd'  onChange={jobchange} value={whatsearched}></input>
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
   
    <input placeholder='city or postcode'  name='whered' onChange={changewhat} Value={wordEntered}></input>
    {apidata.length !=0 &&(
   <div className="dataResult">
    
           {apidata.slice(0, 15).map((value, key) => {
       return(
   
       <div className="dataItem" onClick={()=>setWordEntered(value.name)}>
   
           <p>{value.name}</p>
           </div>
   )})}
       </div>
       )}
   <button className="uploadbutton">search</button>
      </form>
      </div>
</>
)
 }
 export default Searchbar;