import React, { Component } from 'react';
import {Nav, Navbar,NavItem, NavbarBrand, NavLink} from 'reactstrap';

class AppNav extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">POS - Jorge Prieto</NavbarBrand>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/product">POS</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/admin">Products</NavLink>
                </NavItem>
                </Nav>
                </Navbar>
            </div>
        );
    }
}

export default AppNav;