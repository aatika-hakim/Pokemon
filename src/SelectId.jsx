import React, {useState} from "react";
import Pokemon from "./Pokemon";

var ids = [];


for (var i = 1; i <= 1000; i++) {

   ids.push( {value: i, text: i}) 

}
const SelectId = (props) => {
  const [num, setNum] = useState();
    return(
        <>
         <select value={num}
      onChange =  {(event)=> {
        setNum(event.target.value);}}>
       <option selected>Choose Id</option>

      {ids.map((option, index) => (
          <option key={index} value={option.value}>{option.text}</option>
        ))}
      </select> 
      <Pokemon id = {num} />  
        </>
    );
}
export default SelectId;