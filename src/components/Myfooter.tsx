import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const MyFooter: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Filippo di Cioccchis
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Filippo  | Filippo | Filippo`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default  MyFooter;