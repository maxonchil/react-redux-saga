import {CREATE_POST} from "../types/posts.types";
import {showAlert} from "../actions/app.actions";

const forbidden = ['fuck', 'php'];

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                return forbidden.filter(forbiddenWord => action.payload.title.includes(forbiddenWord)).length
                    ? dispatch(showAlert('Some words on you post are forbidden'))
                    : next(action);
            } else {
                return next(action);
            }
        }
    }
}
