import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import {AccountBalanceSharp, Menu} from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import s from "./AppHeader.module.css";
import ColorButtons from "../Button/Button";
import SimpleDialogDemo from "../Modal/Modal";


const AppHeader = () => {

    return (
        <AppBar position="static">

            <Toolbar>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1, color:  grey[900], fontWeight: 800}}>
                        World-Star
                    <h6>В Мире Информации <AccountBalanceSharp /></h6>
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}>
                    <Menu sx={{color:  grey[900]}} />
                </IconButton>
                <ColorButtons />
                <SimpleDialogDemo />
            </Toolbar>
        </AppBar>
    )
};

export default AppHeader;