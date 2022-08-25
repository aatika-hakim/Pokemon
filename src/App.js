import axios from "axios";
import React, { useEffect, useState } from "react";


var pokemonData;
const App = () => {
  const [num, setNum] = useState();
  const [pkname, setName ]= useState();
  const [moves, setMoves] = useState();



  var url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg`;
  var foo = [];
 

  for (var i = 1; i <= 1000; i++) {
  
     foo.push( {value: i, text: i}) 
  
  }

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
  
   <div className="container">
   <div className="wrapper">
   
      <select value={num} 
      onChange = {(event)=> {
        setNum(event.target.value);
      }}>
       <option selected>Choose Id</option>

      {foo.map((option, index) => (
          <option key={index} value={option.value}>{option.text}</option>
        ))}
      </select> 
    
    </div>
    </div>

<table striped bordered hover size="sm">
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

export default App;