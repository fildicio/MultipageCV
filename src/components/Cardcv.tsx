import { Box, Typography, Card, CardContent, Stack } from '@mui/material';
import cardsData from './texts/cardsData';

export const Cardcv = () => {
  return (
    <Box
      position="relative"
      width="93%"
      height="70%"
      sx={{
        borderRadius: 4,
        padding: 3,
        mx: 'auto', // Center the box horizontally
        mb: 'auto%',
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ width: '90%' }}>
        {cardsData.map((card, index) => (
          <Card key={index} sx={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
            <CardContent>
              <Typography variant="h3" fontSize='2rem' textAlign='left' gutterBottom>
                {card.header}
              </Typography>
              <Typography variant='body2' textAlign='left' component="div">
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                  {card.header === 'Contact' ? (
                    <>
                      <li>Phone: {card.phone}</li>
                      <li>LinkedIn: {card.linkedin}</li>
                      <li>Email: {card.email}</li>
                    </>
                  ) : (
                    <>
                      {card.content1 && <li> Good knowledge of:  {card.content1}</li>}
                      {card.content2 && <li> Good knowledge of: {card.content2}</li>}
                      {card.content3 && <li> Comprehensive knowledge of: {card.content3}</li>}
                      {card.language1 && <li>{card.language1}</li>}
                      {card.language2 && <li>{card.language2}</li>}
                      {card.language3 && <li>{card.language3}</li>}
                    </>
                  )}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default Cardcv;




