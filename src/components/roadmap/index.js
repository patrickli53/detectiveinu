import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaRocket, FaExpandArrowsAlt } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'
import './styles.css'
import { Col, Container, Row } from 'react-bootstrap';
const Roadmap = () => {
    return (
        <div id="roadmap" className="blueback">
            <Container>
                <Row>
                    <Col className="roadmapTitle">
                        Roadmap
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#4dc4ff', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid #4dc4ff' }}
                                date="June-July"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaRocket />}
                            >
                                <h3 className="vertical-timeline-element-title">Launch and Marketing</h3>
                                <p>
                                Presale and Initial Marketing Phase
                                <br/>
                                Detective Inu Release
                                <br/>
                                Coin Market Cap and Coin Gecko Applications
                                <br/>
                                WhitePaper and Audit
                                <br/>
                                First Charity Donation
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="August-September"
                                contentStyle={{ background: '#cceeff', color: '#000' }}
                                contentArrowStyle={{ borderRight: '7px solid #cceeff' }}
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<FaExpandArrowsAlt />}
                            >
                                <h3 className="vertical-timeline-element-title">Expansion</h3>
                                <p>
                                Website Redesign 
                                <br/>
                                Detective Inu Merch store
                                <br/>
                                Hiring more Team Members
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="September-October"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<GiPartyPopper />}
                            >
                                <h3 className="vertical-timeline-element-title">Final Stages</h3>
                                <p>
                                Weekly Charity Donations
                                <br/>
                                NFT Marketplace
                                <br/>
                                Token Airdrops 
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Roadmap
