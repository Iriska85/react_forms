import React from 'react';
import {FormComponent} from './FormComponent';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      secondName: '',
      age: '',
      gender: '',
      destination: '',
      vegan: false,
      vegetarian: false,
      lactose_free: false 
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox' ? 
    this.setState({ [name]: checked }) : 
    this.setState({ [name]: value });
  }

  render() {
    return(
      <FormComponent data={this.state} handleChange={this.handleChange} /> 
    )
  }
}


  export {Form};