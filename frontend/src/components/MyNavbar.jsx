import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

function MyNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Janvi's Star Tracker</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;