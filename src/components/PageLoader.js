import React from 'react';
import './css/PageLoading.css';
import Loader from './Loader';

function PageLoader(){
    return(
        <div className="PageLoading">
            <Loader/>
        </div>
    ); 
}

export default PageLoader;