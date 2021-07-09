import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaPaw, FaMoneyCheckAlt, FaChartLine, FaTable } from 'react-icons/fa';
import mainimg from '../../resources/detective_inu_blue_back.png';

import './styles.css';

const HeroSection = () => {
    return (
        <div id="hero">
            <Container className='heroContainer'>
                <Row>
                    <Col>
                        <div className='heroText'>
                            Earning Passive Income and helping those who have lost loved ones in one token.
                        </div>
                        <div className='heroButtonDiv'>
                            <Button className="mr-4 heroButton"> <FaMoneyCheckAlt className="mr-2"/>Buy $DINU </Button>
                            <FaPaw className="mr-1 mt-3"/>
                            <FaPaw className="mr-4 paw"/>
                            <a href='https://poocoin.app/tokens/0x015c20c0f7e23ead504478b19cd7fb0b1cb3d952'><Button className="mr-4 heroButton"> <FaChartLine className="mr-2"/>Chart </Button></a> 
                            <FaPaw className="mr-1 mt-3"/>
                            <FaPaw className="mr-4 paw"/>
                            <a href='https://bscscan.com/token/0x015c20c0f7e23ead504478b19cd7fb0b1cb3d952'><Button className="mr-3 heroButton"><FaTable className="mr-2"/> Bscscan </Button></a>
                        </div>
                    </Col>
                    <Col>
                    <img
                        alt=""
                        src={mainimg}
                        width="450"
                        height="600"
                        className="heroPic"
                    />{' '}
                    </Col>
                </Row>
            </Container>  
        </div>
    )
}

export default HeroSection
