import React, { useEffect } from 'react'
import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { Box } from '@mui/material';
import { statuses } from '../constants/outputMessageStatuses';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ToastCustom({errorStatusMessage,color}){

    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        setOpen(true)
    }, [errorStatusMessage])
    
  

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    // setReqSent(false)
  };
    return <>
    <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
   
    
    open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }}>
            
       {errorStatusMessage}
        </Alert>
      </Snackbar>
    
    </>
}

export default function Toastsnackbar({outputMessage}) {
    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        setOpen(true)
    }, [outputMessage])
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    // setReqSent(false)
  };
  return (
    <Box>
        {(outputMessage?.status?.id!==null)&&(statuses.some(ele => ele.id ===(outputMessage?.status?.id)))&& (
            <>
            <Snackbar  anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity= {statuses.find(el=>el.id === outputMessage?.status?.id).severity} sx={{ width: '100%' }}>
            
        {statuses.find(el=>el.id === outputMessage?.status?.id).description}
        </Alert>
      </Snackbar>
            </>

          )}
   
      </Box>
  )
}
