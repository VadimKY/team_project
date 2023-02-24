const onResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const isLiked = (likes, userId) => likes?.some(id => id === userId);
//export const isDelete = (postId) => postId?.some(id => id === postId);

class Api {
    constructor({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getProductList() {
        return fetch(`${this._baseUrl}/posts`, {
            headers: this._headers,
        }).then(onResponse)
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then(onResponse)
    }

    getUserInfoId(userId) {
        return fetch(`${this._baseUrl}/users/${userId}`, {
            headers: this._headers,
        }).then(onResponse)
    }

    getProductById(idProduct) {
        return fetch(`${this._baseUrl}/products/${idProduct}`, {
            headers: this._headers,
        }).then(onResponse)
    }

    setUserInfo(dataUser) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(dataUser)
        }).then(onResponse)
    }

    search(searchQuery) {
        return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {
            headers: this._headers,
        }).then(onResponse)
    }

    changeLikeProduct(postId, isLike) {
        return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
            method: isLike ? 'DELETE' : 'PUT',
            headers: this._headers,
        }).then(onResponse)
    }



    postUserDelete(_id) {
        return fetch(`${this._baseUrl}/posts/${_id}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(onResponse)
    }

}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'Content-Type' : 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VhNDgwZDU5Yjk4YjAzOGY3N2I1YjUiLCJncm91cCI6ItC10YAiLCJpYXQiOjE2NzYzMDI1NDUsImV4cCI6MTcwNzgzODU0NX0.k6Xul9kmVaYPOqOqtzNL99i5z0oxXEXh2dMieH05zlg"
    }
}

const api = new Api(config);

export default api;
