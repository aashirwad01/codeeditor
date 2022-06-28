import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { Box } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";


import React, { useState } from 'react'
import { languageOptions } from "../constants/languageOptions";

export default function LanguagesList({handleChange,languageId}) {

    

  return (
    <Box>
        <FormControl fullWidth>
            <InputLabel>Select Language of Choice
            </InputLabel>
            <Select
            value={languageId}
            label="language id"
            onChange={handleChange}>

            
            {languageOptions.map((languageeach)=>{
              
                
            return(
                <MenuItem key={languageeach.id} value={languageeach.id} name={languageeach.name}>
                    {languageeach.name}

                </MenuItem>
            )

            

            })}

</Select>
        </FormControl>

    </Box>
  )
}
