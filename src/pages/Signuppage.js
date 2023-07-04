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
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    

    const handleSignup = async (e)=>{
        e.preventDefault()
        
        await fetch('http://localhost:8000/members/addmember/', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            username,
            password,
            email
        })
      })
      .then((data)=>{
        if(!data) return
        return data.json()
        
      })
    
      .then((res)=>{
        console.log(res)
        if(res.ok) return setMessage(res.message)
        return setMessage('Error with registration')
      })
      .catch((err)=>{
        console.log(err.message)
        setMessage(err.message)
      })
    }
    
    


  return (
    <div>
        <Grid  container sm={12} md={12} lg={12} xl={12} justifyContent='center' alignItems='center'>
        <Grid item>
        <Box sx={{
            paddingY: 5
        }}>
        <Typography>
            <h3>{message}</h3>
        </Typography>
       <form onSubmit={handleSignup}>

        {/* username */}
       <Input  
            type='text'
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            name={username}
            placeholder='Username'
            sx={{
              borderBottom: '2px solid #00FFFF',
              mb:3,
              color: 'white',
              width: '12rem',
              textAlign: 'center'
            }}
            /><br/>

            {/* password */}

            <Input 
            type='password' 
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            name={password}
            placeholder='Password'
            sx={{
              borderBottom: '2px solid #00FFFF',
              mb:3,
              color: 'white',
              width: '12rem',
              textAlign: 'center'
            }}
            /><br/>

       {/* email */}
        <Input 
            type='email' 
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            name={email}
            placeholder='Email'
            sx={{
              borderBottom: '2px solid #00FFFF',
              mb:3,
              color: 'white',
              width: '12rem',
              textAlign: 'center'
            }}
            /><br/>
            <Button type='submit' variant='contained' sx={{
              width: 12,
              paddingX: 12,
              backgroundColor: '#00FFFF',
              color: 'black',
              fontSize: 16
              
            }}>Sign Up</Button>
        </form>
        </Box>
        </Grid>
        </Grid>
    </div>
  )
}

export default Signuppage 