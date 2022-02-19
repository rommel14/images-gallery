import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

//pang header
const navbarStyle = {
    backgroundColor: 'lightblue'

};

const Header = ({title}) => {
    return (
        <Navbar style={navbarStyle} variant="light">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
                
            </Container>
        </Navbar>
    )
};
export default Header;