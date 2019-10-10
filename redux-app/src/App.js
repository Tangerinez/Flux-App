import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import Posts from "./components/Posts";
import "./App.css";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>API posts</h2>
      <Posts />
    </div>
  </div>
);
export default App;
