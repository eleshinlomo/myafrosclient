
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
import Signuppage from './pages/Signuppage';
import Agentdetailpage from './pages/Agentdetailpage';
import Footer from './components/Footer';
import Menu2 from './components/Menu2'


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
      <Menu2 />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/agentdetailpage/:id' element={<Agentdetailpage />} />
        </Routes>
        <Footer />
        </ThemeProvider>
    
      
    </div>
  );
}

export default App;
