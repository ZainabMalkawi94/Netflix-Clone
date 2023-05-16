import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MovieFav from '../Movie/MovieFav';
function MovieFavList(props) {

    const takeNewArr = (newarr) => {
        props.takeNewArrFromMovieFavList(newarr)
    }

    return (
        <>
            <Row xs={1} md={5} className="g-4">
                {props.dataList.map((item, idx) => (
                    <Col key={idx}>
                        <MovieFav key={idx} id = {item.id} title={item.title} posterpath={item.posterpath} releasedate={item.releasedate} overview={item.overview} takeNewArr={takeNewArr} comment = {item.comment}/>
                    </Col>
                ))}
            </Row>
            <MovieFav takeNewArr={takeNewArr} />

        </>
    );
}
export default MovieFavList;