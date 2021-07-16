import React, { useState } from "react";
import axios from "axios";
import Item from "./Item";

const INITIAL_STATE = {
  term: "",
};
let a;
const Search = () => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [responseData, setresponseData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values.term);

    runSearch(values.term);
  };
  const runSearch = (term) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`)
      .then((response) => {
        setresponseData(response.data); //get data from api key
      })
      .catch((error) => {
        console.log("error:", error); // catch error
      })
      .finally(() => {
        setValues(INITIAL_STATE); //clean the term
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search">
        <input
          onChange={handleChange}
          type="text"
          name="term"
          className="search-input"
          placeholder="Search..."
          value={values.term}
        />
      </form>
      {responseData.drinks &&
        responseData.drinks
          .slice(0, 7)
          .map((item) => <Item key={item.idDrink} item={item} />)}
    </>
  );
};
export default Search;
