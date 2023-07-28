import HikingIcon from "@mui/icons-material/Hiking";
import TerrainIcon from "@mui/icons-material/Terrain";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StarIcon from "@mui/icons-material/Star";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { Path } from "../../helpers/Path";
import { Hike } from "../../models/Hike";

export const HikeCard = ({ hike, isDOE }: { hike: Hike; isDOE?: Boolean }) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  return (
    <Grid item xs={12} sm={6} lg={4} xl={isDOE ? 4 : 3}>
      <Card>
        <CardActionArea
          onClick={() => navigate(Path["Official Hike"] + "/" + hike.id)}
        >
          <CardMedia
            component="img"
            //image={hike.hikeCardImageUrl}
            image={require("../../websiteImages/" + hike.id + ".jpg")} // 2023-07-28 - Updated image source from Firebase to local folder
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
                  <TerrainIcon />
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
                  <PeopleAltIcon />
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
                  <StarIcon />
                  <Typography color="textSecondary" variant="body2">
                    {hike.Difficulty} ({Math.round(Number(hike.Diff))})
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
