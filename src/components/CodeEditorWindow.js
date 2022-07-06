import Editor from "@monaco-editor/react";
import { Paper } from "@mui/material";

import React, { useEffect, useState } from 'react'


export default function CodeEditorWindow({code,setCode,languageName,themeVal}) {

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
    language={languageName}
    value={value}
    onChange={handleChange}
    theme={themeVal}
   
    
    
    
    />
  </Paper>
  )
}
