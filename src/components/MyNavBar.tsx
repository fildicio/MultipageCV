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
              tabIndex={1} // Set tabIndex for the first link
              aria-label='home page'
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
              tabIndex={2} // Set tabIndex for the second link
              aria-label='CV page'
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
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              tabIndex={3} // Set tabIndex for the third link
              aria-label='Contact page'
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

