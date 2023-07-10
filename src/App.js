
import {Box, 
  ThemeProvider, 
  Grid,  
  Typography, 
  createTheme 
} from '@mui/material';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Nav from './components/Nav';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Agentdetailpage from './pages/Agentdetailpage';
import Footer from './components/Footer';



function App() {
  const theme = createTheme(
    {
      palette:{
        mode: 'dark'
      }
    }
  )
  return (

    <div className="">
    <ThemeProvider theme={theme}>
      <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/register' element={<Registerpage />} />
          <Route path='/agentdetailpage/:id' element={<Agentdetailpage />} />
        </Routes>
        <Footer />
        </ThemeProvider>
    
      
    </div>
  );
}

export default App;
