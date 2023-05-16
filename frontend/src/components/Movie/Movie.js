import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ModalMovie from '../Models/ModelMovie';
function Movie(props) {
    const [show, setShow] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const handleshow = (item) => {
        setShow(true);
        setClickedMovie(item)
    }
    const handleclose = () => {
        setShow(false);
    }
    //console.log(props);
    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.posterpath} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className="text">
                        <div className="release-date">Release date: {props.releasedate}</div>
                        <div className="overview">Overview: {props.overview}</div>
                    </Card.Text>
                    <Button variant="primary" onClick={() => { handleshow(props) }}>Add to the favorite list</Button>
                </Card.Body>
            </Card>
            <ModalMovie showFlag={show} handleclose={handleclose} dataModal={clickedMovie} />
        </>
    )
}
export default Movie;