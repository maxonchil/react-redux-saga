import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post";
import {fetchAsyncPosts} from "../store/actions/posts.actions";
import Loader from "./loader";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.app.loading);
    const posts = useSelector(state => state.posts.fetchPosts);
    if (loading) {
        return <Loader/>
    }
    if (!posts.length) {
        return <button onClick={() => dispatch(fetchAsyncPosts())} className="btn btn-primary">Load posts</button>;
    }
    return posts.map((post) => <Post post={post} key={post.id}/>);
};
