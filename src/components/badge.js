import React from 'react';
import Header from '../images/badge-header.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import Gravatar from './Gravatar'
import './css/Badge.css';


class Badge extends React.Component {
    render(){
        return (<div className="Badge">
            <div className="Badge__header">
                <img src={Header} alt="header"/>
            </div>
            <div className="Badge__section-name">
                <Gravatar className="Badge__avatar" email={this.props.email}/>
                <h1>
                    {this.props.firstName}<br/>
                    {this.props.lastName}
                </h1>
            </div>
            <div className="Badge__section-info">
            <h3>{this.props.jobTitle}</h3>
            <div>
            <span className="TwitterSpan"><FontAwesomeIcon icon={faTwitter} />@{this.props.twitter}</span>
                </div>
            </div>
            <div className="Badge__footer">#platziconf</div> 
        </div>);
    }}
export default Badge;
