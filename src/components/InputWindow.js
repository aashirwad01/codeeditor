import { TextField } from '@mui/material'
import React from 'react'

export default function InputWindow({input,setInput}) {
  return (
    <TextField
    fullWidth
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    placeholder={`Give Input`}

    >

    </TextField>
  )
}
