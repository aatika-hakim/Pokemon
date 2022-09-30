import React, { useEffect, useState } from "react";
import axios from "axios";

var url;
const Pokemon =(props) =>{
    var num = props.id;
    const [id, setId] = useState();
    const [pkname, setName ]= useState();
    const [moves, setMoves] = useState();
  
  
    if(num<650){
    console.log(num);
      url= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg`;}
      else if(num>=1000){
        
        num = +num + 9001
        console.log(num);
        url= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`;}
      
        else{
          console.log(num);
          url= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png`;}
  
  // console.log(foo);
    useEffect(()=>{
      async function getPokemonData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        console.log(res.data);
        
        if(res.data != undefined){
          setName(res.data.name)
          setMoves(res.data.moves.length)
        } 
       
      }
      getPokemonData();
    });
    return(
        <>
        <table >
        <thead>
        <th colspan="2">Pokemon Info</th>
        
        </thead>
     
        <tbody>
        <tr>
                <td>Pokemon index</td>
                <td id="id"> {num}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td id="name">{pkname}</td>
            </tr>
            <tr>
                <td>Moves</td>
                <td id="moves">{moves}</td>
            </tr>
 

        </tbody>
    </table>
    <div className="img">
    
    <img  src={url} alt= "Image" />
         
</div>
        </>
    );
}
export default Pokemon;