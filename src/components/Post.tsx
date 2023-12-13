import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
type SinglePostType = {
  id: number;
  title: string;
  body: string;
};

const Post = ({ id, title, body }: SinglePostType) => {
  return (
    <Box>
      <Typography variant="h3" color="initial">
        <Link to={`details/${id}`}>{title}</Link>
      </Typography>

      <Typography variant="subtitle1" color="initial">
        {body}
      </Typography>
    </Box>
  );
};

export default Post;
