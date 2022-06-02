import {
  Routes as CustomRoutes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { Box, Container } from "@mui/system";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import SimpleBottomNavigation from "./components/MainNav";

const Routes = () => {
  return (
    <Router>
      <Box className="app">
        <Container>
          <CustomRoutes>
            <Route path="/" element={<Trending />} />
            {/* <PageContextProvider> */}
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Trending />} />
            {/* </PageContextProvider> */}
          </CustomRoutes>
        </Container>
         <SimpleBottomNavigation />   
      </Box>
    </Router>
  );
};

export default Routes;
