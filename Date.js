import React, { useState } from "react";
import Searched from "./searched";
function Timesince(date) {
const [apitimeago,setapitimeago]=useState('')
    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    let aDay = date.datee
    console.log(Timesince(new Date(aDay))+' ago');
 setapitimeago(Math.floor(seconds) + " seconds");
  return(
    <p>{apitimeago}</p>
  )
}
  export default Timesince;