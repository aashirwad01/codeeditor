import { Box } from '@mui/material'
import React from 'react'
import Intro from '../components/Intro'
import LanguagesList from '../components/LanguagesList'
import { SwitchModeButton } from '../components/SwitchModeButton'


export default function Navbar({setLanguageId,setLanguageName,handlethemeChange,mode}) {
  return (
    <Box

   

    style={{marginBottom:'1vh' ,display:'flex',flexDirection:'row' , alignItems:'center' , justifyContent:'space-between'  }}
    
    >
        <LanguagesList 
        setLanguageId={setLanguageId}
        setLanguageName={setLanguageName}
       mode={mode}
        // handlethemeChange={handlethemeChange}
      />
      <Intro/>
      <SwitchModeButton />
    
    
    </Box>
  )
}
