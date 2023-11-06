import { Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import facu from "/facu.png";
import marce from "/marce.png";
import ana from "/ana.png";

const Contact = () => {
  return (
    <Grid
      container
      sx={{
        minHeight: "calc(100vh - 64px)",
        overflow: "auto",
        p: 4,
        textAlign: "center",
        background: `linear-gradient(180deg, rgba(70, 23, 203, 0.8) 0%, rgba(144, 45, 190, 0.8) 100%)`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
       
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "white", fontWeight: 'medium' }}>
          Quiénes Somos
        </Typography>
        <Grid container spacing={25} p={5} justifyContent="center">
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src={facu} alt="facu" sx={{ width: 270, height: 270 }} />
            <Typography variant="h3" sx={{ color: "#182641" }}>
              Facundo Masino
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src={marce} alt="marce" sx={{ width: 270, height: 270 }} />
            <Typography variant="h3" sx={{ color: "#182641" }}>
              Marcelo Carabajal
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar src={ana} alt="ana" sx={{ width: 270, height: 270 }} />
            <Typography variant="h3" sx={{ color: "#182641" }}>
              Ana Clara Bertello
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
