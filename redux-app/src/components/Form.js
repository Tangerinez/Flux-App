import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../js/actions/index";

const mapDispatchToProps = dispatch => {
  // mapDispatchToProps connects Redux actions to React props.
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};
class ConnectedForm extends Component {
  state = {
    title: ""
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    // how the redux action gets dispatched
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(
  // The first argument for connect must be null when mapStateToProps is absent like in the Form example. Otherwise you’ll get TypeError: dispatch is not a function.
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
