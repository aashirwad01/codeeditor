import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { Box } from "@mui/material";
import { FormControl } from "@mui/material";
import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Menu } from "@mui/material";
import { ListItem } from "@mui/material";
import { NativeSelect } from "@mui/material";
import { InputLabel } from "@mui/material";


import React, { useEffect, useState } from 'react'
import { languageOptions } from "../constants/languageOptions";

export default function LanguagesList({setLanguageId,setLanguageName,languageId,languageName}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
    
    
  };

  useEffect(() => {
    setLanguageId(languageOptions[selectedIndex].id)
    setLanguageName(languageName[selectedIndex].name)
    
  }, [selectedIndex])
  

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    console.log(languageOptions[selectedIndex])
    // setLanguageId(languageOptions[selectedIndex].id)
    setLanguageName(languageOptions[selectedIndex].value)
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    

  return (
    <Box style={{marginBottom:'1vh'}}
    >
        <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
            <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Select Language"
            secondary={languageOptions[selectedIndex].name}
            
          />
        </ListItem>
      </List>
            <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >

            
            {languageOptions.map((languageeach,index)=>{
              
                
            return(
             
                <MenuItem key={languageeach.id}
                
                
            selected={index === selectedIndex}
            onClick={(event) => {handleMenuItemClick(languageeach,index);
                                 
            }}
                value={languageeach.id} name={languageeach.name}>
                    {languageeach.name}

                </MenuItem>
               
            )

            

            })}

</Menu>


    </Box>
  )
}
