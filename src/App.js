import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const [recipes ,setRecipes] = useState([]);
  const [search ,setSearch] = useState("");
  const [query ,setQuery] = useState("chicken")
  const app_id ="0f160f30"
  const app_key = "f4686ca3e605c5abfd8d23942dcc5142"
  const exmaple = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
useEffect(() => {
  getRecipe();
},[query]);

  const getRecipe = async()=>{
    const response = await fetch(exmaple)
    const data = await response.json();
    setRecipes(data.hits)
  console.log(data.hits)
}
  const updateData=(e)=>{
    setSearch(e.target.value)
  };
  const sumbitHandle =(e)=>{
    e.preventDefault();
    setQuery(search);

  }
  return (
    <div className="App">
      <form onSubmit={sumbitHandle} className='search-form'>
        <input className='search-bar' type='text' onChange={updateData} value={search}/>
        <button className='form-btn' type='submit'> search</button>
      </form>
      <div className='recepies'>
    {recipes.map(recipe=>(
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      calories={recipe.recipe.calories}
      img ={recipe.recipe.image}
      ingrediants = {recipe.recipe.ingredients}
      />
      ))}
      </div>
    </div>
  );
}

export default App;
