import React from 'react'
import { Col, Container, Row, Card,  Button } from 'react-bootstrap';
import './styles.css';
import vault from '../../resources/undraw_vault_9cmw.svg';
import transfer from '../../resources/undraw_transfer_money_rywa.svg';
import liquidity from '../../resources/undraw_personal_finance_tqcd.svg';
import wallet from '../../resources/undraw_wallet_aym5.svg'

const Tokenomics = () => {
    return (
        <div id="tokenomics">
            <Container className="tokenContainer">
                <Row>
                    <Col className="tokenomicsTitle">
                    Tokenomics
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="card1">
                            <Card.Img variant="top" src={vault} className='cardPhoto' />
                            <Card.Body>
                            <Card.Title>
                                Supply 
                            </Card.Title>
                            <Card.Text>
                             1 Billion Tokens
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card2">
                            <Card.Img variant="top" src={transfer} className='cardPhoto' />
                            <Card.Body>
                            <Card.Title>
                            Redistribution
                            </Card.Title>
                            <Card.Text>
                            2%  
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card3">
                            <Card.Img variant="top" src={liquidity} className='cardPhoto' />
                            <Card.Body>
                            <Card.Title>
                            Automatic Liquidity 
                            </Card.Title>
                            <Card.Text>
                            4%
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card4">
                            <Card.Img variant="top" src={wallet} className='cardPhoto' />
                            <Card.Body>
                            <Card.Title>
                            Marketing Wallet
                            </Card.Title>
                            <Card.Text>
                            4%
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tokenomics;
