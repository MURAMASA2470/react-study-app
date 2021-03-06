import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { navigate } from "gatsby"

interface Props {

}

const AccountMenu: React.FC<Props> = props => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleClose();
    navigate('/login');
  }

  return (
    <>
      <IconButton color="inherit"
                  aria-controls="account-menu"
                  aria-haspopup="true"
                  onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
        <ListItemIcon><AccountCircleIcon fontSize="small" /></ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleLogoutClick}>
        <ListItemIcon><ExitToAppIcon fontSize="small" /></ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default AccountMenu;