import { ThemeProvider } from "@emotion/react"
import { ColorModeContext, useMode } from "./theme"
import {Box, CssBaseline, Divider} from "@mui/material"
import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import Main from "./Components/Main/Main"
import Scroll from "./Components/Scroll/Scroll"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

// to responsive design in material ui we have 4 scales begin from smaller to bigger [xs, sm , md , lg]

function App() {

  const [theme, colorMode] = useMode()

  return (
    
    <>
      
      <ColorModeContext.Provider value={colorMode}>
      
        <ThemeProvider theme={theme}>

          <CssBaseline />
          
          <Header />

          <Box bgcolor={theme.palette.bg.main}>

            <Hero />
            <Divider sx={{my: 10}} variant="middle" />
            <Main />
            <Divider sx={{my: 10}} variant="middle" />
            <Contact />
            <Divider sx={{my: 10}} variant="middle" />
            <Footer />
          </Box>

          <Scroll />

        </ThemeProvider>
      
      </ColorModeContext.Provider>

    </>
  )
}

export default App