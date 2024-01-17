import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { filterMedicine } from '../../../Store/medicineSlice';

export const useSearchBar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('query') || '');
    const dispatch = useDispatch();

    const handelSearchChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        dispatch(filterMedicine(searchTerm));
        setSearchParams({ query: searchTerm });
        setSearchTerm('');
    };

    return {
        searchTerm,
        handelSearchChange,
        handelSubmit
    };
};
