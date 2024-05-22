import React from 'react'
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import Typography from 'antd/es/typography/Typography';
import { Button, IconButton, Tooltip } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import loginpagelogo from '../../Alchemy_Logo.png'
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const items = [
    {
      label: "Log out",
      key: "0",
    },
  ];
  

const HeaderComponent = ({displayusername}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div style={{display:'flex',background:'#001529',justifyContent:'space-between',alignItems:'center'}}>
    <div>
    <img src={loginpagelogo} alt="Alchemy" height={72} width={190} style={{marginLeft:'1.5rem',marginTop:'0.3rem'}}/>
    </div>
    <div style={{display:'flex'}}>
    <Typography style={{color:'white',marginTop:'0.5rem'}}>Welcome <span style={{fontWeight:'bold',fontSize:'16px'}}>{displayusername}</span></Typography>
    <Space size={30} wrap>
        <Space >
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            sx={{ ml: 2 }}
            aria-expanded={open ? 'true' : undefined} style={{background:'white'}}>
            <Avatar sx={{ width: 36, height: 36,}}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          My account
        </MenuItem>
     
        <MenuItem onClick={handleClose}>
          Settings
        </MenuItem>
        <Link to={'/login'}>
        <MenuItem style={{color:'black',marginTop:'-1.5rem'}}>
          Logout
        </MenuItem>
        </Link>
      </Menu>
        </Space>
      
      {/* </Dropdown> */}
    </Space>
    </div>
      </div>
    </div>
  )
}

export default HeaderComponent
