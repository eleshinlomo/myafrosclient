import React, {useState, useEffect} from 'react'
import {Box, ThemeProvider, 
    Grid,  
    Typography, 
    createTheme,
    Input,
    Button
} from '@mui/material'


const Loginpage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('Login')
    

    const handleLogin = async (e) => {
        e.preventDefault();
      
        const csrftoken = document.cookie
          .split("; ")
          .find((row) => row.startsWith("csrftoken="))
          .split("=")[1];
      
        await fetch("/api/login/", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
          },
          body: JSON.stringify({
            email,
            password,
            
          }),
        })
          .then((data) => {
            if (!data) return;
            return data.json();
          })
          .then((res) => {
              console.log(res)
              setMessage(res.message);
          })
          .catch((err) => {
            console.log(err.message);
            
          });
      };
      
    
    


  return (
    <div>
        <Grid  container sm={12} md={12} lg={12} xl={12} justifyContent='center' alignItems='center'>
        <Grid item sx={{
            color: 'white'
        }}>
        <Box sx={{
            paddingY: 5,

        }}>
        <Typography>
            <h3>{message}</h3>
        </Typography>
       <form onSubmit={handleLogin}>

     

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

       
            <Button size='small' type='submit' variant='contained' sx={{
              width: 12,
              paddingX: 12,
              backgroundColor: '#00FFFF',
              color: 'black',
              fontSize: 16
              
            }}>Register</Button>
        </form>
        </Box>
        </Grid>
        </Grid>
    </div>
  )
}

export default Loginpage 