export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerMe = (newUser) => dispatch => {
    
    dispatch({ type: REGISTER_START, payload: newUser })
    console.log('REGISTER_START');
}


