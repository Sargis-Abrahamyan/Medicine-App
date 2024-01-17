import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import { addMedicine } from '../../Store/medicineSlice';
import { Validation } from './validate';

export const useNewMedicine = () => {
    const [formData, setFormData] = useState({
        id: uuidv4(),
        name: '',
        price: '',
        quantity: '',
        description: '',
        company: ''
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handelChangeInput = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const Validate = Validation(formData);
    const handelSubmit = (event) => {
        event.preventDefault();

        if (Object.keys(Validate).length > 0) {
            setErrors(Validate);
        } else {
            setErrors({});
            dispatch(addMedicine(formData));
            setFormData({
                name: '',
                price: '',
                quantity: '',
                description: '',
                company: ''
            });
            navigate('/shop');
        }
    };

    return {
        formData,
        errors,
        handelSubmit,
        handelChangeInput
    };
};
