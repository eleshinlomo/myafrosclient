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

const Agents = () => {

    // get all agents
    const [agents, setAgents] = useState([])
  const [test, setTest] = useState(null)

  const getAgents =async ()=>{
    await fetch('/api/agents/', {
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

  const theme = createTheme({
    palette:{
        mode: 'dark'
    }
  })


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
<Grid container spacing={2}>
{agents.map((agent) => (
    <Grid item key={agent.id}>
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Card>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={agent.image}
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
                    <Button size="small">TRANSLATE</Button>
                    <Button size="small">MEET {agent.name}</Button>
                  </CardActions>
                </Card>
                </Box>
                
                </Grid>
    ))}
    
    </Grid>  
    </ThemeProvider>
  )
}

export default Agents