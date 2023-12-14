import { Container, Box, Typography } from "@mui/material";
import Posts from "../components/Posts";
const Home = () => {
  return (
    <Container sx={{ pt: "5rem" }}>
      <Typography variant="h1" color="initial">
        Home
      </Typography>

      <Posts />
    </Container>
  );
};

export default Home;
