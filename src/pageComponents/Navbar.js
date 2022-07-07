import { Box } from '@mui/material'
import React from 'react'
import LanguagesList from '../components/LanguagesList'
import { SwitchModeButton } from '../components/SwitchModeButton'


export default function Navbar({setLanguageId,setLanguageName,handlethemeChange}) {
  return (
    <Box
    style={{marginBottom:'1vh' ,display:'flex',flexDirection:'row' , alignItems:'center' , justifyContent:'space-between' }}
    
    >
        <LanguagesList 
        setLanguageId={setLanguageId}
        setLanguageName={setLanguageName}
       
        // handlethemeChange={handlethemeChange}
      />
      <SwitchModeButton />
    
    
    </Box>
  )
}
