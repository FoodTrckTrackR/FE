import {REGISTER_START, REGISTER_ERROR, REGISTER_SUCCESS} from '../actions/'

const initialState = {
  
    isIdle: true,
    isLoading: false,
    isSuccess: false, 
    isError: '',
    
}


 export const reducer = (state = initialState, action) => {
    switch(action.type){
    case REGISTER_SUCCESS:
        return {
            ...state,
            isIdle: false,
            isLoading: true,
            isError: '',
            isSuccess: false,
            newUsers: [action.payload],
        };
    case REGISTER_START:
        return{
            ...state,
            isIdle: true,
            isLoading: false,
            isSuccess: false,
        };
    
    case REGISTER_ERROR:
    return{
        ...state,
        isError: action.payload
    }
    
    default:
        return state;
}
    }

