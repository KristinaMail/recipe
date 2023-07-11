
import { useEffect, useState } from 'react';
import './App.css';
import OneRecipe from './OneRecipe';
import Added from './Added';



function App() {
  
  const id="640ffb22";
  const key= "4229630f925fe6fd8eb1406c7dff251b";

  const[input, setInput]= useState("");
  const[myRec, setMyRes]= useState([]);
  const[wordApi, setWordApi]= useState("salmon");

 const [list, setList]=useState([])


 const filtered=()=>{
 setList([list])
  }

  const deleted=()=>{
    setList([list])
     }


  useEffect(()=>{
    
    const getRecipe = async() =>{
      const response= await fetch(`https://api.edamam.com/search?q=${wordApi}&app_id=${id}&app_key=${key}`)
      const data=await response.json();
      setMyRes(data.hits)
    }
      getRecipe()
      },[wordApi] )


     
  const userInput=(e)=>{
       setInput(e.target.value)
       }
  const searchRec =(e)=>{
    e.preventDefault()
        setWordApi(input);
       }




  return (
    <div className="App">
    
     <h1>Find recipe by ingredient</h1>
    <Added 
    list={list}
  
    />
    
     <form onSubmit={searchRec}>
<input onChange={userInput} value={input} placeholder="Find recipes..."/>
</form>
<button onClick={userInput}>Search</button>
  <div>
{myRec.map((el,i)=>{return<OneRecipe key={i}
 label={el.recipe.label}
 calories={el.recipe.calories}
 ingredientLines={el.recipe.ingredientLines}
 url={el.recipe.url}
 img={el.recipe.image}
ingredients= {el.recipe.ingredients}
newFunc={filtered}
newFunk1={deleted}
list={list}
setList={setList}

 />})}
  </div>  
    
    </div>
  );
}

export default App;
