import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">CRUD App</Link>
            </Typography>
            <Box>
              <Button
                component={Link}
                to="/create"
                variant="contained"
                color="success"
              >
                Create
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Header;
