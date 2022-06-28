

import React, { useState } from 'react'
import CodeEditorWindow from './CodeEditorWindow';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import OutputWindow from './OutputWindow';
import {Buffer} from 'buffer';
import InputWindow from './InputWindow';
import { Button } from '@mui/material';

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
    const [input,setInput]=useState("");
    const [outputMessage,setOutputMessage]=useState(null)

    const handleCompile = () => {
        
        const formData = {
          language_id: 63,
          // encode source code in base64
          source_code: btoa(code),
          stdin:btoa(input),
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
            console.log(err)
            let error = err.response ? err.response.data : err;
            // get error status
            let status = err.response.status;
            console.log("status", status);
            if (status === 429) {
              console.log("too many requests", status);
    
              toast.error(`Too many requests.Something went wrong! Please try again.`)
            }
            console.log("catch block",error)
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
            toast.success(`Compiled Successfully!`);
            console.log("response.data", response.data);
            return;
          }
        } catch (err) {
          console.log("err", err);
         
          toast.error(`Something went wrong! Please try again.`)
        }
      };
    
  return (
    <>
    <CodeEditorWindow code={code} setCode={setCode}/>
    <OutputWindow outputMessage={outputMessage}/>
    <InputWindow input={input} setInput={setInput}/>
    <Button
    onClick={handleCompile}
    >
        Execute
    </Button>
    
    
    </>
  )
}
