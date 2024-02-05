import { Box, Typography } from '@mui/material';

export const Headercv = () => {
  return (
    <Box
      position="relative"
      width={{ xs: '80%', sm: '90%' }}
      height="70%"
      bgcolor='rgba(255, 255, 255, 0.7)' // Adjust the alpha value (0.5) based on your desired transparency
      sx={{
        borderRadius: 1,
        padding: 3,
        mx: 'auto',
        mb: "2%",
        mt: "2%"
      }}
    >
      <Typography variant='h2' fontSize='3rem' textAlign='center'>
        Filippo di Ciocchis
      </Typography>
      <Typography variant='h3' fontSize='2rem' textAlign='center' gutterBottom>
        Professional Summary
      </Typography>
      <Typography variant='body2' textAlign='inherit'>
        Highly motivated web developer with expertise in Node.js, CSS, JavaScript, and React. Associate degree in computer science and recent certification in iOS & Web Development. Driven to bring innovation, collaborate effectively and deliver within a software development career pathway. An aptitude for self-reflection to improve personal development and adapt to new challenges.
      </Typography>
    </Box>
  );
};

