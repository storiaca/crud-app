import { Container, Typography } from "@mui/material";
import CreatePost from "../components/CreatePost";
const Create = () => {
  return (
    <Container sx={{ pt: "5rem" }}>
      <Typography variant="h1" color="initial">
        Create post
      </Typography>
      <CreatePost />
    </Container>
  );
};

export default Create;
