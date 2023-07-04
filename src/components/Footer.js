import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'

const Footer = () => {
  return (
    <div>
        <Grid container  sx={{
    
            color: '#00FFFF',
            justifyContent: 'center',
            alignItems: 'center',
            p:2,
            paddingY: 4,
            borderTop: '2px solid  #00FFFF'
        }}>

        <Grid container justifyContent='space-between'>

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
    </div>
  )
}

export default Footer