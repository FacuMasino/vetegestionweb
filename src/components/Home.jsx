import { Box, Typography, Button } from '@mui/material';

const Home = () => {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: `linear-gradient(180deg, rgba(70, 23, 203, 0.8) 0%, rgba(144, 45, 190, 0.8) 100%),
        url('./src/assets/headerbg.jpg')`, 
        backgroundSize: 'cover' 
        }}>
        <Box sx={{display: 'flex', flexDirection:  'column', alignItems: 'center', }}>
          <Typography 
            variant="h2"
            sx={{
                padding: '1em',
                fontSize: '50px', 
                fontWeight: 700,
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
                fontWeight: '24px',
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
                padding: '10px',
                background: 'linear-gradient(0deg, #0A0957, #0A0957), linear-gradient(0deg, #180972, #180972)',
                backgroundSize: 'cover'
            }}
            >
                Descargar ahora</Button>
        </Box>
        <Box>
          <img src="./src/assets/win.png" alt="Imagen de inicio" width="553" height="447"/>
        </Box>
      </Box>
    );
   }
   
export default Home;