import {FETCH_POST, REQUEST_POST} from "../types/posts.types";

export const createPost = (post) => {
    return ({
        type: 'POSTS/CREATE_POST',
        payload: post
    })
};

export const fetchAsyncPosts = () => {
    return {
        type: REQUEST_POST
    };
};



