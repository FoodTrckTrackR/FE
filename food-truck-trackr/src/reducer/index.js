import {REGISTER_START, REGISTER_ERROR, REGISTER_SUCCESS} from '../actions/'

const initialState = {
  
    isIdle: true,
    isLoading: false, 
    isError: false,
    
}


 export const reducer = (state = initialState, action) => {
    switch(action.type){
    case REGISTER_SUCCESS:
        return {
            ...state,
            isIdle: true,
            isLoading: false,
            isError: false,
           
        };
    case REGISTER_START:
        return{
            ...state,
            isIdle: true,
            isLoading: false,
            isError: false,
        };
    
    case REGISTER_ERROR:
    return{
        ...state,
        isError: true,
    }
    
    default:
        return state;
}
    }

