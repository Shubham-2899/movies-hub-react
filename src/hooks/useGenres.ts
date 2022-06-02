
import { GenreFormat } from "../Interfaces";

const useGenre = (selectedGenres:GenreFormat[]) => {
    if (selectedGenres.length < 1) return "";

  
    const GenreIds = selectedGenres.map((g) => g.id);
    const str = GenreIds.join(',');
    // console.log(str);
    return str;
}
  
  export default useGenre;