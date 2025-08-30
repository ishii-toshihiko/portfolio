import { Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"
import Works from "./pages/Works"
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';


const App=()=>{
   return(
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/works" element={<Works/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App