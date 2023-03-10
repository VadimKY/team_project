import React, {useState} from 'react';
import { Card, CardHeader, Collapse, Avatar, Grid, IconButton, CardActions, CardMedia, CardContent, Typography, } from '@mui/material';
import { Favorite, ExpandMore } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs'
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import HoverRating from "../EstimationMui/EstimationMui";
//import s from './Post.module.css';
import {purple, red} from '@mui/material/colors';
import { isLiked } from "../utils/api";
import cn from "classnames";
import './Post.css';
import Button from "@mui/material/Button";
import s from "../Button/Button.module.css";
import Stack from "@mui/material/Stack";
import DeleteIcon from '@mui/icons-material/Delete';


dayjs.locale('ru');
dayjs.extend(relativeTime);



const ExpandMoreStaled = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
}));



const Post = ({ image, title, cards, author: {email, avatar, name}, text, created_at, id, handlePostUserDelete, onProductLike, currentUser, likes, _id}) => {
    const [expanded, setExpanded] = useState(false);
    const liked = isLiked(likes, currentUser?._id);

    const handleLikeClick = () => {
        onProductLike({_id, likes})
    };

    const handleUserDelete = (evt) => {
        evt.preventDefault();

        handlePostUserDelete(_id);
        //deletePost();
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    let background;
    return (
        <Grid container item xs={12} sm={6} md={4} lg={3} >
            <Card className="containerPost">
                <CardHeader className="cardHeaders"
                            avatar={
                                <Avatar sx={{ bgcolor: purple[500] }}  aria-label='recipe'>
                                    <img src={avatar} alt='#' />
                                </Avatar>
                            }
                            title={name}
                            subheader={dayjs(created_at).fromNow()}
                />

                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={`??????????????????????_${title}`}
                />
                <CardContent className={cards}>
                    <Typography variant="h5" component="h2" gutterBottom>{title}</Typography>
                    <Typography variant="body2" noWrap color="text.secondary">{text}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Favorite className={cn("card__favorite", {
                            "card__favorite_is-active" : liked
                        })}  onClick={handleLikeClick} />
                    </IconButton>

                    <div>{likes.length}</div>

                    <Stack direction="row" spacing={2} >
                        {/*<Button variant="outlined" color="secondary"  className="colorButton"  onClick={handleUserDelete}>*/}
                        {/*    ?????????????? ????????*/}
                        {/*</Button>*/}

                        <IconButton aria-label="delete" size="large" className='postDelete'>
                            <DeleteIcon fontSize="inherit" onClick={handleUserDelete} />
                            {/*<h6 className='postDelete'>?????????????? ????????</h6>*/}
                        </IconButton>

                    </Stack>



                    <ExpandMoreStaled
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </ExpandMoreStaled>

                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {text}
                        </Typography>
                    </CardContent>
                </Collapse>
                <HoverRating />
            </Card>
        </Grid>
    );
};

export default Post;