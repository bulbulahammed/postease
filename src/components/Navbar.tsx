import StorefrontIcon from "@mui/icons-material/Storefront";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

function getUserInfo(): User | null {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return null;
}
const user = getUserInfo();

const handleLogout = () => {
  localStorage.removeItem("userInfo");
  window.location.reload();
};

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" aria-label="logo">
            <Link to="/">
              {" "}
              <StorefrontIcon style={{ color: "#ffffff" }} />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopease
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/shop"
              >
                Shop
              </Link>
            </Button>
            {user ? (
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            ) : null}
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
