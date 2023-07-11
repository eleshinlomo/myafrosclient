import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
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







export default function Home() {

  // get all agents
  const [agents, setAgents] = useState([])
  

  const getAgents =async ()=>{
    await fetch('https://myafrosserver.vercel.app/api/agents/', {
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
      setAgents(res)

    }).catch((err)=>{
      console.log('ERROR:', err)
    })
  }

  useEffect(()=>{
    
    getAgents()

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
    mode: 'dark'
  }
});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h2"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              AI FRELANCERS AT YOUR SERVICE 24/7
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph sx={{
              [theme.breakpoints.down('md')]:{
                variant: 'body1'
              }
            }}>
              My Afros is an AI powered freelancing web platform. 
              A place to get every task done using Artificial Intelligence technology.
              Our Agents have been trained with one of the best Prompt Engineering techniques.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">GET STARTED</Button>
              <Button variant="outlined">UPCOMING FREELANCE AGENTS</Button>
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}

        {/* important message */}

        <Box >
          <Container maxWidth='sm' sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <Typography>
            While we wait for the parent domain to propagate and provision
             changes to database , 
            please use temporary domain
          </Typography>
          <Button href='https://myafrosclient.vercel.app' variant='contained'>CLICK HERE</Button>
          </Container>
        </Box>

        {/* end important message */}

{/* agents unit */}
        <Container sx={{ py: 8 }} maxWidth="xl">

          <Grid container spacing={4} >
            {agents.map((agent) => (
                <Grid item key={agent.id} xs={12} sm={6} md={4}>
<Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
         
            }}

            image = {`/media/${agent.image}`}
            
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {agent.name}
            </Typography>
            <Typography gutterBottom variant="body1" component="h5" color='blue'>
              {agent.brief}
            </Typography>
            <Typography>
              {agent.profile}
            </Typography>
          </CardContent>
          <CardActions>
            
            <Button href={`/agentdetailpage/${agent.id}`} variant='contained' size="small">GET STARTED</Button>
            

            <Button size="small">MEET {agent.name}</Button>
          </CardActions>
        </Card>
                
              </Grid>
              ))}
          </Grid>
          
          {/* End agents unit */}

        </Container>

        
      </main>
     
    </ThemeProvider>
  );
}