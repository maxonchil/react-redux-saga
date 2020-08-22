import {put, takeEvery, call} from 'redux-saga/effects'
import {FETCH_POST, REQUEST_POST} from "../types/posts.types";
import {hideLoader, showAlert, showLoader} from "../actions/app.actions";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POST, sagaWorker)
};

function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchedPosts);
        yield put({type: FETCH_POST, payload});
        yield put(hideLoader());
    }catch(error) {
        yield put(showAlert(error.message));
        yield put(hideLoader());
    }

}

async function fetchedPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await res.json()
};
