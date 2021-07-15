import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "../search/Item";

const Random = () => {
  const [random, setRandom] = useState(null);

  //   useEffect(() => {
  //     console.log("use-effect");
  //   }); //will run every

  // useEffect(() => {
  //     console.log("use-effect");
  //   },[]); //will run only one time

  useEffect(() => {
    const getRandom = () => {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => {
          setRandom(response.data);
        })
        .catch((error) => {
          console.log("error:", error);
        });
    };

    getRandom(); //calling the function
  }, []); //will run every refresh
  return (
    <div>
      {random && (
        <div className="random-drink">
          <h2>Random Drink:</h2>
          {/* {JSON.stringify(random)} */}
          <h3>{random.drinks[0].strDrink}</h3>
          <img
            style={{ height: "500px", width: "500px" }}
            src={random.drinks[0].strDrinkThumb}
            alt={random.drinks[0].strDrink}
          />
          {/* <Item key={random.idDrink} item={random} /> */}
        </div>
      )}
    </div>
  );
};

export default Random;
