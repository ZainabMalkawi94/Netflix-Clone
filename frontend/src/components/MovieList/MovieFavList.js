import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MovieFav from '../Movie/MovieFav';
function MovieFavList(props) {

    const takeNewArr = (newarr) => {
        props.takeNewArrFromMovieFavList(newarr)
    }

    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.dataList.map((item, idx) => (
                    <Col key={idx}>
                        <MovieFav key={idx} id = {item.id} title={item.title} poster_path={item.posterPath} release_date={item.releaseDate} overview={item.overview} takeNewArr={takeNewArr}/>
                    </Col>
                ))}
            </Row>
            <MovieFav takeNewArr={takeNewArr} />

        </>
    );
}
export default MovieFavList;