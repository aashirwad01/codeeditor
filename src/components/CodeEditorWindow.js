import Editor from "@monaco-editor/react";
import { Paper } from "@mui/material";

import React, { useState } from 'react'


export default function CodeEditorWindow({code,setCode}) {

  const [value,setValue]=useState(code || "")

  const handleChange = (value) =>{
   
    setValue(value)
    setCode(value)
    
  }

  return (
  <Paper>
    <Editor
    height="60vh"
    width="100%"
    language={"javascript"}
    value={value}
    onChange={handleChange}
    
    
    
    />
  </Paper>
  )
}
