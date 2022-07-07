import { amber, deepOrange, grey } from '@mui/material/colors';
import { purple } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { lightBlue } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { deepPurple } from '@mui/material/colors';
import { blueGrey } from '@mui/material/colors';
import { cyan } from '@mui/material/colors';
import { lightGreen } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: {
        ...deepPurple,
        ...(mode === 'dark' && {
          main: deepOrange[900],
        }),
      },
      
      background:{
        default:lightGreen[100],
          // paper:pink[100],
      },
      ...(mode === 'dark' && {
        background: {
          // default:purple[900],
          // paper:pink[900],
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
              primary: purple[900],
              secondary:deepOrange[500],
            }
          : {
              primary: '#fff',
              secondary: grey[500],
            }),
      },
    },
  });
  