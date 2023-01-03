import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/DefaultTheme"
import {GlobalStyle} from "./styles/Global"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </ThemeProvider>
  )
}
