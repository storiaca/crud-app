import { Link } from "react-router-dom";
import { Paper, Typography } from "@mui/material";

type SinglePostType = {
  id: number;
  title: string;
  body: string;
};

const Post = ({ id, title, body }: SinglePostType) => {
  return (
    <Paper sx={{ my: "20px", p: "10px 15px" }}>
      <Link to={`details/${id}`} style={{ textDecoration: "none" }}>
        <Typography
          variant="h4"
          component="h2"
          color="initial"
          gutterBottom
          sx={{ textTransform: "uppercase" }}
        >
          {title}
        </Typography>

        <Typography
          variant="subtitle1"
          color="initial"
          sx={{ textTransform: "capitalize" }}
        >
          {body}
        </Typography>
      </Link>
    </Paper>
  );
};

export default Post;
