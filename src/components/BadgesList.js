import React from 'react';
import './css/BadgesList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

class BadgeItem extends React.Component{
    state={
        badge : this.props.badge
    }
    render(){
        return(
        
        <li key={this.state.badge.id}>
                    
                        <div className="BadgesListItem">
                        <img src={this.state.badge.avatarUrl} alt="" className="BadgesListItem__avatar"/>
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
          </li>
        ) 
        
    }
}



class BadgeList extends React.Component{
render(){
    return(
        <div className="BadgesList">
        <ul className="list-unstyled">
                    {this.props.badges.map((badge)=>{
                        return(
                              <BadgeItem badge={badge}/>
                        )    
                    })}
        </ul>
        </div>
        
    )
}

}

export default BadgeList;