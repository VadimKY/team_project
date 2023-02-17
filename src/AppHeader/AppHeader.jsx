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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:  grey[900]}}>
                    Post
                    <AccountBalanceSharp />
                </Typography>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}>
                    <Menu sx={{color:  grey[900]}} />
<<<<<<< HEAD
                </IconButton>
                <ColorButtons />
=======

                    <ColorButtons />
                </IconButton>
>>>>>>> db9c4765e936783f321c9811bb949f5344b2e90e
                <SimpleDialogDemo />
            </Toolbar>
        </AppBar>
    )
};

export default AppHeader;