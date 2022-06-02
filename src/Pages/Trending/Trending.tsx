import  { useContext } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import { PageContext } from "../../Helpers/PageContexts";
import useFetch from "../../hooks/useFetch";
import "./Trending.css";

const Trending = () => {
  const { page, setPage } = useContext(PageContext);

  const { content, error } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=8802ce576b2e68c5d93fa88c487234f7&page=${page}`
  );

  if(error) return <h1>{error}</h1>

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) =>
            c.media_type === "movie" ? (
              <SingleContent
                id={c.id}
                key={c.id}
                poster={c.poster_path}
                title={c.title}
                date={c.release_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            ) : (
              <SingleContent
                id={c.id}
                key={c.id}
                poster={c.poster_path}
                title={c.name}
                date={c.first_air_date}
                media_type={c.media_type}
                vote_average={c.vote_average}
              />
            )
          )}
      </div>
      <CustomPagination numOfPages={10} setPage={setPage} page={page} />
    </div>
  );
};

export default Trending;

//without using Custom Hooks

// const [content, setContent] = useState<trendingFormat[]>([]);
// const [page, setPage] = useState(1);

// const fetchTrending = async () => {
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/trending/all/day?api_key=8802ce576b2e68c5d93fa88c487234f7&page=${page}`
//   );

//   // console.log(data);
//   setContent(data.results);
// };

// useEffect(() => {
//   fetchTrending();
//   // eslint-disable-next-line
// }, [page]);
