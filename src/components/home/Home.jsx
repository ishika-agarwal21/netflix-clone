import React, { useEffect, useState } from 'react'
import './Home.scss';
import axios from 'axios';
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
const apiKey = "bdcb07ce0f60b85a48f0e0b8d81f0273";
const url = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p";

const Card= ({img}) => {
    return( <div className="card">
      <img width={'200px'} height={'280px'} src={img} />
    </div>)
   
}

const Row = ({
  title,
  arr = [],
}) => {
  return (
    <div className="row">
      <h1>{title}</h1>
      <div>
        {  arr.map((item, index) => (
                <Card key= {index} img={`${imageUrl}/w200${item.poster_path}`}/>
            ))
        }
      </div>
    </div>
  );
};
const Home = () => {

    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);


    useEffect(() => {
        const fetchUpcoming =  async () => {
         const {data: {results}} = await   axios.get(`${url}/movie/upcoming?api_key=${apiKey}`);
         setUpcomingMovies(results);
         console.log(upcomingMovies)
        };

         const fetchPopular = async () => {
           const {
             data: { results },
           } = await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
           setPopularMovies(results);
           console.log(popularMovies);
         };

          const fetchNowPlaying = async () => {
            const {
              data: { results },
            } = await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`);
            setNowPlayingMovies(results);
          };

           const fetchTopRated = async () => {
             const {
               data: { results },
             } = await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`);
             setTopRatedMovies(results);
           };
        fetchUpcoming();
        fetchPopular();
        fetchNowPlaying();
        fetchTopRated();
    }, [])

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: `url('https://www.pinkvilla.com/images/2023-07/926442909_barbie-poster-2.jpg')` 
        //   popularMovies[0]
        //     ? `url(${`${imageUrl}/w200${popularMovies[0].poster_path}`})`
        //     : " ",

        ,}}
      >
        {popularMovies[2] && <h1>{popularMovies[2].original_title}</h1>}
        {popularMovies[2] && <p>{popularMovies[2].overview}</p>}

        <div>
          <button>
            <BiPlay /> Play{" "}
          </button>
          <button>
            My List <AiOutlinePlus />{" "}
          </button>
        </div>
      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Popular on Netflix"} arr={popularMovies} />

      <Row title={"Now Playing"} arr={nowPlayingMovies} />

      <Row title={"Top Rated"} arr={topRatedMovies} />
    </section>
  );
}

export default Home
