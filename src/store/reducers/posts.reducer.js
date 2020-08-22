import {CREATE_POST, FETCH_POST} from "../types/posts.types";

const initialState = {
    posts: [],
    fetchPosts: []
};


export const postsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, payload]
            };
        case FETCH_POST:
            return {
                ...state,
                fetchPosts: payload
            };
        default:
            return state;
    }
};
