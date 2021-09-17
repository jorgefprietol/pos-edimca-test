import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Moment from 'react-moment';

import AppNav from './AppNav';

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            Events: []
        }
        this.client = this.client.bind(this);
    }

    client(id) {
        window.localStorage.setItem("eventId", id);
        this.props.history.push('/client');
    }

    async componentDidMount() {
        const response = await fetch('/api/events');
        const body = await response.json();
        this.setState({Events: body, isLoading: false});
    }

    render() {
        const {Events, isLoading} = this.state;
        if(isLoading)
            return (<div>Loading...</div>);

        return (
            <div>
                <AppNav />
                <h3>Select one product</h3>
                {
                    Events.map(event => 
                        <div id={event.id} className="boxed" style={{ justifyContent: 'center'}}>
                            <h3>{event.name}</h3>
                            Expiration date :  <Moment format="DD/MM/YYYY">{event.event_date}</Moment>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button 
                                color="primary"
                                onClick={() => this.client(event.id)}
                                >
                                Add
                                </Button>
                        </div>    
                    )
                }   
            </div>
        );
    }
}

export default Product;