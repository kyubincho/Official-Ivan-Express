import HikingIcon from "@mui/icons-material/Hiking";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Hike } from "../../models/Hike";

export const HikeCard = ({ hike }: { hike: Hike }) => (
  <Grid item xs={12} sm={6} lg={4} xl={3}>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image={hike.hikeCardImageUrl}
          alt="green iguana"
          height="300"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {hike.Location}
          </Typography>
          <Typography gutterBottom color="textSecondary">
            {hike.Date}
          </Typography>
          <CardActions>
            <Grid container>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                item
                xs={3}
              >
                <HikingIcon />
                <Typography color="textSecondary" variant="body2">
                  {hike.Distance}km
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                item
                xs={3}
              >
                <HikingIcon />
                <Typography color="textSecondary" variant="body2">
                  {hike.Ascent}m
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                item
                xs={3}
              >
                <HikingIcon />
                <Typography color="textSecondary" variant="body2">
                  {hike.PPL}
                </Typography>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                item
                xs={3}
              >
                <HikingIcon />
                <Typography color="textSecondary" variant="body2">
                  {hike.Difficulty}
                </Typography>
              </Grid>
            </Grid>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);
