import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import gestiona from '/gestiona.svg';
import controla from '/controla.svg';
import notifica from '/notifica.svg';

const Downloads = () => {
  return (
    <Box 
      sx={{
        height: 'calc(100vh - 64px)',
        overflow:  'hidden',
        p: 4,
        textAlign: 'center',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        }}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h3'>Descargas Vete++</Typography>
        <Grid container spacing={25} p={5} justifyContent='center'>
          <Grid item>
            <img src={gestiona} alt='gestiona' height='150' width='200' />
            <Typography>Gestioná</Typography>
          </Grid>
          <Grid item>
            <img src={controla} alt='controla' height='150' width='200' />
            <Typography>Controlá</Typography>
          </Grid>
          <Grid item>
            <img src={notifica} alt='notifica' height='150' width='200' />
            <Typography>Notificá</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ mt: 3, background: 'linear-gradient(0deg, #0A0957, #0A0957), linear-gradient(0deg, #180972, #180972)', backgroundSize: 'cover' }}>
          Descargar ahora
        </Button>
      </Box>
    </Box>
  )
}

export default Downloads