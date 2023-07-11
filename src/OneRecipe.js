function OneRecipe ({list, newFunc, newFunc1, setList, newFunk1, label, calories, ingredientLines, url, img, ingredients}){

    let ArrFromAlIng=""
    let filteredIng=[]
    let filteredArr=[]




     const filtered=(ing, id)=>{
     filteredArr.push(filteredIng.filter((item, index)=>(index === id)))

    newFunc(list.push(<li key={id} onClick={line} >{filteredArr}</li>))
    
    
}
const line =(e)=>{
    const li= e.target
    li.classList.toggle("red")
    if(e.detail === 2){
        li.classList.toggle("del")
    }
}


      return(
      <div>
      <div>
        <img src={img} alt="alt"/>
<h1>{label}</h1>
<h2>{calories.toFixed()}</h2>
<ul>
    {ingredients.map((ing,id)=>{
         let a= (ArrFromAlIng+=ing.food+"+").split("+")
         if (a.length===ingredients.length+1){filteredIng.push(...a)} 
          return(<li onClick={()=>filtered(ing, id)} key={id}>{ing.food}</li>)
    
        }
    
    
    
    )}
</ul>

<a href={url}>Open recipe</a>



</div>
</div>
    )
}
export default OneRecipe;