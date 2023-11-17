import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
    
    // password, email
    // { "password" : "", "email" : "" } -> whatever a password gets changed go to his values object and set to empty string    

    const [values, setValues] = useState(initialState); 

    const onChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value }); // value of the input box
        console.log(values); // here is how the change happends
    };

    const onSubmit = (event) => {
        event.preventDefault();
        callback();
    };

    return { values, onChange, onSubmit };
}