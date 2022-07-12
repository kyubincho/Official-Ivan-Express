import { Box, CircularProgress, Grid } from "@mui/material";
import { common } from "@mui/material/colors";

export const Loading = () => (
  <Grid container justifyContent="center">
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress sx={{ color: common.black }} />
    </Box>
  </Grid>
);
