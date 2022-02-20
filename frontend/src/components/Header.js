import React from 'react'
import { Navbar, Container } from 'react-bootstrap'


//pang header
const navbarStyle = {
    backgroundColor: 'maroon',
    textColor:'white'
};

const Header = ({title}) => {
    return (
        <Navbar style={navbarStyle} variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
         
   

            </Container>
           
        </Navbar>
    )
};



export default Header;