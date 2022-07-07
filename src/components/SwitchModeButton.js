import { Box, IconButton, useTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from "react";
import { Typography } from "@mui/material";
// import { ColorModeContext } from "./FrontPage";


export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
export const SwitchModeButton = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box
    sx={{
     bgcolor: 'background.default',
      color: 'text.primary',
      borderRadius: 1,
      p: 2,
    }}
  >
    <Typography sx={{display: {xs:'none',md:'inline-block',lg:'inline-block'}}}>{theme.palette.mode} mode</Typography>
    
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  </Box>
  );
};