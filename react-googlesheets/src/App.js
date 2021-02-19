import React, { Component } from "react";
import { Button, Form, Container, Header } from "semantic-ui-react";
import "./App.css";

export default class App extends Component {
  // create states for our four form fields in the constructor
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      salary: "",
      hobby: "",
    };
  }

  // changeHandler method to track the change in the input values.
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // onSubmit handler. On the form tag, add the onSubmit event and assign the submitHandler method
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, age, salary, hobby } = this.state;
    return (
      <Container fluid className="container">
        <Header as="h2">React Google Sheets!</Header>
        <Form className="form" onSubmit={this.submitHandler}>
          <Form.Field>
            <label>Name</label>
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input
              placeholder="Enter your age"
              type="text"
              name="age"
              value={age}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input
              placeholder="Enter your salary"
              type="text"
              name="salary"
              value={salary}
              onChange={this.changeHandler}
            />
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input
              placeholder="Enter your hobby"
              type="text"
              name="hobby"
              value={hobby}
              onChange={this.changeHandler}
            />
          </Form.Field>

          <Button color="blue" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}