import React from 'react';



// import Loader from '../components/Loader';

import PageError from '../components/PageError';
import PageLoader from '../components/PageLoader';
import api from '../api'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component{
    state = {
        loading : true,
        error: null,
        data: undefined,
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async (e) =>{
        this.setState({loading: true, error: null})
        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            ) 
            this.setState({ loading: false, data: data}) 
        }
        catch(error){
            this.setState({ loading: false, error: error})

        }

    }

    render() {
        if (this.state.loading){
            return <PageLoader/>;
        }
        if(this.state.error){
            return <PageError error={this.state.error} />;
        }
        
        return (<BadgeDetails badge = {this.state.data}/>
            
        );
    }

}
export default BadgeDetailsContainer;