import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Button
                variant="text"
                color="warning"
                sx={{ fontSize: "1.7rem", textTransform: "capitalize" }}
                component={Link}
                to="/"
              >
                CRUD App
              </Button>
            </Box>
            {location.pathname === "/" ? (
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
            ) : null}
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default Header;
