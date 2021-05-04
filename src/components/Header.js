import React from 'react'
import { Link } from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'


export const Header = () => {
    return (
        <Navbar color = "dark" dark>
            <Container >    
                <NavbarBrand>List</NavbarBrand>
                <Nav> 
                    <NavItem> 
                        <Link to = "/add" className ="btn btn-primary">Add</Link>  
                    </NavItem>  
                </Nav>
            </Container>
        </Navbar>
    )
}