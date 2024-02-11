import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const ContactDetails = () => {
  return (
    <Box
      position="relative"
      width={{ xs: '80%', sm: '45%' }}
      height="100%"
      bgcolor='rgba(255, 255, 255, 0.7)'
      borderRadius={1}
      padding={3}
      mx="auto"
      mb="100%"
      mt="10%"
      textAlign="center"
      tabIndex={4}    
    >
      
      <Typography variant="h1" fontSize="3rem" textAlign="center" p={1}>
        Contact
      </Typography>
      <Typography variant="h6" fontSize="1.5rem" textAlign="center" p={1}>
        Phone number: +447307175551
      </Typography>
      <Typography variant="h6" fontSize="1.5rem" textAlign="center" p={1}>
        email: fildicio@gmail.com
      </Typography>
      <Box textAlign="center" mt={2}>
        <IconButton  tabIndex={5} aria-label='Github page' color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton tabIndex={6} aria-label='Linkedin page' color="inherit" href="https://www.linkedin.com/in/diciocchis/">
          <LinkedInIcon />
        </IconButton>
        <IconButton tabIndex={7} aria-label='Instagram page' color="inherit">
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};