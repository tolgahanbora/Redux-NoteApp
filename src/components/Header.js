import React from 'react'
import { Typography,TextField } from '@mui/material';
function Header() {
  return (
    <div>
        <Typography variant='h4' align='center' style={{margin: '100px'}}>
          NotesApp
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextField id="outlined-multiline-flexible" label="Search" style={{width: '300px'}}/>
    </div>
    </div>
  )
}

export default Header