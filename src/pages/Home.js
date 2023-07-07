import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import '../App.css'
import Test from '../components/Test'
import Agents from '../components/Agents'
import {
  Box,
  ThemeProvider,
  Grid,
  Typography,
  createTheme,
  Button,
  Paper,
  Input
} from '@mui/material';

function Home() {
  const [countAnikaClicks, setCountAnikaClicks] = useState(0)
  const [countChimzyClicks, setCountChimzyClicks] = useState(0)
  

   // Typewriter text

  const Typewriter = ({ text }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
  
    useEffect(() => {
      let timer;
      if (text && currentIndex < text.length) {
        timer = setInterval(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, Math.random() * 200 + 50);
      }
  
      return () => clearInterval(timer);
    }, [currentIndex, text]);
  
    return <h3>{currentText}</h3>;
  };



  

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
    <div className="">
      <ThemeProvider theme={theme}>
       
     <Grid contianer>
        <Grid item  display='flex'  sx={{
          color: '#00FFFF',
          mt: 8
        }}>

        <Box sx={{
          width: '100%',
          textAlign: 'center'
        }}>


        {/* header */}
        <Box>
         
        

        <Box>
           <Typography variant='h6'>
                       <Typewriter text={ "AI POWERED FREELANCERS AT YOUR SERVICE"} />
          </Typography>
                </Box>

                </Box>
         
         {/* main */}
         <Box>
        <Typography>
                 
                  MEET OUR EMPLOYEES
                 
                </Typography>

                </Box>

                <Box>
                  <Agents />
                </Box>

               
        
      



                  <Box>
                 <Typography sx={{
                  margin: 3,
                  fontSize:18,
                  fontWeight: 'bold'
                  }}>
                  WHAT'S NEW
                 </Typography>
                  </Box>

                  <Box xl={4} sx={{
                    
                  }}>
  <h3>Anika Clicks: {countAnikaClicks}</h3>
  <h3>Chimzy Clicks: {countChimzyClicks}</h3>
</Box>

 

</Box>



        </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Home;
