import React from 'react';
import Badge from '../components/badge'
import Navbar from '../components/Navbar'
import Heroimg from '../images/badge-header.svg'
import BadgeForm from '../components/BadgeForm'
import './css/BadgeNew.css'

class BadgeNew extends React.Component {
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
                 <Badge firstName="Daniel" lastName="Cañon" jobTitle="Full stack Dev" twitter="daecazu" />
              </div>
              <div className="col-6">
                  <BadgeForm/>
              </div>
          </div>
      </div>
      </div>
  );
}}

export default BadgeNew;