import Movie from '../Movie/Movie';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let mappedData = [];
function MovieList(props) {
    console.log(props);
    return (
        <>
            <Row xs={1} md={5} className="g-4">
                {mappedData = props.dataList.map((item, idx) => (
                    <Col key={idx}>
                        <Movie key={idx} title={item.title} posterpath={item.posterpath} releasedate={item.releasedate} overview={item.overview} />
                    </Col>
                ))}
            </Row>
            <Movie dataMovie={mappedData} />
        </>
    );
}
export default MovieList;