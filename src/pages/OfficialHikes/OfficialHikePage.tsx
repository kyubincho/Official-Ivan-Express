import { Button, CardMedia, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Loading } from "../../components/Loading";
import { Navbar } from "../../components/Navbar";
import { Path } from "../../helpers/Path";
import { Hike } from "../../models/Hike";
import { getOfficialHike } from "../../services/hikes";

interface OfficialHikeInterface {
  loading: boolean;
  hike: Hike;
}

export function OfficialHikePage() {
  const [state, setState] = useState<OfficialHikeInterface>({
    loading: true,
    hike: {},
  });

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id === undefined) {
      navigate(Path["Official Hikes"]);
    } else {
      getOfficialHike(id).then((hikeData) =>
        setState({ ...state, hike: hikeData, loading: false })
      );
    }
    // eslint-disable-next-line
  }, []);

  const { hike, loading } = state;
  const people = [
    "Ivan",
    "Jeff C",
    "Jeff K",
    "Brett",
    "Edmund",
    "Wayne",
    "Ed's Sis",
    "James",
    "Charles",
    "Calvin",
    "NathanC",
    "Myron",
    "Gurveer",
    "Harneet",
    "NathanL",
    "Jaden",
    "Hanosh",
    "DanielK",
    "Jacob",
    "Pratik",
    "Furqan",
    "Clarence",
    "Alex",
    "Paul",
    "Roshan",
    "Jose",
    "Henry",
    "Ary",
    "Mevan",
    "Alec",
    "Sebastian",
  ];

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        sx={{
          marginBottom: "200px",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            marginTop: "60px",
            marginBottom: "10px",
            marginRight: "60px",
            marginLeft: "0px",
          }}
        >
          {hike.Location}
        </Typography>
        <Typography gutterBottom variant="h6">
          {hike.Date}
        </Typography>

        {!["x", "", null].includes(hike.Youtube) && (
          <Container
            sx={{
              marginTop: "60px",
              marginBottom: "60px",
            }}
          >
            <iframe
              title="Youtube Video"
              src={hike.Youtube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              width="1120"
              height="630"
              frameBorder="0"
            ></iframe>
          </Container>
        )}

        <Typography>Distance: {hike.Distance}km</Typography>
        <Typography>Ascent: {hike.Ascent}m</Typography>
        <Typography>
          Difficulty: {hike.Difficulty} ({Math.round(Number(hike.Diff3))})
        </Typography>
        <Typography>
          Logbook: {Number(hike.Log) === 1 ? "yes" : "no"}
        </Typography>
        <Typography>
          Participants: {hike.PPL} (
          {people.filter((person) => Number(hike[person]) === 1).join(", ")})
        </Typography>
        <Container
          sx={{
            marginTop: "60px",
            marginBottom: "20px",
          }}
        >
          <Button
            fullWidth={true}
            size="large"
            onClick={() => window.open(hike.Album_Link)}
          >
            <Typography>View Full ALbum</Typography>
          </Button>
        </Container>
        <CardMedia
          component="img"
          image={hike.hikeCardImageUrl}
          alt="Image was not found :)"
        />
      </Container>
    </>
  );
}
