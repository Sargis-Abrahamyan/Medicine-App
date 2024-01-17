import { configureStore } from '@reduxjs/toolkit';
import medicinSlice from './medicineSlice';

export const store = configureStore({
    reducer: {
        medicine: medicinSlice
    }
});
