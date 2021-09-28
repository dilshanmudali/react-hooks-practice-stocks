import React from "react";

function SearchBar({searchSort, setSearchSort, setSearchFilter}) {

  function handleSearchSort(e){
    setSearchSort(e.target.value)
  }

  function handleSearchFilter(e){
    setSearchFilter(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="ABC"
          name="sort"
          checked={searchSort === 'ABC'}
          onChange={handleSearchSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={searchSort === 'Price'}
          onChange={handleSearchSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleSearchFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
