import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import the Link component

import TreeImage from '../assets/treeImage.jpg'; // Importing the tree image

const StyledMenuIcon = styled(MenuIcon)`
  color: #fff;
  /* Add any other styles you want */
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Avatar with tree image representing the growth concept */}
        <Avatar alt="Growth Tree" src={TreeImage} />

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Jiweze Initiative
        </Typography>

        {/* More button with popover for additional links */}
        <div>
          <StyledMenuIcon />
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="inherit"
          >
            More
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {/* Actual links */}
            <MenuItem onClick={handleClose}>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/programs">Programs</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/contact">Contact</Link>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
