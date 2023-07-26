import { AppBar, Grid, Toolbar, Link } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";
import { Path } from "../helpers/Path";

export function Navbar() {
  const paths = [
    { to: Path.Home, title: "Home" },
    { to: Path.Films, title: "Films" },
    { to: Path["Official Hikes"], title: "Official Hikes" },
    { to: Path["Duke of Edinburgh"], title: "Duke of Edinburgh" },
    { to: Path["Admin Page"], title: "Admin Page" },
  ];
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid container spacing={2}>
            {paths.map((path, i) => (
              <Grid item key={i}>
                <Link component={ReactRouterLink} to={path.to}>
                  {path.title}
                </Link>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
