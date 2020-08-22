import {HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER} from "../types/app.types";

const initialState = {
    loading: false,
    alert: null
};



const appReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SHOW_LOADER:
            return {...state, loading: true};
        case HIDE_LOADER:
            return {...state, loading: false};
        case SHOW_ALERT: {
            return {...state, alert: payload};
        }
        case HIDE_ALERT: {
            return {...state, alert: null};
        }
        default:
            return state;
    }
};
export default appReducer;
