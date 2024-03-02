import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  
  // func to add a new recipe to the list 
  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  // func to delete a recipe from the list 
  const deleteRecipe = (index) => {
    setRecipes(recipes.filter((_, i) => i !== index));
  };
  
  return (
    <div className="App">
      
      <header><h1>Delicious Food Recipes Yummm </h1></header>
      
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      
      <RecipeCreate addRecipe={addRecipe} />
    
    </div>
  );
}

export default App;
