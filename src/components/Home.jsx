import { Typography, Button, Grid } from '@mui/material';

const Home = () => {
    return (
      <Grid container sx={{ 
        minHeight: 'calc(100vh - 64px)',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: `linear-gradient(180deg, rgba(70, 23, 203, 0.8) 0%, rgba(144, 45, 190, 0.8) 100%),
        url('/headerbg.jpg')`, 
        backgroundSize: 'cover' 
        }}>
        <Grid item xs={12} sm={6} sx={{display: 'flex', flexDirection:  'column', alignItems: 'center', }}>
          <Typography 
            variant="h2"
            sx={{
                padding: '1em',
                fontSize: '50px', 
                fontWeight: 'medium',
                lineHeight: '75px',
                letterSpacing: '0em',
                textAlign:'left',
                color: '#ffffff'
                }} 
            >
                Un sistema de gestión hecho a medida
            </Typography>
          <Typography 
            variant="body1"
            sx={{
                padding: '1em',
                fontSize: '24px',
                fontWeight: 'medium',
                lineHeight: '36px',
                letterSpacing: '0em',
                textAlign: 'left',
                color: '#ffffff'
            }}
            >
                Gestioná clientes, controla gastos, notificá vacunaciones, todo en un solo lugar
            </Typography>
          <Button 
            variant="contained"
            sx={{
                background: 'linear-gradient(0deg, #0A0957, #0A0957), linear-gradient(0deg, #180972, #180972)',
                backgroundSize: 'cover',
                marginBottom: '2em'
            }}
            >
                Descargar ahora</Button>
        </Grid>
        <Grid sx={{margin: 'auto', maxWidth: '553px'}}>
          <img src="/win.png" alt="Imagen de inicio" width="100%" height="auto"/>
        </Grid>
      </Grid>
    );
   }
   
export default Home;