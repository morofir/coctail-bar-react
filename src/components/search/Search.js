import React from "react";
import { useState } from "react";
import axios from "axios";

const INITIAL_STATE = {
  term: "",
};

const Search = () => {
  const [values, setValues] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    const [name, value] = event.target;
    setValues((presvState) => ({ ...presvState, [name]: value }));
  };
  return (
    <form>
      <input
        type="text"
        name="term"
        className="search-input"
        onChange={handleChange}
        placeholder="Search..."
        value={values.term}
      />
    </form>
  );
};

export default Search;
