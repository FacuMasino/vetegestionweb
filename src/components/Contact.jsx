import { Avatar, Box, Button, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import facu from '/facu.png';
import marce from '/marce.png';
import ana from '/ana.png';

const Contact = () => {
  return (
    <Box 
      sx={{ 
        height: 'calc(100vh - 64px)',
        overflow:  'hidden',
        p:4,
        textAlign:'center', 
        alignItems: 'center',
        background: `linear-gradient(180deg, rgba(70, 23, 203, 0.8) 0%, rgba(144, 45, 190, 0.8) 100%)`, 
        backgroundSize: 'cover', 
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h3' sx={{ mb: 4 }}>Quiénes Somos</Typography>
        <Grid container spacing={20} p={5} justifyContent='center'>
          <Grid item>
            <Avatar src={facu} alt='facu' sx={{ width: 270, height: 270 }} />
            <Typography variant='h5' sx={{color: '#182641'}}>Facundo Masino</Typography>
          </Grid>
          <Grid item>
            <Avatar src={marce} alt='marce' sx={{ width: 270, height: 270 }}/ >
            <Typography variant='h5' sx={{color: '#182641'}}>Marcelo Carabajal</Typography>
          </Grid>
          <Grid item>
            <Avatar src={ana} alt='ana' sx={{ width: 270, height: 270 }} />
            <Typography variant='h5' sx={{color: '#182641'}}>Ana Clara Bertello</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Contact