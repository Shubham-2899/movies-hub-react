import React from "react"
import { createContext, useState } from "react"

// export const PageContext= createContext();


type PageContextType={
    page:number,
    setPage: React.Dispatch<React.SetStateAction<number>>
    numOfPages:number,
    setNumOfPages:React.Dispatch<React.SetStateAction<number>>
};

type PageContextProviderProps={
    children:React.ReactNode,
}

export const PageContext=createContext<PageContextType >({} as PageContextType)

export const PageContextProvider=({children}:PageContextProviderProps)=>{
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState(1);
    return <PageContext.Provider value={{page,setPage,numOfPages,setNumOfPages}}>
        {children}
    </PageContext.Provider>
}