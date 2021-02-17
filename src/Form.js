import React from 'react';

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
    this.hendleChange = this.hendleChange.bind(this);
  }

  hendleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox' ? 
    this.setState({ [name]: checked }) : 
    this.setState({ [name]: value });
  }

  render() {
    return (
      <main>
                <form>
                    <input 
                      type='text' 
                      name='firstName' 
                      value={this.state.firstName} 
                      placeholder="First Name" 
                      onChange={this.hendleChange} /><br />
                    <input 
                      type='text' 
                      name='secondName' 
                      value={this.state.secondName} 
                      placeholder="Last Name" 
                      onChange={this.hendleChange} /><br />
                    <input 
                      type='number' 
                      name='age' 
                      value={this.state.age} 
                      placeholder="Age" 
                      onChange={this.hendleChange} /><br />
                    
                    <label>
                      <input 
                        type='radio'
                        name='gender' 
                        value='male'
                        checked={this.state.gender === 'male'}
                        onChange={this.hendleChange} />Male<br />
                    </label>
                    <label>
                      <input 
                        type='radio'
                        name='gender' 
                        value='female'
                        checked={this.state.gender === 'female'}
                        onChange={this.hendleChange} />Female
                    </label>
                    <br />
                    
                    <select
                      name='destination' 
                      value={this.state.destination}
                      onChange={this.hendleChange} >
                      
                      <option value=''>---Please, choose a destination---</option>
                      <option value='London'>London</option>
                      <option value='NYC'>NYC</option>
                      <option value='Tokyo'>Tokyo</option>
                    </select>
                    <br />
                    
                    <label>
                      <input 
                        type='checkbox'
                        name='vegan'
                        checked={this.state.vegan}
                        onChange={this.hendleChange} />Vegan
                    </label>
                    <br />
                    <label>
                      <input 
                        type='checkbox'
                        name='vegetarian'
                        checked={this.state.vegetarian}
                        onChange={this.hendleChange} />Vegetarian
                    </label>
                    <br />
                    <label>
                      <input 
                        type='checkbox'
                        name='lactose_free'
                        checked={this.state.lactose_free}
                        onChange={this.hendleChange} />Lactose-free
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstName} {this.state.secondName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <div>
                    Your dietary restrictions: 
                  <p>Vegan: {this.state.vegan ? 'yes' : 'no'}</p>
                  <p>Vegetarian: {this.state.vegetarian ? 'yes' : 'no'}</p>
                  <p>Lactose-free: {this.state.lactose_free ? 'yes' : 'no'}</p>
                </div>
            </main>
    );
  }
}


  export {Form};