import React, { Component ,useState} from 'react';

import './Reg.css';
function Op() {
  const [userD,setData] = useState({
    email:"",name:"",age:"",gender:"",phone:"",pass:""
  })
  const state = {
    username: '',
    items:[]
  };
  
  const handleFormSubmit = (e) => {
  
    e.preventDefault();
    let items = [...this.state.items];
    items.push({
      username: this.state.username
    });
    this.setState({
      items,
      username: '',
    });
  };
  
 const handleInputChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
    return (
        <div className="container">
        <form className='from-group ' onSubmit={this.handleFormSubmit}>

          <input className='form-control no-border input-field ' id="username" value={this.state.username} type="text" name="username" onChange={this.handleInputChange} required/>

          <div className="text-center">
            <button type='submit' className="mt-3 col-md-12 btn  btn-primary">ADD</button>
          </div>
        </form>
        <div className='mt-3'>
          <div className='center'>
            <table className="table table-dark table-hover">
              <tbody>
                <tr>
                  <th>Username</th>
                </tr>
                {this.items.map(item =>{ 
                return(
                  <tr>
                    <td>{item.username}</td>
                  </tr>
                  ); 
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
     
     
    );
  }
  
export default Op;
  