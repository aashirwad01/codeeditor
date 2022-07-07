import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Stack } from '@mui/material';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Intro() {
  return (
    <Box sx={{display:'flex', flexDirection:'column' , textAlign:'center'}}>
        <Typography variant='h6' sx={{fontSize: 20,
        background: `linear-gradient(
            to left,  #cf23cf, #ff6b08 
             );`,
    
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"}}>
            Your Simple Fast Code Editor
        </Typography>
        <Typography sx={{
    background: `linear-gradient(
        to right, #f32170, #ff6b08,
         #cf23cf, #eedd44);`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"}}>
            Made with ❤️ By aashirwad01
        </Typography>
        
        <Box sx={{display:'flex', flexDirection:'row',justifyContent:'space-around'}} >
            <Link href='https://github.com/aashirwad01' target="_blank"><GitHubIcon/></Link>
            <Link href="https://www.linkedin.com/in/aashirwadkumar159/" target="_blank"><LinkedInIcon/></Link>
            <Link href="https://twitter.com/aashirwad_01" target="_blank"><TwitterIcon/></Link>

        </Box>

        


    </Box>
  )
}
