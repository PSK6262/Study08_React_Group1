import { Container, Row, Col, Card } from 'react-bootstrap';
// import ParkCard from './ParkCard.jsx'
import './Trail.css'

function Trail({ Data }) {
    return (
        <div>
            <Container>
                <h1>천호지</h1>
                <Row>
                    <div className='trailImg-box'></div>
                    <Card style={{ width: '23rem', marginLeft: 'auto' }}>
                        <Card.Body>
                            <div className="inner-box">
                                <h5>주소</h5>
                                <Card.Text>{Data[ 13 ].address}</Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="inner-box">
                                <h5>특징</h5>
                                <Card.Text>{Data[ 13 ].description}</Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="inner-box">
                                <h5>산책로 길이</h5>
                                <Card.Text>{Data[ 13 ].distance}km</Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="inner-box">
                                <h5>편의 시설</h5>
                                <Card.Text>{Data[ 13 ].convenience}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default Trail;
{/* {
                    parks.map((park, index) => {
                        return(
                            <Col md={4}  key={index}>
                                <ParkCard park={park} parks={parks} index={index}></ParkCard>
                            </Col>
                        )
                    })
                } */}