import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import UpdateFav from '../Models/UpdateFav';
import axios from 'axios';


function MovieFav(props) {

    console.log(props);
  const [clickedDelBtn, setClickedDelBtn] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);
  
  const handleclose = () => {
    setShowUpdate(false);
  }
  const handleupdate = (item) => {
    setShowUpdate(true);
    setClickedMovie(item);
}

const handledelete = async (id) => {
  
  console.log(id);
  const serverURL = `${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`
  const axiosRes = await axios.delete(serverURL);
  // console.log("data from server", axiosRes);
  takeNewArrFromChild(axiosRes.data);
}


const takeNewArrFromChild = (arr) => {
    props.takeNewArr(arr);

}
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.posterpath} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="text">
            <div className="release-date">Release date: {props.releasedate}</div>
            <div className="overview">Overview: {props.overview}</div>
            <div className="comment">Comment: {props.comment}</div>

          </Card.Text>
          <Button variant="success" onClick={() => { handleupdate(props) }}>Update</Button>
          <Button variant="danger" onClick={() => { handledelete(props.id) }}>Delete</Button>
        </Card.Body>
      </Card>
      <UpdateFav showFlag={showUpdate} handleclose={handleclose} item={clickedMovie} takeNewArrFromChild={takeNewArrFromChild} />

    </>
  )
}
export default MovieFav;