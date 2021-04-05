import "../styles/globals.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core"
import theme from "../theme"

function MyApp({ Component, pageProps }) {
  const sheets = new ServerStyleSheets()
  return sheets.collect(
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
