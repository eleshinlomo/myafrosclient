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
  const [users, setUsers] = useState([])

  

  // get all users
  const getUsers =async ()=>{
    await fetch('api/users/', {
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
      

    }).catch((err)=>{
      console.log('ERROR:', err.message)
    })
  }


// get all agents
  const getAgents =async ()=>{
    await fetch('api/agents/', {
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
    
    getAgents()
    getUsers()
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
       

        <Box display='flex' justifyContent='center' alignItems='center' sx={{
          color: '#00FFFF'
        }}>

        <Box sx={{
          textAlign: 'center'
        }}>
         
         <Box>
        <Typography>
                 {
                  <Typewriter align='center' text={'MEET OUR EMPLOYEES'} />
                 }
                </Typography>
                </Box>
        

        {/* AI Section */}

        {/* first section */}
          
            <Box  xl={6} sx={{ 
                display: 'flex',
                color: '#00FFFF',
                textAlign: 'center',
                margin: 2
              
              }}>
              
              
              {agent.slice(0, 2).map(agent =>
               
                <Box  key={agent.id}
                  sx={{
                  marginTop: 7,
                  marginX: 2,
                  
                  
                  [theme.breakpoints.down('lg')]: {
                    display: 'block'
                  }
    
                }}>
                
                <Link to={`/agentdetailpage/${agent.id}`}>

                
               
             {/* Image */}
               
                <Box sx={{
                
                  height: 200,
                  width: 'auto',
                  borderRadius: '60%',
                  
                }}>
                  <img src={`${agent.image}`} alt="AI" className='img' />
                </Box>

              {/* Agent Profile */}

               
                    
                    <Paper sx={{
                      color: 'white',
                      bgcolor: '#25383C',
                      borderRadius: '40px',
                      overflow: 'hidden',
                      paddingY: 4,
                      paddingX: 2,
                      elevation: 2,
                     
                    }}>
                    <Typography align='center'>
                    <h3>{agent.name}</h3>
                    </Typography>

                    <Typography sx={{
    
                    }}>
                    <h3>{agent.profile}</h3>
                    </Typography>
                    <Button variant='contained' size='small' sx={{backgroundColor:'#00FFFF', color: 'black'}}>Get Started</Button>
                    </Paper>
                    </Link>

                    </Box>
                    
                  )}
                  </Box>


                   {/* second section */}
          
            <Box  xl={6} sx={{ 
                display: 'flex',
                color: '#00FFFF',
                textAlign: 'center',
                margin: 2
              
              }}>
              
              
              {agent.slice(2, 4).map(agent =>
               
                <Box  key={agent.id}
                  sx={{
                  marginTop: 7,
                  marginX: 2,
                  
                  
                  [theme.breakpoints.down('lg')]: {
                    display: 'block'
                  }
    
                }}>
                
                <Link to={`/agentdetailpage/${agent.id}`}>

                
               
             {/* Image */}
               
                <Box sx={{
                
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

                    </Box>
                    
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
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Home;
