import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../Helpers/PageContexts";
import { trendingFormat } from "../Interfaces";

const useFetch = (url: string, genreforURL?: string) => {
  const [content, setContent] = useState<trendingFormat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { page, setNumOfPages } = useContext(PageContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        //   console.log("inside fetch"+res);
        setContent(res.data.results);
        setNumOfPages(res.data.total_pages);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, [url, page, genreforURL]);


  //   console.log("inside useFetch",genreforURL)
  //   console.log("inside useFetch page number=",page)

    // console.log("Inside useFecth",content);

  return { content: content, isLoading, error };

};

export default useFetch;
