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

   // handleSubmit = (e) => {
   //     e.preventDefault();
   //     console.log('Form was submitted');
   //     console.log(this.state);
   //   };
      
    render(){
        return (

            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label >First Name</label>
                        <input
                            value={this.props.formValues.firstName}
                            type="text"
                            onChange={this.props.onChange}
                            className="form-control"
                            name="firstName"
                        />
                        <label >Last Name</label>
                        <input
                            value={this.props.formValues.lastName}
                            type="text"
                            onChange={this.props.onChange}
                            className="form-control"
                            name="lastName"
                        />  
                        <hr/>
                    </div>
                    <div className="form-group">
                        <label >email</label>
                        <input
                            value={this.props.formValues.email}
                            type="email"
                            onChange={this.props.onChange}
                            className="form-control"
                            name="email"
                        />
                        
                    </div>
                    <div className="form-group">
                        <label >Job Title</label>
                        <input
                            value={this.props.formValues.jobTitle}
                            type="text"
                            onChange={this.props.onChange}
                            className="form-control"
                            name="jobTitle"
                        />
                        
                    </div>
                    <div className="form-group">
                        <label >Twitter</label>
                        <input
                            value={this.props.formValues.twitter}
                            type="text"
                            onChange={this.props.onChange}
                            className="form-control"
                            name="twitter"
                        />
                        
                    </div>  
                      <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                {this.props.error &&(
                    <p className="text-danger">{this.props.error.message}</p>
                )}
                </form>  
            </div>    
        );
    }}
export default BadgeForm;