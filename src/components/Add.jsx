import './add.css'
import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Add= () => {
  return (
    
    <div className='form'>
        <br></br>
      <Typography variant='h5'>Add blog</Typography><br></br>
      <TextField  variant='outlined' label='Blog Name'></TextField><br></br><br/>
      <TextField  variant='outlined' label='Descrition'></TextField><br></br><br/>
      <TextField  variant='outlined' label='Author Name'></TextField><br></br><br/>
      <Button variant='contained' color='success'>submit</Button>
    </div>
    
  )
}
export default Add

