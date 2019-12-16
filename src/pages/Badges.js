import React from 'react';
import {Link} from 'react-router-dom';
import confLogo from '../images/badge-header.svg';
import './css/Badges.css';
// import badges from '../json/default_badges.json'
import BadgeList from '../components/BadgesList';
import api from '../api';
import PageLoader from '../components/PageLoader';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {

    state ={
        loading: true,
        error: null,
        data: undefined
    };


    componentDidMount(){
        this.fetchData()
        this.intervalId = setInterval(this.fetchData, 5000)    
    }

    fetchData = async () =>{
        this.setState({
            loading:true,
            error:null  
        });
        try{
            const data = await api.badges.list();
            this.setState({loading: false, data:data});
        }catch(error){
            this.setState({loading: false, error:error});    
        }


    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
        clearTimeout(this.timeoutId);    
    }
    render(){
        if(this.state.loading===true && !this.state.data){
            return <PageLoader/>;
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>    
        }

        return(
        <React.Fragment>
          
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
                {this.state.loading && <MiniLoader/>}  
                </div>
            </div>
        </React.Fragment>);
    }}
    
    export default Badges;