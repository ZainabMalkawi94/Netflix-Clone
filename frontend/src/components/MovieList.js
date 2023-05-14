import Movie from './Movie';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let mappedData = [];
function MovieList(props) {
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {mappedData = props.dataList.map((item, idx) => (
                    <Col key={idx}>
                        <Movie key={idx} title={item.title} posterPath={item.posterPath} releaseDate={item.releaseDate} overview={item.overview} />
                    </Col>
                ))}
            </Row>
            <Movie dataMovie={mappedData} />
        </>
    );
}
export default MovieList;