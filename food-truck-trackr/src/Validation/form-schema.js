import * as yup from "yup"

export default yup.object().shape({
    username: yup  
        .string()
        .required("Must provide a username")
        .min(2, "Username must be at least 2 characters long"),
    password: yup
        .string()
        .required("Must provide a password")
        .min(2, "Password must be at least 2 characters long"),
    email: yup
        .string()
        .required("Must provide an email address"),
    tos: yup
        .boolean()
        .oneOf([true], "Must accept Term Of Service"),
})