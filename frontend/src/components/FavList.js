import { useEffect, useState } from "react";
import axios from "axios";
import MovieFavList from "./MovieList/MovieFavList";
import MovieFav from "./Movie/MovieFav";
function FavList() {
    const [favMovies, setFavMovies] = useState([]);
    const sendReq = async () => {
        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/getMovies`;
        const result = await axios.get(serverUrl);
        // console.log(result.data);
        setFavMovies(result.data);
    }

    const takeNewArrFromMovieFavList = (arr) => {
        setFavMovies(arr);
    }

    useEffect(() => {
        sendReq();
    }, []);

  
    return (
        <>
            <h1>Favlist</h1>
            <MovieFavList dataList={favMovies} takeNewArrFromMovieFavList ={takeNewArrFromMovieFavList} />
        </>
    )
}
export default FavList;







