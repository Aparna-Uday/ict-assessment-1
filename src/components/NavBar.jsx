import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Box,  } from '@mui/material';
import './navbar.css'

import {Link} from "react-router-dom";
const NavBar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
          <Button color="inherit" variant='contained'><Link className='linkstyle' to={"/"}>Home</Link></Button>&nbsp;&nbsp;
          <Button color="inherit" variant='contained'><Link className='linkstyle' to={"/addblog"}>Add Blog</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
