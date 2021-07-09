import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../resources/detective_inu.png'
import { Nav, Button } from 'react-bootstrap'
import './navbar.css'

const Navigation = () => {
    return (
        <>
            <Navbar sticky="top" expand="lg">
                <Navbar.Brand href="#home">
                    <Link
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="scroll scroll-title"
                    > 
                        <img
                            alt=""
                            src={logo}
                            width="60"
                            height="80"
                            className="d-inline-block align-top"
                        />{' '}
                        Detective Inu
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button className="mr-4 navbutton">
                            <Link
                                activeClass="active"
                                to="whyinvest"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="scroll"
                            >
                                Why Invest?
                            </Link>
                        </Button>
                        <Button className="mr-4 navbutton">
                            <Link
                                activeClass="active"
                                to="tokenomics"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="scroll"
                            >
                                Tokenomics
                            </Link>
                        
                        </Button>
                        <Button className="mr-4 navbutton">
                            <Link
                                activeClass="active"
                                to="roadmap"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="scroll"
                            >
                                Roadmap
                            </Link>
                        </Button>
                        <Button className="mr-4 navbutton">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="scroll"
                            >
                                Contact
                            </Link>
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
        </>
    )
}

export default Navigation
