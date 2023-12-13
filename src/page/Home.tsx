import { Container, Paper, Typography } from "@mui/material";
import Posts from "../components/Posts";
const Home = () => {
  return (
    <Container sx={{ pt: "5rem" }}>
      <Typography variant="h1" color="initial">
        Home
      </Typography>

      <Paper>
        <Posts />
      </Paper>
    </Container>
  );
};

export default Home;
