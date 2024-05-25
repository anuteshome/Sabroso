import React, { useState } from 'react';

const RecipeFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Sample food recipes data
  const foodRecipes = [
    { id: 1, name: 'Pasta Carbonara', ingredients: ['pasta', 'eggs', 'cheese', 'bacon'] ,Date:'01-05-2024'},
    { id: 2, name: 'Chicken Curry', ingredients: ['chicken', 'curry paste', 'coconut milk'] },
    { id: 3, name: 'Caesar Salad', ingredients: ['lettuce', 'croutons', 'parmesan', 'dressing'] },
    // Add more recipes as needed
  ];

  // Function to handle input change in the search bar
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter recipes based on the search term
  const filterRecipes = () => {
    const filteredResults = foodRecipes.filter(recipe =>
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={filterRecipes}>Search</button>

      <ul>
        {searchResults.map(recipe => (
          <li key={recipe.id}>
            {recipe.Date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeFinder;
