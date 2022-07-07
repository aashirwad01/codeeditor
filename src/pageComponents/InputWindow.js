import { Box } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import React from 'react'
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import { Paper } from '@mui/material';



// const StyledTextField = styled(TextField)({
//   [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
//     borderColor: "purple"
//   },
//   [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
//     borderColor: "red"
//   },
//   [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
//     borderColor: "purple"
//   },
//   [`& .${outlinedInputClasses.input}`]: {
//     color: "purple"
//   },
//   [`&:hover .${outlinedInputClasses.input}`]: {
//     color: "red"
//   },
//   [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
//     color: "purple"
//   },
//   [`& .${inputLabelClasses.outlined}`]: {
//     color: "purple"
//   },
//   [`&:hover .${inputLabelClasses.outlined}`]: {
//     color: "red"
//   },
//   [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
//     color: "purple"
//   }
// });

export default function InputWindow({input,setInput,handleCompile}) {
  return (
    <Box flexBasis='50%' sx={{mt:'1vh'}}>
    <Paper   sx={{mr:'2vh' }} >
    <TextField
    sx={{height:'16vh' , padding:'0.5vw' , color:'black' }}
    multiline
    fullWidth
    variant='standard'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    placeholder={`Give Input`}
    margin='dense'
    rows='6'

    >

    </TextField>
    <Button fullWidth variant='contained'  color="primary" onClick={handleCompile}>Execute</Button>
    </Paper>
    </Box>
  )
}
