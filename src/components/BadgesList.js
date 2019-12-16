import React from 'react';
import './css/BadgesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import Gravatar from './Gravatar'
import { Link } from 'react-router-dom';

class BadgeItem extends React.Component{
    state={
        badge : this.props.badge
    }
    render(){
        return(
        
        <li key={this.state.badge.id}>
                    <Link className="text-reset text-decoration-none" to={`/badges/${this.state.badge.id}`}>
                        <div className="BadgesListItem">
                        <Gravatar email={this.state.badge.email} className="BadgesListItem__avatar" />
                        <div>
                            <strong>
                            {this.state.badge.firstName} {this.state.badge.lastName}
                            </strong>
                            <br/><span className="TwitterSpan">
                                    <FontAwesomeIcon icon={faTwitter} />@{this.state.badge.twitter}
                                </span><br/>
                            {this.state.badge.jobTitle}
                        </div>
                        </div> 
                    </Link>   
          </li>
        ) 
        
    }
}



class BadgeList extends React.Component{
render(){
    if(this.props.badges.length===0){
        return(
        <React.Fragment>
            <h3>No encontramos ningun badge</h3>
        </React.Fragment>
        )
    }
    return(
        <div className="BadgesList">
        <ul className="list-unstyled">
                    {this.props.badges.map((badge)=>{
                        return(
                              <BadgeItem badge={badge} key={badge.id}/>
                        )    
                    })}
        </ul>
        </div>
        
    )
}

}

export default BadgeList;