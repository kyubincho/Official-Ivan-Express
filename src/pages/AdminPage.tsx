import { Button } from "@mui/material";
import { useState, ChangeEventHandler } from "react";
import { Navbar } from "../components/Navbar";
import { Hike } from "../models/Hike";
import { convertToFirestore } from "../services/hikes";

export function AdminPage() {
  const [files, setFiles] = useState<Hike[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (e) => {
        setFiles(JSON.parse(e.target?.result as string));
      };
    }
  };
  return (
    <>
      <Navbar />
      <h1>Upload Json file - Example</h1>

      <input type="file" onChange={handleChange} />
      <Button
        onClick={() =>
          convertToFirestore(files).then(() => console.log("Done!"))
        }
      >
        Convert
      </Button>
      <br />
      {"uploaded file content -- " + files}
    </>
  );
}
