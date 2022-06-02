import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import TvIcon from "@mui/icons-material/Tv";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const StyledBottomNavigation = styled(BottomNavigation)({
  width: "100%",
  position: "fixed",
  bottom: 0,
  backgroundColor: "#2d313a",
  zIndex: 100,
});

const StyledBottomNavigationAction=styled(BottomNavigationAction)(
  {
    color:"white",
  }
)


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();


  useEffect(()=>{
    if(value===0) navigate("/");
    else if(value === 1) navigate("/movies");
    else if(value === 2) navigate("/series");
    else if(value === 3) navigate("/search");
  },[value,navigate]);

  return (
    <Box sx={{ width: 500 }}>
      <StyledBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <StyledBottomNavigationAction
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <StyledBottomNavigationAction
          label="Movies"
          icon={<MovieIcon />}
        />
        <StyledBottomNavigationAction
          label="TV Series"
          icon={<TvIcon />}
        />
        <StyledBottomNavigationAction
          label="Search"
          icon={<SearchIcon />}
        />
      </StyledBottomNavigation>
    </Box>
  );
}
