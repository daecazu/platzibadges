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

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('');
    const [filteredBadges,setFilteredBadges] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge =>{
            return `${badge.firstName} ${badge.lastName}`
            .toLowerCase().
            includes(query.toLowerCase());
        });

        setFilteredBadges(result)

    }, [ badges, query]);

    return {query, setQuery, filteredBadges}
}


function BadgeList (props){
    const badges = props.badges;

    return {query, setQuery, filteredBadges} = useSearchBadges(badges);
   

    if(filteredBadges.length===0){
        return(
        <React.Fragment>
         <div className="BadgesList">
            <div className="form-group">
                <label >Filter Badges</label>
                <input type="text" className="form-control"
                    value={query}
                    onChange={(e=>{
                    setQuery(e.target.value);
                })}/>
            </div>
         </div>
            <h3>No Badges were found</h3>
        </React.Fragment>
        )
    }
    return(
        <div className="BadgesList">
         <div className="form-group">
         <label >Filter Badges</label>
         <input type="text" className="form-control"
            value={query}
            onChange={(e=>{
                setQuery(e.target.value);
            })}
         />
            
         </div>   
        <ul className="list-unstyled">
                    {filteredBadges.map((badge)=>{
                        return(
                              <BadgeItem badge={badge} key={badge.id}/>
                        )    
                    })}
        </ul>
        </div>
        
    )
}



export default BadgeList;