import React from 'react';
import './css/PageError.css'

class PageError extends React.Component{
    render(){
        return(
            <div className="PageError">
                <span role="img" aria-label="warning">
                ⚠️</span> <span role="img" aria-label="x">❌</span>{this.props.error.message} <span role="img" aria-label="deception-face">😧</span>  
                
            </div>
        );
    }

}
export default PageError;
