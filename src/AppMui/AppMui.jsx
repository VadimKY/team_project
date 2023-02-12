import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import Post from "../Post/Post";
import Container from '@mui/material/Container';
import { postData } from './posts.js'
import PostList from "../PostList/PostList";
import s from './AppMui.module.css';



const AppMui = () => {
    return (
        <>
       <AppHeader />
            <Container className={s.containerAppMui}>
                <PostList posts={postData} />
            </Container>
        </>
    );
};

export default AppMui;