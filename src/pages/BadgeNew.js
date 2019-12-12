import React from 'react';
import Badge from '../components/badge'
import Navbar from '../components/Navbar'
import Heroimg from '../images/badge-header.svg'
import BadgeForm from '../components/BadgeForm'
import './css/BadgeNew.css'

class BadgeNew extends React.Component {
    state ={ form: {
        firstname: '',
        lastname: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }};

    handleChange = (e) =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });

    };

    render(){
  return(
      <div>
      <div>
          <Navbar/>
          <div className="BadgeNew__hero">
              <img src={Heroimg} alt="logo" className="img-fluid"/>
          </div>
      </div>
      <div className="container">
          <div className="row">
              <div className="col-6">
                <Badge 
                    firstName={this.state.form.firstname}
                    lastName={this.state.form.lastname}
                    jobTitle={this.state.form.jobTitle}
                    twitter={this.state.form.twitter}
                />
              </div>
              <div className="col-6">
                  <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
              </div>
          </div>
      </div>
      </div>
  );
}}

export default BadgeNew;