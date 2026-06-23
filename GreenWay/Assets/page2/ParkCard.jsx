import { Card } from "react-bootstrap";
import parksData from "../data/parksData.js";

function ParkCard({ Data, index }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{Data[index].name}</Card.Title>
                <Card.Text>{Data.convenience}</Card.Text>
            </Card.Body>
        </Card>
    )
}