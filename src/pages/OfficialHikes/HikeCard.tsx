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
import { useNavigate } from "react-router";
import { Path } from "../../helpers/Path";
import { Hike } from "../../models/Hike";

export const HikeCard = ({ hike, isDOE }: { hike: Hike; isDOE?: Boolean }) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} lg={4} xl={isDOE ? 4 : 3}>
      <Card>
        <CardActionArea
          onClick={() => navigate(Path["Official Hike"] + "/" + hike.id)}
        >
          <CardMedia
            component="img"
            image={hike.hikeCardImageUrl}
            alt="Image was not found :)"
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
                    {hike.PPL === null ? 0 : hike.PPL}
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
};
