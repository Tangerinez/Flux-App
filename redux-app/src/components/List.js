import React from "react";
import { connect } from "react-redux"; // We want to connect state.articles with this component

const mapStateToProps = state => {
  // connects a part of the Redux state to the props of a React component
  return { articles: state.articles }; // receives the prop articles which is a copy of the articles array we saw in the Redux state
};
const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList); // The connect() function connects a React component to a Redux store.

export default List;

/* The state in redux comes from reducers!!! */
