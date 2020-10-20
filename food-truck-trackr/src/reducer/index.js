const initialState = {
    initialFormValues: {
        username: "",
        password: "",
        email: "",
        tos: false,
    },
    initialFormErrors: {
        username: "",
        password: "",
        email: "",
        tos: "",
    }

}


 export const reducer = (state = initialState, action) => {
switch(action.type){
    default:
        return state;
}
    }

