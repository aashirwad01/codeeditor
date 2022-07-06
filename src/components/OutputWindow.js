import { CardHeader } from '@mui/material'
import { CardContent } from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import {Buffer} from 'buffer';



export default function OutputWindow({outputMessage}) {


  const OutputMessageDetail = () => {


   

  
    
    if(outputMessage?.status?.id == 3){
      if( (Buffer.from(outputMessage.stdout, 'base64').toString('utf8')) !== null){
        return (
          <p>{Buffer.from(outputMessage.stdout, 'base64').toString('utf8')}</p>
        )
        
      }

    }
    else if(outputMessage?.status?.id == 6){
      if( (Buffer.from(outputMessage.stdout, 'base64').toString('utf8')) !== null){
        return (
          <p>{Buffer.from(outputMessage.compile_output, 'base64').toString('utf8')}</p>
        )
      
      }

    }
    else if(outputMessage?.status?.id == 5){
      
      if( (Buffer.from(outputMessage.stdout, 'base64').toString('utf8')) !== null){
        return (
          <p>Time Limit Exceeded </p>
          )
       
      }

    }
    else if(outputMessage?.status?.id == 4){
      if( (Buffer.from(outputMessage.stdout, 'base64').toString('utf8')) !== null){
        return (
          <p>Wrong Answer</p>
        )
        
      }

    }
    else if(outputMessage?.status?.id == 7||outputMessage?.status?.id == 8||outputMessage?.status?.id == 9||outputMessage?.status?.id == 10||outputMessage?.status?.id == 11||outputMessage?.status?.id == 12){
      if( (Buffer.from(outputMessage.stdout, 'base64').toString('utf8')) !== null){
        return (
          <p>Runtime Error</p>
        )
       
      }

    

  }
    else{
      if( (Buffer.from(outputMessage.stdout, 'base64').toString('utf8')) !== null){
        return (
          <p>{null}</p>
        )
       
      }

    }


  }

  

  return (
    
        <>
        {(outputMessage?.status?.id===3)&&(outputMessage?.status?.id ?(Buffer.from(outputMessage.stdout, 'base64').toString('utf8')) !== null
  ? <OutputMessageDetail/>
  : null:"Output will be displayed here")}
      
     

        </>
  )
   
}
