import { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode
} 

export const ThemeContext = createContext(theme)

// Provider Component
export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
 return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
