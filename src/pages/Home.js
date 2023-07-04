import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import '../App.css'
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
  const [agent, setAgent] = useState([])
  const [test, setTest] = useState(null)

  // Test API

  
  


  const getAgent =async ()=>{
    await fetch('api/', {
      mode: 'cors',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then((data)=>{
      if(!data) return null
      return  data.json()
    })

    .then((res)=>{
      console.log(res)
      setAgent(res)

    }).catch((err)=>{
      console.log('ERROR:', err)
    })
  }

  useEffect(()=>{
    
    getAgent()
  }, [])


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
      mode: 'light'
    }
  });

  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <Grid container spacing={2} xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="center" alignItems="center">
          
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              
              <Box sx={{ 
                display: 'block',
                position: 'relative',
                color: '#00FFFF',
                textAlign: 'center',
                margin: 2
              
              }} xs={12} sm={12} md={12} lg={12} xl={12}>

                 <Typography>
                 {
                  <Typewriter text={'MEET OUR EMPLOYEES'} />
                 }
                </Typography>

              <Box sx={{
                  display: 'flex',
                  gap: 5,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginTop: 7,
                  marginX: 2,
                  width: 'auto',
                  [theme.breakpoints.down('lg')]: {
                    display: 'block'
                  }
    
                }}>

               
              
              {agent.map(agent =>
               
                <div key={agent.id}>
                <Link to={`/aidetailpage/${agent.id}`}>

                

             {/* Image */}

                <Box sx={{
                  width: '100%',
                  height: 200,
                  borderRadius: '60%',
                  
                }}>
                  <img src={`${agent.image}`} alt="AI" className='img' />
                </Box>

              {/* Agent Profile */}

               
                    
                    <Paper sx={{
                      color: 'white',
                      bgcolor: '#25383C',
                      paddingY: 4,
                      paddingX: 3,
                      borderRadius: '40px',
                      overflow: 'hidden',
                      elevation: 2
                    }}>
                    <Typography align='center'>
                    <h3>{agent.name}</h3>
                    </Typography>

                    <Typography>
                    <h3>{agent.profile}</h3>
                    </Typography>
                    <Button variant='contained' size='small' sx={{backgroundColor:'#00FFFF', color: 'black'}}>Get Started</Button>
                    </Paper>


                   

                    </Link>
                    </div>
                  )}
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
                  
              </Box>
            </Grid>


  

            
          


        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Home;
