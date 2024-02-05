import { AppBar, Toolbar, Button, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export const MyNavBar = () => {
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          width="100%"
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              color="inherit"
              variant="outlined"
              style={{
                color: 'white',
                padding: theme.breakpoints.down('xs') ? '8px' : 'inherit',
                margin: '4px', // Add margin between buttons
              }}
            >
              Home
            </Button>
          </Link>
          <Link to="/Cv" style={{ textDecoration: 'none' }}>
            <Button
              color="inherit"
              variant="outlined"
              style={{
                color: 'white',
                padding: theme.breakpoints.down('xs') ? '8px' : 'inherit',
                margin: '4px', // Add margin between buttons
              }}
            >
              CV
            </Button>
          </Link>
          <Link to="/services" style={{ textDecoration: 'none' }}>
            <Button
              color="inherit"
              variant="outlined"
              style={{
                color: 'white',
                padding: theme.breakpoints.down('xs') ? '8px' : 'inherit',
                margin: '4px', // Add margin between buttons
              }}
            >
              Services
            </Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              color="inherit"
              variant="outlined"
              style={{
                color: 'white',
                padding: theme.breakpoints.down('xs') ? '8px' : 'inherit',
                margin: '4px', // Add margin between buttons
              }}
            >
              Contact
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
