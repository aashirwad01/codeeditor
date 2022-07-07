import { CardHeader } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import OutputDetails from "../components/OutputDetails";
import OutputWindow from "../components/OutputWindow";

export default function OutputBox({ outputMessage }) {
  return (
    <Box sx={{  }}
    flexBasis='50%'
    >
      <Paper  sx={{height:'18vh'  , paddingLeft:'1vw' ,}} >
        {" "}
        <Typography color='#a6a6a6' sx={{mt:'1vh' ,paddingTop:'1.8vh'}} >
          Output will be displayed here
        </Typography>
       
          <OutputWindow outputMessage={outputMessage} />
      
      </Paper>

     { outputMessage &&<OutputDetails outputMessage={outputMessage} />}
    </Box>
  );
}
