import { ThemeProvider } from "@emotion/react";
import { Chip } from "@mui/material";
import axios from "axios";
import React, {  useEffect } from "react";
import { GenreFormat } from "../Interfaces";
import { theme } from "../theme";

type Props = {
  type: string;
  selectedGenres: GenreFormat[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<GenreFormat[]>>
  genres: GenreFormat[];
  setGenres: React.Dispatch<React.SetStateAction<GenreFormat[]>>
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Genres = ({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}: Props) => {

 

  const fetchGenres = async () => {

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    // console.log(data);
    setGenres(data.genres);
  };

  useEffect(()=>{
    fetchGenres();

    return () => {
        setGenres([]);
        setPage(1);
      };
    // eslint-disable-next-line
  },[])

    const handleAdd=(genre:GenreFormat)=>{
        setSelectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g:GenreFormat)=>g.id!==genre.id));
        setPage(1);
    }

    const handleRemove=(genre:GenreFormat)=>{
        setSelectedGenres(
            selectedGenres.filter((selected:GenreFormat) => selected.id !== genre.id)
          );
          setGenres([...genres, genre]);
          setPage(1);
    }

  return <div style={{ padding: "6px 0" }}>
     <ThemeProvider  theme={theme}>
      { selectedGenres &&
          selectedGenres.map((genre:GenreFormat)=>(
            <Chip  style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            color="secondary"
            clickable
            size="small" 
            onDelete={()=>handleRemove(genre)}/>
          ))
      }
      { genres &&
          genres.map((genre:GenreFormat)=>(
            <Chip  style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            clickable
            size="small" 
            color="primary"
            onClick={()=>handleAdd(genre)}/>
          ))
      }
      </ThemeProvider>
  </div>;
};

export default Genres;


