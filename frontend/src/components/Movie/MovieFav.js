import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import UpdateFav from '../Models/UpdateFav';
import DeleteFav from '../Models/DeleteFav';


function MovieFav(props) {

    console.log(props);
  const [show, setShow] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);
  const handleshow = (item) => {
    setShow(true);
    setClickedMovie(item)
  }
  const handleclose = () => {
    setShowUpdate(false);
  }
  const handleupdate = (item) => {
    setShowUpdate(true);
    setClickedMovie(item);
}
const takeNewArrFromChild = (arr) => {
    props.takeNewArr(arr);
}
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.poster_path} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="text">
            <div className="release-date">Release date: {props.release_date}</div>
            <div className="overview">Overview: {props.overview}</div>
          </Card.Text>
          <Button variant="success" onClick={() => { handleupdate(props) }}>Update</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
      <UpdateFav showFlag={showUpdate} handleclose={handleclose} item={clickedMovie} takeNewArrFromChild={takeNewArrFromChild} />
    </>
  )
}
export default MovieFav;