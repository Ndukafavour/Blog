import { useState, useReducer, useEffect } from "react";
import { createContext } from "react";


  

export const ThemeContext = createContext(null);


const Theme = ({ children }) => {
    const  [watch,setWatch]=useState(JSON.parse(localStorage.getItem("userInformation")))
    
 

    return (
        <ThemeContext.Provider value={{ watch,setWatch}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default Theme
