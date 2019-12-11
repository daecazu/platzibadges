import React from 'react';

class BadgeForm extends React.Component {
state ={};

    handleChange = (e) =>{
      //  console.log({
      //      name: e.target.name,
      //      value:e.target.value
      //  });
      this.setState(
          {
              [e.target.name]: e.target.value,
          }
      );
    };

    handleClick = (e) =>{
        console.log('Button was clicked');
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form was submitted');
      };
      
    render(){
        return (

            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >First Name</label>
                        <input
                            value={this.state.firstname}
                            type="text"
                            onChange={this.handleChange}
                            className="form-control"
                            name="firstname"
                        />
                        <label >Last Name</label>
                        <input
                            value={this.state.lastname}
                            type="text"
                            onChange={this.handleChange}
                            className="form-control"
                            name="lastname"
                        />  
                        <hr/>
                    </div>
                    <div className="form-group">
                        <label >email</label>
                        <input
                            value={this.state.email}
                            type="email"
                            onChange={this.handleChange}
                            className="form-control"
                            name="email"
                        />
                        
                    </div>
                    <div className="form-group">
                        <label >Job Title</label>
                        <input
                            value={this.state.jobTitle}
                            type="text"
                            onChange={this.handleChange}
                            className="form-control"
                            name="jobTitle"
                        />
                        
                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input
                            value={this.state.twitter}
                            type="text"
                            onChange={this.handleChange}
                            className="form-control"
                            name="twitter"
                        />
                        
                    </div>  
                      <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>  
            </div>    
        );
    }}
export default BadgeForm;