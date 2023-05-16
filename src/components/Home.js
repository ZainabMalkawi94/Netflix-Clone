import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList/MovieList";
function Home() {

    const [moviesData, setMoviesData] = useState([]);
    const sendReq = async () => {

        const serverUrl = `${process.env.REACT_APP_SERVER_URL}/trending`;
        const result = await axios.get(serverUrl);
        setMoviesData(result.data);
    }
    useEffect(() => {
        sendReq();
    }, []);
    return (
        <>
            <h1>Home</h1>
            <MovieList dataList={moviesData} />
        </>
    )
}
export default Home;










