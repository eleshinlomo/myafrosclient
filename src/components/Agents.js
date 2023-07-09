import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {Typography, Button, Box, ThemeProvider, createTheme, Grid} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '../components/Rating';
import '../App.css'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Agents() {

const [agents, setAgents] = useState([])
  const [test, setTest] = useState(null)
  
  

    
// get all agents
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
  

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  return (
<div>
<Grid container>
<Grid item display='flex' flex gap={3} justifyContent='center' alignItems='center' xs={12} sm={12} md={12} lg={12} xl={12}
sx={{
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column'
    }
}}>
    {agents.map((agent)=>
    
    <div className='' key={agent.id}>
    
    <Card sx={{width: 350, height: 'auto'}}>
    
      <CardHeader
      
        title={agent.name}
        subheader={agent.brief}
      />
      <CardMedia
        component="img"
        height="294"
        image={agent.image}
        alt="AI Agent"
        className=''
    
        
      />
      <CardContent sx={{
        m:2
      }}>
        <Typography variant="body2" color="text.secondary">
          {agent.profile}
        </Typography>
        <Box sx={{m:1}}>
        <Link to={`/agentdetailpage/${agent.id}`}><Button variant='contained'>GET STARTED</Button></Link>
        </Box>
      </CardContent>
     
      
      
      
    </Card>
    
    </div>)
    }
    </Grid>
    </Grid>
    </div>
  );
}