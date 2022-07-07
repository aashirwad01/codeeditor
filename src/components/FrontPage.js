import React, { useEffect, useMemo, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";

import OutputWindow from "./OutputWindow";

import InputWindow from "../pageComponents/InputWindow";
import { Button } from "@mui/material";
import OutputDetails from "./OutputDetails";

import { Card } from "@mui/material";

import { CardContent } from "@mui/material";
import { Box } from "@mui/material";
import Toastsnackbar, { ToastCustom } from "./Toastsnackbar";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import { Typography } from "@mui/material";

import { CssBaseline } from "@mui/material";
import { ColorModeContext } from "./SwitchModeButton";
import { getDesignTokens } from "./themes";
import Navbar from "../pageComponents/Navbar";
import OutputBox from "../pageComponents/OutputBox";
import { Container } from "@mui/system";



const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`;







export default function FrontPage() {
  const [code, setCode] = useState(javascriptDefault);
  const [input, setInput] = useState("");
  const [outputMessage, setOutputMessage] = useState(null);
  const [languageId, setLanguageId] = useState(63);
  const [languageName, setLanguageName] = useState("javascript");
  const [errorStatusMessage ,setErrorStatusMessage]=useState(null);
  const [reqSent,setReqSent]=useState(false)
  const [themeVal,setThemeVal]=useState("hc-black")
  const [mode, setMode] = useState("light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  useEffect(() => {
    
      if(mode==='dark'){
      
        setThemeVal('hc-black')
      }
      else{
        
        setThemeVal('vs')
      }
  
    
  
    
  }, [mode])
  
  
  const handleCompile = () => {
    console.log(languageId);
    console.log(languageName);
    setReqSent(true)
    const formData = {
      language_id: languageId,

      source_code: btoa(code),
      stdin: btoa(input),
    };
    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        console.log(err);
        let error = err.response ? err.response.data : err;
        console.log(error)
        console.log(err.message)
        // get error status
        let status = err.response.status;
        console.log("status", status);
        setErrorStatusMessage(err.message)
        if (status === 429) {
          console.log("too many requests", status);

     
          setErrorStatusMessage("Too many requests")

          
        }
        console.log("catch block", error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setOutputMessage(response.data);
        // toast.success(`Compiled Successfully!`);
        
        console.log("response.data", response.data);
        
      }
    } catch (err) {
      console.log("err", err);

     
      setErrorStatusMessage(`Something went wrong! Please try again.`)
      

    }
  };

  
  
  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
     <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>

<Container maxWidth="xl">
      <Navbar
      setLanguageId={setLanguageId}
      setLanguageName={setLanguageName}
      languageId={languageId}
      languageName={languageName}
      mode={mode}
      
      />
   
     
      

     
      
      <CodeEditorWindow
        code={code}
        setCode={setCode}
        languageName={languageName}
        themeVal={themeVal}
      />

<Box style={{display:'flex',flexDirection:'row' , justifyContent:'space-evenly' }}>
<InputWindow  input={input} setInput={setInput} handleCompile={handleCompile} />

<OutputBox outputMessage={outputMessage} />

</Box>

      
      

     
     
      {/* <div>
        {outputMessage && <OutputDetails outputMessage={outputMessage} />}
      </div> */}
      {(!(errorStatusMessage))&&<Toastsnackbar outputMessage={outputMessage} reqSent={reqSent} setReqSent={setReqSent}/>}
      {(errorStatusMessage)&&<ToastCustom  errorStatusMessage={errorStatusMessage} color={'warning'} reqSent={reqSent} setReqSent={setReqSent} />}
      </Container>
      </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
