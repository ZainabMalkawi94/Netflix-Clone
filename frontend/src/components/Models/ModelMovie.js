import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
function ModalMovie(props) {
  const [comment, setComment] = useState('');
  const handleSubmit = async () => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}/addMovie`;
      console.log(serverUrl);
      const data = {
        title: props.dataModal.title,
        posterpath: props.dataModal.posterpath,
        releasedate:props.dataModal.releasedate,
        overview: props.dataModal.overview,
        comment: comment
      };
      console.log(data);
      await axios.post(serverUrl, data);
      // props.handleClose();
      // props.onMovieAdded();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal show={props.showFlag} onHide={props.handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.dataModal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={props.dataModal.posterpath} rounded width='100%' />
          <Form.Control
            type="text"
            placeholder="Add your comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleclose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add to favorites
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalMovie;