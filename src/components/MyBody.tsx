import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import image from './images/home.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const MyBody = () => {
  return (
    <Box position="relative" width="100%" height="100%">
      <img src={image} alt="styled Picasso" className="background-image" />
      <Card
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '400px', // Add a maximum width to the card for smaller screens
          width: '80%', // Set a width as per your design
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        <CardContent>
          <Typography variant='h1' fontSize='3rem' textAlign='center' p={1}>
            I'm Filippo di Ciocchis
          </Typography>
          <Typography variant='h6' fontSize='1.5rem' textAlign='center' p={1}>
            I'm a London Based Front end Engineer, currently working as a freelance.
          </Typography>
          <Typography variant='h6' fontSize='1.5rem' textAlign='center' p={1}>
            In my freetime, you can find me at the gym, cuddling my dog, eating pizza.
          </Typography>
          <Box textAlign='center' mt={2}>
            <IconButton color="inherit">
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" href='https://www.linkedin.com/in/diciocchis/'>
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};


