import React from 'react'
import { Input, Button, Grid, Box } from '@mui/material'

const Loginpage = () => {
  return (
    <div>
        <Grid  container sm={12} md={12} lg={12} xl={12} justifyContent='center' alignItems='center'>
        <Grid item>
        <Box sx={{
            paddingY: 5
        }}>
        <form>
        <Input name='user_input' 
            placeholder='Email'
            sx={{
              borderBottom: '2px solid #00FFFF',
              mb:3,
              color: 'white',
              width: '12rem',
              textAlign: 'center'
            }}
            /><br/>

            <Input name='user_input' 
            placeholder='Password'
            sx={{
              borderBottom: '2px solid #00FFFF',
              mb:3,
              color: 'white',
              width: '12rem',
              textAlign: 'center'
            }}
             /><br/>
            <Button variant='contained' sx={{
              width: 12,
              paddingX: 12,
              backgroundColor: '#00FFFF',
              color: 'black'
              
            }}>Login</Button>
        </form>
        </Box>
        </Grid>
        </Grid>
    </div>
  )
}

export default Loginpage