import {connect} from 'react-redux'
import React from "react";
import Post from "./Post";

const Posts = ({syncPosts}) => {
    return syncPosts.length ? syncPosts.map((post) => <Post post={post} key={post.id}/>) : <p className="text-center">No posts</p>;
};

const mapStateToProps = (state) => {
    return {
        syncPosts: state.posts.posts,
    }
};
export default connect(mapStateToProps, null)(Posts);
