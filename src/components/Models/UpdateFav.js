import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
function UpdateFav(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            title: e.target.title.value,
            posterpath: e.target.posterpath.value,
            releasedate: e.target.releasedate.value,
            overview: e.target.overview.value,
            comment: e.target.comment.value
        }
        console.log(props.item.id);
        const serverURL = `${process.env.REACT_APP_SERVER_URL}/UPDATE/${props.item.id}`
        const axiosRes = await axios.put(serverURL, obj);
        // console.log("data from server", axiosRes);
        props.handleclose();
        props.takeNewArrFromChild(axiosRes.data);
    }
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleclose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Movie title</Form.Label>
                            <Form.Control
                                name="title"
                                type="text"
                                defaultValue={props.item.title}
                                readOnly

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>poster Path</Form.Label>
                            <Form.Control
                                name="posterpath"
                                type="text"
                                defaultValue={props.item.posterpath}

                                readOnly
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>release date</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="releasedate"
                                    defaultValue={props.item.releasedate}
                                    readOnly

                                />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>overview</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="overview"
                                    defaultValue={props.item.overview}
                                    readOnly

                                />


                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>comment</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name="comment"
                                    defaultValue={props.item.comment}
                                />
                            </InputGroup>
                        </Form.Group>
                        <Button type="submit">Submit form</Button>

                    </Form>

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" onClick={props.handleclose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
export default UpdateFav;









