import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { Navbar } from "../../components/Navbar";
import { Hike } from "../../models/Hike";
import { getOfficialHikes } from "../../services/hikes";
import { HikeCard } from "./HikeCard";

interface OfficialHikesInterface {
  loading: boolean;
  hikes: Hike[];
}

export function OfficialHikes() {
  const [state, setState] = useState<OfficialHikesInterface>({
    loading: true,
    hikes: [],
  });

  useEffect(() => {
    getOfficialHikes().then((hikesFromFirestore) =>
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
      <Container maxWidth="xl">
        <Typography variant="h2">This is official hikes</Typography>
        <Grid container spacing={3}>
          {hikes.map((hike, i) => (
            <HikeCard hike={hike} key={i} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
