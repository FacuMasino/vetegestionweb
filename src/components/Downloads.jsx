import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import gestiona from '/gestiona.svg';
import controla from '/controla.svg';
import notifica from '/notifica.svg';

const Downloads = () => {
  return (
    <Grid container
      sx={{
        minHeight: "calc(100vh - 64px)",
        p: 4,
        textAlign: 'center',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center'
        }}>
      <Grid sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h2' sx={{ fontWeight: 'medium' }}>Descargas Vete++</Typography>
        <Grid container spacing={25} p={5} justifyContent='center'>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={gestiona} alt='gestiona' height='270' width='270' />
            <Typography variant='h3'>Gestioná</Typography>
          </Grid>
          <Grid item>
            <img src={controla} alt='controla' height='270' width='270' />
            <Typography variant='h3'>Controlá</Typography>
          </Grid>
          <Grid item>
            <img src={notifica} alt='notifica' height='270' width='270' />
            <Typography variant='h3'>Notificá</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" sx={{ mt: 3, background: 'linear-gradient(0deg, #0A0957, #0A0957), linear-gradient(0deg, #180972, #180972)', backgroundSize: 'cover' }}>
          Descargar ahora
        </Button>
      </Grid>
    </Grid>
  )
}

export default Downloads