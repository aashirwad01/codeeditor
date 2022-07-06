import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'

export default function OutputDetails({outputMessage}) {
  return (
    <Box color='primary.temp' bgcolor="primary.main">
        <Typography>
            Status:{" "}
            <strong>
                {outputMessage?.status?.description}
            </strong>
        </Typography>
        <Typography>
            Memory:{" "}
            <strong>
                {outputMessage?.memory}
            </strong>
        </Typography>
        <Typography>
            Time:{" "}
            <strong>
                {outputMessage?.time}
            </strong>
        </Typography>


    </Box>
  )
}
