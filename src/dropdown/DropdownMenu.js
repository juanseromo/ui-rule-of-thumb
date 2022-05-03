import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './dropdown.styles.css'

const CustomButton = styled(Button)`
  border: 2px solid #333333;
  border-radius: 0;
  color: #333333;
  width: 131px;
  height: 28px;
`;

const CustomMenu = styled(Menu)`
    padding-top: 0;
`

const DropdownMenu = ({currentView, handleClickProp}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickItem = (event) => {
        handleClickProp(event)
        handleClose();
    }

    return (
        <div>
            <CustomButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon/>}
            >
                List
            </CustomButton>
            <CustomMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                style={{padding: '0'}}
            >
                <MenuItem style={{ border: '2px solid #333333', borderTop: '0', width: '131px',
                    height: '28px' }} onClick={handleClickItem}>List</MenuItem>
                <MenuItem style={{border: '2px solid #333333',  borderTop: '0', width: '131px',
                    height: '28px', }} onClick={handleClickItem}>Grid</MenuItem>
            </CustomMenu>
        </div>
    )
}

export default DropdownMenu;