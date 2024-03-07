import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // state to hold form data
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  // handler func to update form data on input change 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any required field is empty
    if (formData.name.trim() === "" || formData.ingredients.trim() === "" || formData.preparation.trim() === "") {
      alert("Please fill in all required fields");
      return;
    }
    addRecipe(formData);
    // clear form data after submission 
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  return (
    // form to create a new recipe 
    <form onSubmit={handleSubmit} name="create" className="recipe-create-form">
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td><input type="text" name="name" value={formData.name} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th>Cuisine:</th>
            <td><input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th>Photo:</th>
            <td><input type="text" name="photo" value={formData.photo} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th>Ingredients:</th>
            <td><textarea name="ingredients" value={formData.ingredients} onChange={handleChange} /></td>
          </tr>
          <tr>
            <th>Preparation:</th>
            <td><textarea name="preparation" value={formData.preparation} onChange={handleChange} /></td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit">Create</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;



