import { FormEvent, useState, useEffect, ChangeEvent } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Grid,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../api/url";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleAddPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}posts`, {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box component={Paper} sx={{ p: "20px" }}>
      <form onSubmit={handleAddPost}>
        <Grid item xs={12} sx={{ mb: "20px" }}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="title"
              type="text"
              variant="outlined"
              color="primary"
              name="title"
              label="Title"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              value={title}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ mb: "20px" }}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="body"
              type="text"
              variant="outlined"
              color="primary"
              name="body"
              label="Description"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBody(e.target.value)
              }
              value={body}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Box sx={{ textAlign: "right" }}>
          <Button variant="contained" type="submit">
            Add post
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
