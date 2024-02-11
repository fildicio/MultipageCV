import { Typography, Box } from "@mui/material";
import experienceData from '../components/texts/experienceData';

export const Experiencecv = () => {
  return (
    <Box
      position="relative"
      width={{ xs: '80%', sm: '90%' }}
      height="70%"
      bgcolor='rgba(255, 255, 255, 0.7)'
      sx={{
        borderRadius: 1,
        padding: 3,
        mx: 'auto',
        mb: "2%",
        mt: "2%"
      
      }}
      tabIndex={6}
    >
      <Typography variant='h3' fontSize='2rem' textAlign='left' gutterBottom>
        Work Experience
      </Typography>

      {experienceData.map((experience, index) => (
        <div key={index}>
          {experience.title1 && (
            <>
              <Typography variant='h3' textAlign='left' fontSize='1.5rem' gutterBottom>
                {experience.title1} {experience.year1 && ` ${experience.year1}`}
              </Typography>
              <Typography variant='body2' textAlign='inherit'gutterBottom>
                {experience.experience1}
              </Typography>
            </>
          )}

          {experience.company2 && (
            <>
              <Typography variant='h3' textAlign='left' fontSize='1.5rem' gutterBottom>
                {experience.company2} {experience.title2 && ` ${experience.title2}`} {experience.year2 && ` ${experience.year2}`}
              </Typography>
              <Typography variant='body2' textAlign='inherit' gutterBottom>
                {experience.experience2}
              </Typography>
            </>
          )}

          {experience.company3 && (
            <>
              <Typography variant='h3' textAlign='left' fontSize='1.5rem' gutterBottom>
                {experience.company3} {experience.title3 && ` ${experience.title3}`} {experience.year3 && ` ${experience.year3}`}
              </Typography>
              <Typography variant='body2' textAlign='inherit' gutterBottom>
                {experience.experience3}
              </Typography>
            </>
          )}
        </div>
      ))}
    </Box>
  );
};

