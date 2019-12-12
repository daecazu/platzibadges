import React from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../components/Navbar'
import confLogo from '../images/badge-header.svg'
import './css/Badges.css'
import badges from '../json/default_badges.json'
import BadgeList from '../components/BadgesList'

class Badges extends React.Component {
    state ={
        data: badges
    }
    render(){
        return(
        <div>
            <Navbar/>
            <div className="Badges">
                <div className="Badges__hero">
                  <div className="Badges__container">
                    <img src={confLogo} alt="" className="Badges_conf-logo"/>    
                  </div>  
                </div>
            </div>
            <div className="Badges__container">
                <div className="Badges__buttons">
                 <Link to="/badges/new" className="btn btn-primary">
                    New Badge
                </Link>   
                </div>
            </div>
            <div className="Badges__list">
                <div className="Badges__container">
                <BadgeList badges={this.state.data}/> 
                    
                </div>
            </div>
        </div>);
    }}
    
    export default Badges;