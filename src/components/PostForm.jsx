import React from 'react';
import {connect} from "react-redux";
import {createPost} from "../store/actions/posts.actions";
import {showAlert} from "../store/actions/app.actions";
import Alert from "./Alert";

 class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    submitHandler = (event) => {
        event.preventDefault();
        const {title} = this.state;
        if(!title.trim()) {
             this.props.showAlert('Empty post can not be added');
        }
        const newPost = {
            title,
            id: Date.now().toString()
        };
        this.setState({title: ''});
        this.props.createPost(newPost);
    };
    changeInputHandler = (event) => {
        event.persist();
        this.setState((prev) => ({
            ...prev,
            ...{[event.target.name]: event.target.value}
        }))
    };

    render() {
        return (<div><form onSubmit={this.submitHandler}>
            <div className="form-group">
                <label htmlFor="title">Post title</label>
                <input type="text" value={this.state.title}
                       className="form-control"
                       id="title"
                       name="title"
                       onChange={this.changeInputHandler}/>
            </div>
            <button className="btn-success" type="submit">Create</button>
        </form>
            {this.props.alert && <Alert alertMessage={this.props.alert}/>}
        </div>)
    }
}

const mapDispatchToProps = {
     createPost,
     showAlert
};
const mapStateToProps = (state) => {
    return {
        alert: state.app.alert,
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
