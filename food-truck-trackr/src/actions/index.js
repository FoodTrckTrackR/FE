// import axios from 'axios'

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'


export const registerMe = (newUser) => dispatch => {

    dispatch({ type: REGISTER_START });
    
    dispatch({ type: REGISTER_SUCCESS, payload: newUser })
    console.log('REGISTER_SUCCESS');

    // dispatch({ type: REGISTER_ERROR, payload: console.log('ERROR IN POST')})
}
