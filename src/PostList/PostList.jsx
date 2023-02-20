import React from "react";
import Grid from '@mui/material/Grid';
import Post from "../Post/Post";


const PostList = ({posts, currentUser, name, goods, onProductLike, usersId}) => {
    return <div>
        <Grid container spacing="40px">
             {posts.map(item => (
                <Post key={item._id} {...item} currentUser={currentUser} onProductLike={onProductLike}  />
            ) )}
            {/*<Post key={posts[0]._id} {...posts[0]} />*/}
        </Grid>

    </div>
}

export default PostList;