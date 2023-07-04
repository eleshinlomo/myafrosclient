import React from 'react'
import {Link} from 'react-router-dom'
import {Box, ThemeProvider, Grid,  Typography,
     Button, 
    createTheme,
    Paper,
    ButtonGroup,
    IconButton,
 } from '@mui/material'

function Nav() {

    const theme = createTheme(
        {
          palette:{
            mode: 'dark'
          }
        }
    )

  return (
    <div>
    <ThemeProvider theme={theme}>
     <Grid container sm={12} md={12} lg={12} xl={12} justifyContent='space-between' sx={{
        paddingY: 4,
        paddingX: 2,
        borderBottom: '2px solid  #00FFFF'
     }}>
     

     <Grid item>
     
        <Box >
         <Link to='/'>
         <Button variant='text' size='large'
         sx={{
            borderRadius: '80%',
            bgColor:'#00FFFF'
         }}
         >
         MyAfros 
         </Button></Link>
        </Box>
     </Grid>


     <Grid item sx={{
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
     }}>

     
        <Box display='flex' sx={{
            gap: 3,
            color: 'black'
        }}>

        <Button sx={{color:'#00FFFF'}}>
            STORE
        </Button>

        <Button size='small' sx={{color:'#00FFFF'}}>
            BETA
        </Button>
            <ButtonGroup variant='contained' sx={{
              color: 'white'
            }}>
            <Link to='/signup' ><Button sx={{marginX: 2, bgcolor: '#00FFFF'}}>Sign Up</Button></Link>
            <Link to='/login'><Button sx={{ bgcolor: '#00FFFF'}}>Login</Button></Link>
            </ButtonGroup>
        </Box>
     </Grid>

     
     

     </Grid>
     </ThemeProvider>
    </div>
  )
}

export default Nav