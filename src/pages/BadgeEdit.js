import React from 'react';
import Badge from '../components/badge';
import PageLoader from '../components/PageLoader';
import Heroimg from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import './css/BadgeNew.css';
import api from '../api';

class BadgeEdit extends React.Component {
    state ={
        loading : true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''    
        },
    };
    componentDidMount(){
        this.fetchData();
    }

    fetchData = async (e) => {
        this.setState({ loading:true, error: null});

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            
            this.setState({loading : false, form: data});
        }catch (error){
            this.setState({loading: false, error: error});
        }

    };

    handleChange = (e) =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });

    };

    handleSubmit = async (e) =>{
        e.preventDefault(); 
        this.setState({loading: true, error: null})
        
        try{
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
            this.setState({loading: false})
            this.props.history.push('/badges');

        }catch(error){
            this.setState({loading: false, error: error})
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoader/>;
        }
        return(
            <React.Fragment>
                <div>
                    
                    <div className="BadgeNew__hero">
                        <img src={Heroimg} alt="logo" className="BadgeNew__hero-image img-fluid"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'Jhon'}
                                lastName={this.state.form.lastName || 'Doe'}
                                jobTitle={this.state.form.jobTitle || 'Full Stack Dev' }
                                twitter={this.state.form.twitter || 'jhonDoe'}
                                email={this.state.form.email || 'jhondoe@misite.com'}
                                avatarUrl="https://s.gravatar.com/avatar/5d5184dace9249d43513762d884d4c3a?s=80"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                title="Edit Attendant" 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}}

export default BadgeEdit;