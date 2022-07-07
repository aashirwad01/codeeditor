import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ThemeRadio({handlethemeChange}) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Mode</FormLabel>
      <RadioGroup
     
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handlethemeChange}
      >
        {/* <FormControlLabel   value="vs-dark" control={<Radio />} label="Dark" /> */}
        <FormControlLabel value="vs" control={<Radio />} label="Light" />
        <FormControlLabel value="hc-black" control={<Radio />} label="Dark" />
        
      </RadioGroup>
    </FormControl>
  );
}