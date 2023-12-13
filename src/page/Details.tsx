import DetailPost from "../components/DetailPost";
import { Container, Typography } from "@mui/material";

const Details = () => {
  return (
    <Container sx={{ pt: "5rem" }}>
      <Typography variant="h1" color="initial">
        Details
      </Typography>
      <DetailPost />
    </Container>
  );
};

export default Details;
