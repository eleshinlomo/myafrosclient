import React from 'react'
import { Grid, Typography, Button, Box,createTheme, ThemeProvider } from '@mui/material'
import {Link} from 'react-router-dom'
const Footer = () => {

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://myafros.com/">
          My Afros
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });
  return (
    
    <div>
    <ThemeProvider theme={theme}>
       
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Experience the unthinkable with My Afros!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}

        </ThemeProvider>
    </div>
  )
}

export default Footer