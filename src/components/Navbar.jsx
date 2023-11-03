import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: 'space-around', minHeight: '64px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vete++
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            Gestión veterinaria
            </Typography>
        </Box >
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/downloads">Descargas</Button>
            <Button color="inherit" component={Link} to="/contact">Quienes Somos</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;