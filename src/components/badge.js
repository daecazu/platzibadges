import React from 'react';
import Header from '../images/badge-header.svg'
import './css/Badge.css'


class Badge extends React.Component {
    render(){
        return (<div className="Badge">
            <div className="Badge__header">
                <img src={Header} alt="header"/>
            </div>
            <div className="Badge__section-name">
                <img
                className="Badge__avatar"
                src="https://s.gravatar.com/avatar/5d5184dace9249d43513762d884d4c3a?s=80"
                alt="Avatar"
                />
                <h1>
                    {this.props.firstName}<br/>
                    {this.props.lastName}
                </h1>
            </div>
            <div className="Badge__section-info">
            <h3>{this.props.jobTitle}</h3>
            <div>@{this.props.twitter}</div>
            </div>
            <div className="Badge__footer">#platziconf</div> 
        </div>);
    }}
export default Badge;
