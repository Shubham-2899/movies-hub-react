import { ThemeProvider } from "@emotion/react";
import {  Pagination } from "@mui/material";
import React from "react";
import { theme } from "../../theme";


type Props={
    setPage:React.Dispatch<React.SetStateAction<number>>,
    page:number,
    numOfPages:number,
}

const CustomPagination = ({ setPage,page,numOfPages=10}:Props) => {

  
  const PageChange=(event:React.ChangeEvent<unknown>,page:number) => {
    //   console.log(page)
    setPage(page);
    window.scroll(0, 0);
  };


  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider  theme={theme}>
        <Pagination
          count={numOfPages}
          onChange={(event,page)=>{PageChange(event,page)}}
          color="primary"
          page={page}
        />
        </ThemeProvider>
    </div>
  );
};

export default CustomPagination;


