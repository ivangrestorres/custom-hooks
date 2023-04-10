import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const onChangeFormValues = ({ target }) => {
        setFormValues({ ...values, [target.name]: target.value });
    };

    const resetFormValues = () => {
        setFormValues({ initialState });
    };

    return { formValues, onChangeFormValues, resetFormValues, setFormValues };
};
