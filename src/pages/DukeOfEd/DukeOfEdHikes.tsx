import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Navbar } from "../../components/Navbar";
import { Hike } from "../../models/Hike";
import { getDukeOfEdHikes } from "../../services/hikes";
import { HikeCard } from "../OfficialHikes/HikeCard";

interface OfficialHikesInterface {
  loading: boolean;
  hikes: Hike[];
}

export function DukeOfEdHikes() {
  const [state, setState] = useState<OfficialHikesInterface>({
    loading: true,
    hikes: [],
  });

  useEffect(() => {
    getDukeOfEdHikes().then((hikesFromFirestore) =>
      setState({ ...state, hikes: hikesFromFirestore, loading: false })
    );

    // eslint-disable-next-line
  }, []);

  const { hikes, loading } = state;

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          marginBottom: "200px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: "60px",
            marginBottom: "60px",
            marginRight: "60px",
            marginLeft: "0px",
          }}
        >
          Duke of Edinburgh
        </Typography>
        <Grid container spacing={3}>
          {hikes.map((hike, i) => (
            <HikeCard hike={hike} isDOE={true} key={i} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
