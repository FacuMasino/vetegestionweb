import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, List, ListItem, ListItemText, Hidden, Grid } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ justifyContent: 'space-around', minHeight: '64px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', fontWeight: 'medium' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vete++
            </Typography>
            <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            Gestión veterinaria
            </Typography>
        </Box >
        <Hidden mdUp>
          <Drawer open={open} onClose={handleDrawerClose}>
            <List>
              <ListItem button component={Link} to="/" onClick={handleDrawerClose} >
              <ListItemIcon><HomeOutlinedIcon /></ListItemIcon>
                Home
              </ListItem>
              <ListItem button component={Link} to="/downloads" onClick={handleDrawerClose}>
              <ListItemIcon><FileDownloadOutlinedIcon /></ListItemIcon>
                Descargas
              </ListItem>
              <ListItem button component={Link} to="/contact" onClick={handleDrawerClose}>
                <Grid sx={{display:'flex', justifyContent:'center'}}>
                <ListItemIcon><PeopleOutlineOutlinedIcon /></ListItemIcon>
                  Quiénes Somos
                </Grid>
              </ListItem>
            </List>
          </Drawer>
          <Button onClick={handleDrawerOpen}>
            <MenuOutlinedIcon fontSize='large' sx={{ color: 'black' }} />
          </Button>
        </Hidden>
        <Hidden only={['xs', 'sm']}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, fontWeight: 700 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/downloads">Descargas</Button>
            <Button color="inherit" component={Link} to="/contact">Quienes Somos</Button>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
