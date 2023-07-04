
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
import Aidetailpage from './pages/Aidetailpage';
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
    
      <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/signup' element={<Signuppage />} />
          <Route path='/aidetailpage/:id' element={<Aidetailpage />} />
        </Routes>
        <Footer />
    
      
    </div>
  );
}

export default App;
