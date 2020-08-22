export const showLoader = () => {
    return ({type: 'APP/SHOW_LOADER'})
};
export const hideLoader = () => {
    return ({type: 'APP/HIDE_LOADER'})
};
export const showAlert = (text) => {
    return dispatch => {
        dispatch({type: 'APP/SHOW_ALERT', payload: text});
        setTimeout(() => dispatch(hideAlert()), 2000)
    }
};
export const hideAlert = () => {
    return ({type: 'APP/HIDE_ALERT'})
};


