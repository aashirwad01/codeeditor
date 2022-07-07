import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

export default function OutputDetails({outputMessage}) {
  return (
    <Box 
    
   
    >
        <Typography sx={{background: "-webkit-linear-gradient(18deg, #800080 10%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"}}>
            Status:{" "}
            <strong>
                {outputMessage?.status?.description}
            </strong>
        </Typography>
        <Typography sx={{background: "-webkit-linear-gradient(80deg, #800080 2%, #FF8E53 10%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"}}>
            Memory:{" "}
            <strong>
                {outputMessage?.memory}
            </strong>
        </Typography>
        <Typography sx={{background: "-webkit-linear-gradient(18deg, #800080 10%, #FF8E53 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"}}>
            Time:{" "}
            <strong>
                {outputMessage?.time}
            </strong>
        </Typography>


    </Box>
  )
}
