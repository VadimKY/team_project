import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import Post from "../Post/Post";
import Container from '@mui/material/Container';
import { postData } from './posts.js'
import PostList from "../PostList/PostList";
import s from './AppMui.module.css';
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import api from "../utils/api";
import {isLiked} from "../utils/api";


const AppMui = () => {
    const [cards, setCards] = useState( []);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [usersId, setUsersId] = useState('');
   // const [isLoading, setIsLoading] = useState(false);
   // const debounceSearchQuery = useDebounce(searchQuery, 300);

    useEffect( () => {
       // setIsLoading(true);
        Promise.all([api.getUserInfo(), api.getProductList()])
            .then(([userData, cardData]) => {
                setCurrentUser(userData);
                setCards(cardData);
            })
            .catch(err => console.error(err))
            .finally(() => {
              //  setIsLoading(false);
            })
    }, []);





    const handleProductLike = (post) => {
        //  const isLiked = product.likes.some(id => id === currentUser._id); // Ищем в массиве лайков текущего пользователя
        const liked = isLiked(post.likes, currentUser._id);
        api.changeLikeProduct(post._id, liked).then((newCard) => { // в зависимости от того есть ли лайки или нет отправляем 'DELETE' или 'PUT'
            const newCards = cards.map((card) => {
                // console.log('Карточка в переборе', card);
                // console.log('Карточка с сервера', newCard);
                return card._id === newCard._id ? newCard : card;
            })
            setCards(newCards);
        })
    }



    return (
        <>
       <AppHeader />
            <Container className={s.containerAppMui}>
                <PostList posts={cards} currentUser={currentUser} onProductLike={handleProductLike} />
            </Container>
            <Footer />
        </>
    );
};

export default AppMui;