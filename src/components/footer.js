// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#f8bbd0',
        textAlign: 'center',
        position: 'fixed',
        width: '100%',
        bottom: 0
      }}
    >
      <Typography variant="body1">
        Atividade Material UI
      </Typography>
    </Box>
  );
};

export default Footer;
