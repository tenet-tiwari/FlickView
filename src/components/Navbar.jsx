import { Stack, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
      <Box onClick={handleClick} sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography variant="h6" color="white" sx={{ ml: 1 }}>
        FlickView
        </Typography>
      </Box>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
