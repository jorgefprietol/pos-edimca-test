import React, { Component } from 'react';
import { Container, Input, Button, Label, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import AppNav from './AppNav';

class Client extends Component {

    emptyItem = {
        age: '',
        email: '',
        event: {id: 1},
        first_name: '',
        last_name: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            item: this.emptyItem 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const item = this.state.item;
        await fetch(`/api/users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        this.props.history.push('/product');
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({ item });
    }

    componentDidMount() {
        let item = {...this.state.item};
        const event = window.localStorage.getItem("eventId");
        item.event.id = event;
    }

    render() {
        const title = <h3>Client Info</h3>
        return (
            <div>
            <AppNav />
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="first_name">First Name</Label>
                        <Input type="text" name="first_name" id="first_name" 
                            onChange={this.handleChange} autoComplete="name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input type="text" name="last_name" id="last_name" 
                            onChange={this.handleChange} autoComplete="name" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" 
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="age">Price</Label>
                        <Input type="text" name="age" id="age" 
                            onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Button 
                            color="primary" 
                            type="submit"
                            onClick={() => {
                                store.addNotification({
                                  title: 'Add',
                                  message: 'Product added successfully',
                                  type: 'default',                         
                                  container: 'bottom-left',                
                                  animationIn: ["animated", "fadeIn"],     
                                  animationOut: ["animated", "fadeOut"],   
                                  dismiss: {
                                    duration: 3000 
                                  }
                                })
                              }}    
                        >
                            Add
                        </Button>{' '}
                        <Button color="secondary" tag={Link} to="/product">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
            </div>
        );
    }
}

export default Client;