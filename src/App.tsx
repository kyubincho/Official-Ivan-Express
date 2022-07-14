import { ThemeProvider, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Path } from "./helpers/Path";
import { MainTheme } from "./helpers/Theme";
import { AdminPage } from "./pages/AdminPage";
import { DukeOfEdHikes } from "./pages/DukeOfEd/DukeOfEdHikes";
import { HelloWorld } from "./pages/HelloWorld";
import { OfficialHikePage } from "./pages/OfficialHikes/OfficialHikePage";
import { OfficialHikes } from "./pages/OfficialHikes/OfficialHikes";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Router>
        <Routes>
          <Route
            path={Path.Home}
            element={
              <>
                <Navbar />
                <Typography>home</Typography>
              </>
            }
          />
          <Route path={Path.Films} element={<HelloWorld />} />
          <Route path={Path["Official Hikes"]} element={<OfficialHikes />} />
          <Route path={Path["Duke of Edinburgh"]} element={<DukeOfEdHikes />} />
          <Route path={Path["Admin Page"]} element={<AdminPage />} />
          <Route
            path={`${Path["Official Hike"]}/:id`}
            element={<OfficialHikePage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
