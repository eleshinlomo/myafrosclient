import React, {useState, useEffect} from 'react'
import {Box, ThemeProvider, 
    Grid,  
    Typography, 
    createTheme,
    Input,
    Button
} from '@mui/material'


const Signuppage = () => {

    const [username, setUsername] = useState('')
    

    const handleSignup = async (e)=>{
        e.preventDefault()
        
        await fetch('/spanish/', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            username: username
        })
      })
      .then((data)=>{
        if(!data){
          return
        }else{
          return data.json()
        }
      })
    
      .then((res)=>{
        console.log(res)
      })
    }
    
    

    const getGreeting = async (e)=>{
        
        await fetch('/spanish/', {
        method: 'GET',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'}
      })
      .then((data)=>{
        if(!data){
          return
        }else{
          return data.json()
        }
      })
    
      .then((res)=>{
        console.log(res)
      })
    }
    
    useEffect(()=>{
      getGreeting()
    }, [])


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

export default Signuppage 