import axios from 'axios'

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'


export const registerMe = (newUser) => dispatch => {

    dispatch({ type: REGISTER_START });
    
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        console.log(res.data)
        dispatch({ type: REGISTER_SUCCESS, payload: newUser })
        // setUsers([...users, res.data])
        // setFormValues(initialFormValues)
      })
      .catch(err => {
          dispatch({ type: REGISTER_ERROR})
        console.log(err)
      })
    console.log('REGISTER_SUCCESS');

}
