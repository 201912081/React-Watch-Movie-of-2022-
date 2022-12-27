import React from "react";

// get current time
const time=new Date().toLocaleTimeString();
let greetingText="Good Morning"
let greetingColor="Pink";

// logic for greeting
if(time>="12:00:00 pm" && time<="7:00:00 pm")
{
  greetingText="Good Afternoon";
  greetingColor="green"
}
else if(time>"7:00:00 pm" && time<="11:59:59 pm"){
  greetingText="Good Night";
  greetingColor="black"
}
else{
  greetingText="Good Morning";
  greetingColor="Pink";
}


function heading(){
   return(
    <h1 >Hello sir, <span style={{color:greetingColor}}>{greetingText}</span></h1>
   ) 
}
export default heading;