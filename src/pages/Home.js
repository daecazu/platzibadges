import React from  'react';
import Astronautas from '../images/astronauts.svg';
import {Link} from 'react-router-dom'
import LogoConf from '../images/platziconf-logo.svg'
import './css/Home.css'

function Home(){
    return (
    <React.Fragment>
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                        <img src={LogoConf} alt=""/><br/>
                        <h1>PRINT YOUR BADGES</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adupisicing</p>
                            <Link to="/badges" style={{align : 'center'}} className="btn btn-primary">
                                Start Now
                            </Link> 
                    </div>
                    <div className="Home__col d-none d-md-block col-md-8">
                        <img src={Astronautas} className="img-fluid p-4" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>)
}

export default Home;