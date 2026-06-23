import { useParams } from 'react-router'
import { Container, Row, Col, Card } from 'react-bootstrap';
// import ParkCard from './ParkCard.jsx'
import './Trail.css'
import parksData from '../data/parksData.js';

function Trail({ Data,index }) {
    let { id } = useParams();

    let trail = Data.find((item) => {
        return item.id == id;
    })

    let trailIndex = Data.findIndex((item) => {
        return item.id == id;
    })
    return (
        <div>
            <Container>
                <Row>
                    <h1>{trail.name}</h1>
                    <Col md={4}>
                        <img src={trail.image} style={{ width: '600px', height: '600px', backgroundSize: 'cover' }} />
                    </Col>
                    <Card style={{ width: '23rem', marginLeft: 'auto' }}>
                        <Card.Body>
                            <div className="inner-box">
                                <h5>주소</h5>
                                <Card.Text>{trail.address}</Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="inner-box">
                                <h5>특징</h5>
                                <Card.Text>{trail.description}</Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="inner-box">
                                <h5>산책로 길이</h5>
                                <Card.Text>{trail.distance}m</Card.Text>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="inner-box">
                                <h5>편의 시설</h5>
                                <Card.Text>{trail.convenience}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default Trail;
