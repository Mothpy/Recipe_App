import React, { useState } from "react";

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

function RecipeCreate({ addRecipe}) {
  // state to hold the form data
  const [formData, setFormData] = useState({
    name:"",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  // handler function to update form data on input change 
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value });
  };

  // handler func to submit form data and add a new recipe 
  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData);
    // clear form data after submission
    setFormData({
      name:"",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };
  
  return (
    <form onSubmit={handleSubmit} name="create" >
      <div style={{ display: "flex", flexDirection: "column"}}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Cuisine:</td>
              <td>
                <input 
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Photo:</td>
              <td>
                <input  
                  type="text"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                />  
              </td>
            </tr>
            <tr>
              <td>Ingredients:</td>
              <td>
                <textarea 
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Preparation:</td>
              <td>
                <textarea 
                  name="preparation"
                  value={formData.preparation}
                  onChange={handleChange}
                />
              </td>
            </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </form>
  );
}

export default RecipeCreate;
