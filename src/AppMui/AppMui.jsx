import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import Post from "../Post/Post";
import Container from '@mui/material/Container';
import { postData } from './posts.js'
import PostList from "../PostList/PostList";
import s from './AppMui.module.css';
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import api, {isDelete} from "../utils/api";
import {isLiked} from "../utils/api";
import {render} from "react-dom";


const AppMui = () => {
    const [cards, setCards] = useState( []);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [usersDeleteId, setUsersDeleteId] = useState('');
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

    const refreshPage = ()=>{
        window.location.reload();
    };

    const handlePostUserDelete = (post) => {
        //  const isLiked = product.likes.some(id => id === currentUser._id); // Ищем в массиве лайков текущего пользователя
       // alert(post)
        const result = window.confirm("Удалить пост ?");
        if (result === true) {
            api.postUserDelete(post).then((newCard) => { // в зависимости от того есть ли лайки или нет отправляем 'DELETE' или 'PUT'
                const newCards = cards.map((card) => {
                    // console.log('Карточка в переборе', card);
                    // console.log('Карточка с сервера', newCard);
                    return card._id === newCard._id ? newCard : card;
                })
                setCards(newCards);
            })
            refreshPage();
        }
    };

    // function handlePostUserDelete(postId) {
    //    // setIsProcessLoading(true);
    //    alert('Удалить?');
    //     api.postUserDelete(postId.id)
    //         .then(() => {
    //            setCards(state => state.filter(c => c.id !== postId));
    //
    //         })
    //         .catch((err) => {
    //             console.log(`Ошибка в процессе удаления карточки из галереи: ${err}`);
    //         })
    //         .finally(() => {
    //            // setIsProcessLoading(false);
    //         })


   // }





    return (
        <>
       <AppHeader />
            <Container className={s.containerAppMui} currentUser={currentUser}>
                <PostList posts={cards}
                          currentUser={currentUser}
                          onProductLike={handleProductLike}
                          handlePostUserDelete={handlePostUserDelete}
                />
            </Container>
            <Footer />
        </>
    );
};

export default AppMui;