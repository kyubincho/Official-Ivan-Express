import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";
import { Hike } from "../models/Hike";
import { getOfficialHikes } from "../services/hikes";
import { HikeCard } from "./OfficialHikes/HikeCard";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import React from "react";

interface OfficialHikesInterface {
  loading: boolean;
  hikes: Hike[];
  reverse: boolean;
  sortByCurr: string;
  sortLoading: boolean;
}

export function FilmPage() {
  function createDate(date: string) {
    const dateParts = date.split("/");
    const newDate = new Date(
      +dateParts[2],
      Number(dateParts[1]) - 1,
      +dateParts[0].split("-")[0]
    );

    return newDate;
  }

  function sortHikes(sortBy: string) {
    setState({ ...state, sortLoading: true });
    const tempReverse = sortByCurr === sortBy ? !reverse : false;

    setState({
      ...state,
      hikes:
        tempReverse === false
          ? hikes.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
          : hikes.sort((a, b) => b[sortBy].localeCompare(a[sortBy])),
      reverse: tempReverse,
      sortByCurr: sortBy,
      sortLoading: false,
    });
  }

  function sortNumber(sortBy: string) {
    setState({ ...state, sortLoading: true });
    const tempReverse = sortByCurr === sortBy ? !reverse : false;

    setState({
      ...state,
      hikes:
        tempReverse === false
          ? hikes.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1))
          : hikes.sort((a, b) => (b[sortBy] < a[sortBy] ? 1 : -1)),
      reverse: tempReverse,
      sortByCurr: sortBy,
      sortLoading: false,
    });
  }

  function sortDate(sortBy: string) {
    setState({ ...state, sortLoading: true });
    const tempReverse = sortByCurr === sortBy ? !reverse : false;

    setState({
      ...state,
      hikes:
        tempReverse === false
          ? hikes.sort((a, b) =>
              createDate(a[sortBy]) > createDate(b[sortBy]) ? 1 : -1
            )
          : hikes.sort((a, b) =>
              createDate(b[sortBy]) > createDate(a[sortBy]) ? 1 : -1
            ),
      reverse: tempReverse,
      sortByCurr: sortBy,
      sortLoading: false,
    });
  }

  function sortAscent(sortBy: string) {
    setState({ ...state, sortLoading: true });
    const tempReverse = sortByCurr === sortBy ? !reverse : false;

    setState({
      ...state,
      hikes:
        tempReverse === false
          ? hikes.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1))
          : hikes.sort((a, b) => (b[sortBy] < a[sortBy] ? 1 : -1)),
      reverse: tempReverse,
      sortByCurr: sortBy,
      sortLoading: false,
    });
  }

  function sortDiff(sortBy: string) {
    setState({ ...state, sortLoading: true });
    const tempReverse = sortByCurr === sortBy ? !reverse : false;

    setState({
      ...state,
      hikes:
        tempReverse === false
          ? hikes.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1))
          : hikes.sort((a, b) => (b[sortBy] < a[sortBy] ? 1 : -1)),
      reverse: tempReverse,
      sortByCurr: sortBy,
      sortLoading: false,
    });
  }

  const [state, setState] = useState<OfficialHikesInterface>({
    loading: true,
    hikes: [],
    reverse: true,
    sortByCurr: "Date",
    sortLoading: false,
  });

  useEffect(() => {
    getOfficialHikes().then((hikesFromFirestore) => {
      setState({
        ...state,
        hikes: hikesFromFirestore.sort(
          (a, b) => (createDate(b["Date"]) > createDate(a["Date"]) ? 1 : -1) // initialize as Date sorted by reverse: true line 99
        ),
        loading: false,
      });
    });

    // eslint-disable-next-line
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setState({
      ...state,
      sortByCurr: event.target.value,
    });
  };

  const { hikes, loading, reverse, sortByCurr, sortLoading } = state;

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
          variant="h2"
          sx={{
            marginTop: "60px",
            marginBottom: "60px",
            marginRight: "60px",
            marginLeft: "0px",
          }}
        >
          Films
        </Typography>
        <div>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Sort By
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={sortByCurr}
              onChange={handleChange}
              label="Sort By"
            >
              <MenuItem
                value={"Location"}
                disabled={sortLoading}
                onClick={() => sortHikes("Location")}
              >
                Name
              </MenuItem>
              <MenuItem
                value={"Date"}
                disabled={sortLoading}
                onClick={() => sortDate("Date")}
              >
                Date
              </MenuItem>
              <MenuItem
                value={"Distance"}
                disabled={sortLoading}
                onClick={() => sortNumber("Distance")}
              >
                Distance
              </MenuItem>
              <MenuItem
                value={"Ascent"}
                disabled={sortLoading}
                onClick={() => sortAscent("Ascent")}
              >
                Ascent
              </MenuItem>
              <MenuItem
                value={"Diff"}
                disabled={sortLoading}
                onClick={() => sortDiff("Diff")}
              >
                Difficulty
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            disabled={sortLoading}
            onClick={() => {
              sortByCurr === "Location"
                ? sortHikes("Location")
                : sortByCurr === "Date"
                ? sortDate("Date")
                : sortByCurr === "Distance"
                ? sortNumber("Distance")
                : sortByCurr === "Ascent"
                ? sortAscent("Ascent")
                : sortByCurr === "Diff"
                ? sortDiff("Diff")
                : sortHikes("Location");
            }}
          >
            <SwapVertIcon />
          </Button>
        </div>
        <Grid container spacing={3}>
          {hikes.map((hike, i) => (
            !["x", "", null].includes(hike.Youtube) && (
              <Container
                maxWidth="xl"
                sx={{
                  marginBottom: "50px",
                }}
              >
                <Typography
                gutterBottom
                variant="h4"
                align="center"
                sx={{
                  marginTop: "60px",
                  marginBottom: "10px",
                  marginRight: "0px",
                  marginLeft: "0px",
                }}
                >
                  {hike.Location}
                </Typography>
                <Typography gutterBottom variant="h6" align="center">
                  {hike.Date}
                </Typography>
                <Container
                  //maxWidth="xl"
                  sx={{
                    marginTop: "0px",
                    marginBottom: "50px",
                    paddingLeft: "0px",
                    paddingRight: "0px",
                  }}
                >
                  <iframe
                    title="Youtube Video"
                    src={hike.Youtube}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                    width="100%"
                    height="648"
                    frameBorder="0"
                  ></iframe>
                </Container>
              </Container>
            )
          ))}
        </Grid>
      </Container>
    </>
  );
}
