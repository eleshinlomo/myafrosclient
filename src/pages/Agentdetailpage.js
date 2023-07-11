import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import {Button, Input} from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Agents from '../components/Agents';

const Aidetailpage = () => {
  const [agent, setAgent] = useState(null);
  const [isSpanish, setIsSpanish] = useState(false)
  const [spanishResponse, setSpanishResponse] = useState(null)
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [user_input, setUser_input] = useState('')
  const [message, setMessage] = useState()
  const [text, setText] = useState('')
  const { id } = useParams();

  const getAgent = async () => {
    if (!id) return null;
    try {
      const response = await fetch(`https://myafrosserver.vercel.app/api/agent/${id}/`, {
        mode: 'cors',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setAgent(data);
      if(data.name === 'Anika')
        setIsSpanish(true)
      if(data.name === 'Linda')
        setIsEnglish(true)
      
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  useEffect(() => {
    getAgent();
  }, []);



  // english translator
  const [isEnglish, setIsEnglish] = useState(false)
  const [englishResponse, setEnglishResponse] = useState(false)

  const englishTranslator = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://myafrosserver.vercel.app/api/english/', {
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
      setEnglishResponse(data.generated_text);
      setFetchCompleted(true);
    } catch (err) {
      console.log(err);
    }
  };


// spanish translator
  const spanishTranslator = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://myafrosserver.vercel.app/spanishagent/translate_to_spanish/', {
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

  return <h3>{fetchCompleted && (currentText)}</h3>
};
  


  

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

  return (
    <div>
    <ThemeProvider theme={theme}>
    <Grid container justifyContent='center' alignItems='center'>

     

      {agent && (
        <Grid sx={{
           mt: 6
        }}>
  

          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent>
          <Typography>
        <h3>{`${agent.name} here, How may I help you today?`}</h3>
        </Typography>
          </CardContent>
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
         
            }}

            image = {`https://myafrosserver.vercel.app/${agent.image}`}
            
          />
          <CardContent sx={{ flexGrow: 1 }}>
          <Typography paragraph >
          Just so you know, I have been capped at 30 tokens.<br/>
          This means I cannot give long responses.<br/>
           You may wish to 
          <Button href='/register'>Sign Up</Button> or 
          <Button href='/login'>Login</Button> to get free credits for uncapped
          responses.
        </Typography>

            
              {/* if spanish agent */}
      {isSpanish && (
        <Box>
        
          <form onSubmit={spanishTranslator}>
            <Input value={user_input} name='user_input'onChange={(e)=>setUser_input(e.target.value)} 
            placeholder='I will translate to Spanish'
            sx={{
              borderBottom: '2px solid #00FFFF',
              
              color: 'white',
              
      
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
            <Typography gutterBottom variant="body1" component="h5" color='blue'>
             
               {spanishResponse && (<Typewriter text={spanishResponse} />)}
              
              </Typography>
             )}
            
          
      
          </Box>
          )}



          {/* IS English */}

          {isEnglish && (
        <Box>
        
          <form onSubmit={englishTranslator}>
            <Input value={user_input} name='user_input'onChange={(e)=>setUser_input(e.target.value)} 
            placeholder='I will translate to English'
            sx={{
              borderBottom: '2px solid #00FFFF',
              
              color: 'white',
              
      
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
            <Typography gutterBottom variant="body1" component="h5" color='blue'>
             
               {englishResponse && (<Typewriter text={englishResponse} />)}
              
              </Typography>
             )}
             
            
          
      
          </Box>
          )}

      
            
          </CardContent>
          
        </Card>
        
      
      </Grid>
      )}
      
</Grid>
</ThemeProvider>
    </div>
  );
};

export default Aidetailpage;
