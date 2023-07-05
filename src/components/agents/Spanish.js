import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Input, Button, Grid} from '@mui/material';
import '../App.css'

const Aidetailpage = () => {
  const [agent, setAgent] = useState(null);
  const [isSpanish, setIsSpanish] = useState(false)
  const [spanishResponse, setSpanishResponse] = useState(null)
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false)
  const [user_input, setUser_input] = useState('')
  const [message, setMessage] = useState()
  const [text, setText] = useState('')
  const { id } = useParams();

  const getAgent = async () => {
    if (!id) return null;
    try {
      const response = await fetch(`/api/agent/${id}/`, {
        mode: 'cors',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setAgent(data);
      if(data.name === 'Anika')
        setIsSpanish(true)
      if(data.name === 'Chimzy')
        setIsEnglish(true)
      
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  useEffect(() => {
    getAgent();
  }, []);



  const spanishTranslator = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/spanishagent/translate_to_spanish/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_input
        })
      });

      const data = await response.json();
      setSpanishResponse(data.generated_text);
      setFetchCompleted(true);
    } catch (err) {
      console.log(err);
    }
  };





  useEffect(() => {
    getAgent();
  
  }, []);

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
  



  return (
    <div>
    <Grid xm={12} sm={12} md={12} lg={12} xl={12} container justifyContent='space-evenly' alignItems='center' sx={{
  
        color: '#00FFFF'
    
    }}>

      <Grid item>

      {agent && (
        <Box>
        <Typography sx={{
          textAlign: 'center'
        }}>
        <p>{agent.name}</p>
        </Typography>
          <img src={agent.image} className='img' alt="ai" />
        </Box>
      )}
      </Grid>



      


{/* if spanish agent */}
  
      <Grid item sx={{
        color: '#00FFFF'
      }}>
{isSpanish && (
        <Box>
          
          <form onSubmit={spanishTranslator}>
            <Input value={user_input} name='user_input'onChange={(e)=>setUser_input(e.target.value)} 
            placeholder='I will translate to Spanish'
            sx={{
              borderBottom: '2px solid #00FFFF',
              mr:3,
              color: 'white',
              width: '15rem'
      
            }}
             />
             
            <Button type="submit" variant="contained" sx={{
              bgcolor: '#00FFFF',
              color: 'black'
            }}>
              Translate
            </Button>
          </form>

          {fetchCompleted && (
            <Box>
              <Typography>
                <Typewriter text={spanishResponse} />
              </Typography>
            </Box>
          )}
        </Box>
      )}
      </Grid>
      

<Grid item>
      {/* if English agent */}
    
      {isEnglish && (
        <p>Hello. I am Chimzy and I speak English</p>
      )

      }
      </Grid>
      
    

</Grid>
    </div>
  );
};

export default Aidetailpage;
