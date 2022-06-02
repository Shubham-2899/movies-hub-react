import React, { useContext, useEffect, useState } from "react";
import Genres from "../../components/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import { PageContext } from "../../Helpers/PageContexts";
import useFetch from "../../hooks/useFetch";
import useGenre from "../../hooks/useGenres";
import { GenreFormat } from "../../Interfaces";

const Movies = () => {
  const [genres, setGenres] = useState<GenreFormat[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<GenreFormat[]>([]);
  const genreforURL = useGenre(selectedGenres);

  const { page, setPage, numOfPages } = useContext(PageContext);

  const {
    content,
    isLoading,
    error,
  } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`,
    genreforURL
  );

  useEffect(() => {
    return () => {
      // console.log("inside useEffect of Movies ",page,genres);
      setSelectedGenres([]);
    };
  }, []);

  // console.log("inside Movies",content);

  // if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <span className="pageTitle">Discover Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content.length ?
          content.map((c) => (
            <SingleContent
              id={c.id}
              key={c.id}
              poster={c.poster_path}
              title={c.title}
              date={c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          )):<h2>Movie Not Found With Required Genres</h2>}
      </div>
      {numOfPages > 1 && (
        <CustomPagination
          setPage={setPage}
          numOfPages={numOfPages}
          page={page}
        />
      )}
    </div>
  );
};

export default Movies;

// const [content, setContent] = useState<trendingFormat[]>([]);
// const [page, setPage] = useState(1);
// const [numOfPages, setNumOfPages] = useState(1);
// const [genres,setGenres]=useState<GenreFormat[]>([]);
// const [selectedGenres,setSelectedGenres]=useState<GenreFormat[]>([]);
// const genreforURL = useGenre(selectedGenres);

// const fetchMovies = async () => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/discover/movie?api_key=8802ce576b2e68c5d93fa88c487234f7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
//   );
//   //  console.log(genreforURL);
//   setContent(data.results);
//   setNumOfPages(data.total_pages);
// };

// useEffect(() => {
//   fetchMovies();
//    // eslint-disable-next-line
// }, [page,genreforURL]);
