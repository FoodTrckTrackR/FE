import {REGISTER_START, REGISTER_ERROR} from '../actions/'

const initialState = {
    FormValues: {
        username: "",
        password: "",
        email: "",
        tos: false,
    },
    FormErrors: {
        username: "",
        password: "",
        email: "",
        tos: "",
    },
     Users: [],

    Disabled: true,

    isIdle: true,
    isLoading: false,
    isSuccess: false, 
    isError: false,
}


 export const reducer = (state = initialState, action) => {
    switch(action.type){
    case REGISTER_START:
        return {
            ...state,
            isIdle: false,
            isLoading: true,
            isError: false,
            isSuccess: false,
            Users: [...state.Users, action.payload],
        };
    case REGISTER_ERROR:
        return{}
    default:
        return state;
}
    }

