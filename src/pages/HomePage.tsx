import {
  Button,
  CardActionArea,
  CardMedia,
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
import { Path } from "../helpers/Path";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import React from "react";
import { useNavigate } from "react-router";

interface OfficialHikesInterface {
  loading: boolean;
  hikes: Hike[];
  reverse: boolean;
  sortByCurr: string;
  sortLoading: boolean;
}

export function HomePage() {
  function createDate(date: string) {
    const dateParts = date.split("/");
    const newDate = new Date(
      +dateParts[2],
      Number(dateParts[1]) - 1,
      +dateParts[0].split("-")[0]
    );

    return newDate;
  }

  const navigate = useNavigate();

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
            marginBottom: "10px",
            marginRight: "60px",
            marginLeft: "0px",
          }}
        >
          Home
        </Typography>         
        <Typography
          variant="h5"
          sx={{
            marginTop: "10px",
            marginBottom: "60px",
            marginRight: "60px",
            marginLeft: "0px",
          }}
        >
          Click on Official Hikes at the top to view all my hikes!
        </Typography>    
        {hikes.map((hike, i) => (
          <CardActionArea
            sx={{
              marginTop: "60px",
              marginBottom: "60px",
              marginRight: "60px",
              marginLeft: "0px",
            }}
            onClick={() => navigate(Path["Official Hike"] + "/" + hike.id)}
          >
            <CardMedia
              component="img"
              //image={hike.hikeCardImageUrl}
              image={require("../websiteImages/" + hike.id + ".jpg")}  // 2023-07-28 - Updated image source from Firebase to local folder
              alt="Image was not found :)"
            />
          </CardActionArea>
        ))}
      </Container>
    </>
  );
}
