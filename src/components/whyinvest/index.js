import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import question from '../../resources/questioninu.png';
import './styles.css';

const Whyinvest = () => {
    return (
        <div id="whyinvest" className="blueback">
            <Container className='whyContainer'>
                <Row>
                    <Col md='6' sm='12'>
                        <div className="whyTitle">
                            Why Invest in Detective Inu?
                        </div>
                        <img
                            alt=""
                            src={question}
                            width="200"
                            height="267"
                            className="whyPic"
                        />{' '}
                    </Col>
                    <Col md='6' sm='12'>
                        <div className='whyText'>
                            Detective Inu is the first charity token to help provide funds for unsolved criminal investigations.
                        </div>
                        <div className='whyText1'>
                            There are thousands of murders that go unsolved every year worldwide, and without funding, a lot of these cases are just slid under the table and forgotten after a few weeks, leaving the victims' loved ones without the closure they deserve.
                        </div>
                        <div className='whyText2'>
                            <i>
                                Detective Inu is the token that rewards holders with passive income and gives grieving families the hope that one day, they will get the closure they deserve.
                            </i>
                        </div>
                    </Col>
                </Row>
            </Container>  
        </div>
    )
}

export default Whyinvest
