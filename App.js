import "./App.css";
import Layout from "./Layout/Layout";
import React from "react";
import Search from "./components/search/Search";
// import "./style.css";
const App = () => {
  return (
    <Layout>
      <div className="main">
        <div className="container">
          <Search />
        </div>
      </div>
      <h2>From app</h2>
    </Layout>
  );
};

export default App;
