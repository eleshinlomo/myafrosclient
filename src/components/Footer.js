import React from 'react'
import { Grid, Typography, Button, Box,createTheme, ThemeProvider } from '@mui/material'

const Footer = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });
  return (
    
    <div>
    <ThemeProvider theme={theme}>
        <Grid container  sx={{
    
            color: '#00FFFF',
            justifyContent: 'center',
            alignItems: 'center',
            p:2,
            paddingY: 4,
            borderTop: '2px solid  #00FFFF',
            
        }}>

        <Grid container justifyContent='space-between' sx={{
          [theme.breakpoints.down('lg')]: {
              display: 'block',
              textAlign: 'center'
            }
        }}>

        <Grid item>
          Privacy Policy
        </Grid>

        

        <Grid item>
          <Box>
            <Button>Home</Button>
            <Button>Contact us</Button>
            <Button>About us</Button>
          </Box>
        </Grid>

        </Grid>

        <Box sx={{
          align: 'center'
        }} >
        <Typography sx={{
            textAlign: 'center'
        }}>
          Copyright 2023. MyAfros.
          </Typography>
        </Box>

        </Grid>
        </ThemeProvider>
    </div>
  )
}

export default Footer