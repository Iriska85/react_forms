function FormComponent(props) {
	return (
      <main>
                <form>
                    <input 
                      type='text' 
                      name='firstName' 
                      value={props.data.firstName} 
                      placeholder="First Name" 
                      onChange={props.handleChange} /><br />
                    <input 
                      type='text' 
                      name='secondName' 
                      value={props.data.secondName} 
                      placeholder="Last Name" 
                      onChange={props.handleChange} /><br />
                    <input 
                      type='number' 
                      name='age' 
                      value={props.data.age} 
                      placeholder="Age" 
                      onChange={props.handleChange} /><br />
                    
                    <label>
                      <input 
                        type='radio'
                        name='gender' 
                        value='male'
                        checked={props.data.gender === 'male'}
                        onChange={props.handleChange} />Male<br />
                    </label>
                    <label>
                      <input 
                        type='radio'
                        name='gender' 
                        value='female'
                        checked={props.data.gender === 'female'}
                        onChange={props.handleChange} />Female
                    </label>
                    <br />
                    
                    <select
                      name='destination' 
                      value={props.data.destination}
                      onChange={props.handleChange} >
                      
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
                        checked={props.data.vegan}
                        onChange={props.handleChange} />Vegan
                    </label>
                    <br />
                    <label>
                      <input 
                        type='checkbox'
                        name='vegetarian'
                        checked={props.data.vegetarian}
                        onChange={props.handleChange} />Vegetarian
                    </label>
                    <br />
                    <label>
                      <input 
                        type='checkbox'
                        name='lactose_free'
                        checked={props.data.lactose_free}
                        onChange={props.handleChange} />Lactose-free
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {props.data.firstName} {props.data.secondName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.destination}</p>
                <div>
                    Your dietary restrictions: 
                  <p>Vegan: {props.data.vegan ? 'yes' : 'no'}</p>
                  <p>Vegetarian: {props.data.vegetarian ? 'yes' : 'no'}</p>
                  <p>Lactose-free: {props.data.lactose_free ? 'yes' : 'no'}</p>
                </div>
            </main>
    );
}

export {FormComponent};