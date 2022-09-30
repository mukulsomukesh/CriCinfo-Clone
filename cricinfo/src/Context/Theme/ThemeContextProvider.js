import React,{createContext, useReducer} from "react";
import {reducer} from "./reducer"

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer,{
    theme:"day",
  });
  return (
  <>
  <ThemeContext.Provider value={{state, dispatch}}>
    {children}
  </ThemeContext.Provider>
  </>
  );
};

export default ThemeContextProvider;