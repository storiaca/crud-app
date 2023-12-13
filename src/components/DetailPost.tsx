import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/UI/Loading";
import ErrorMessage from "../components/ErrorMessage";
import {
  Typography,
  Paper,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { get } from "../util/http";
import { API_URL } from "../api/url";
import { BlogPostType } from "./Posts";

const DetailPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);
  const [post, setPost] = useState<BlogPostType>();
  const [error, setError] = useState<string>();
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);

  const handleGetPost = async () => {
    setIsFetching(true);
    try {
      const data = await get<BlogPostType>(`${API_URL}posts/${id}`);

      setPost(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }

    setIsFetching(false);
  };

  useEffect(() => {
    handleGetPost();
  }, []);

  const handleOpenUpdateDialog = () => {
    setOpenDialogUpdate(true);
  };

  const handleCloseUpdateDialog = () => {
    setOpenDialogUpdate(false);
  };

  const handleUpdatePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: post?.id,
          title: post?.title,
          body: post?.body,
          userId: post?.userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setOpenDialogUpdate(false);
  };

  const handleDeletePost = () => {
    fetch(`${API_URL}posts/${id}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  if (error) {
    return <ErrorMessage text={error} />;
  }

  return (
    <Box sx={{ mt: "10px" }}>
      {isFetching ? (
        <Loading />
      ) : (
        <Paper sx={{ p: "20px", mt: "30px" }}>
          <Typography
            variant="h2"
            color="initial"
            sx={{ textTransform: "uppercase", mb: "15px" }}
          >
            {post?.title}
          </Typography>
          <Typography variant="subtitle1" color="initial">
            {post?.body}
          </Typography>
          <Box sx={{ textAlign: "right", mt: "20px" }}>
            <Button
              variant="contained"
              type="button"
              color="primary"
              sx={{ mr: "10px" }}
              onClick={handleOpenUpdateDialog}
            >
              Update
            </Button>
            <Button
              variant="contained"
              type="button"
              color="secondary"
              onClick={handleDeletePost}
            >
              Delete
            </Button>
          </Box>
        </Paper>
      )}
      <Dialog open={openDialogUpdate} onClose={handleCloseUpdateDialog}>
        <DialogTitle>Update post</DialogTitle>
        <form onSubmit={handleUpdatePost}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPost({ ...post, title: e.target.value })
              }
              value={post?.title}
            />
            <TextField
              autoFocus
              margin="dense"
              id="body"
              label="Description"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPost({ ...post, body: e.target.value })
              }
              value={post?.body}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseUpdateDialog}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
            <Button variant="contained" color="success" type="submit">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default DetailPost;
