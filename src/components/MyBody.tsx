import { Box, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const MyBody = () => {
  return (
    <Box
      position="relative"
      width={{ xs: '80%', sm: '45%' }}
      height="100%"
      bgcolor='rgba(255, 255, 255, 0.7)' // Adjust the alpha value (0.5) based on your desired transparency
      borderRadius={1}
      padding={3}
      mx="auto"
      mb="100%"
      mt="10%"
      textAlign="center"
      tabIndex={4}
    >
     
      <Typography variant="h1" fontSize="3rem" textAlign="center" p={1}>
        I'm Filippo di Ciocchis
      </Typography>
      <Typography variant="h6" fontSize="1.5rem" textAlign="center" p={1}>
        I'm a London Based Front end Engineer, currently working as a freelance.
      </Typography>
      <Typography variant="h6" fontSize="1.5rem" textAlign="center" p={1}>
        In my free time, you can find me at the gym, cuddling my dog, eating pizza.
      </Typography>
      <Box textAlign="center" mt={2}>
        <IconButton tabIndex={5} aria-label='link to Github' color="inherit" href='https://github.com/fildicio'>
          <GitHubIcon />
        </IconButton>
        <IconButton tabIndex={6} aria-label='link to Linkedin' color="inherit" href="https://www.linkedin.com/in/diciocchis/">
          <LinkedInIcon />
        </IconButton>
        <IconButton tabIndex={7} aria-label='link to Instagram' color="inherit" href='https://www.instagram.com/filippodeciocchis/?hl=it'>
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};




