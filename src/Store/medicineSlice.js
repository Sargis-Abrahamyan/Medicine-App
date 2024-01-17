import { createSlice } from '@reduxjs/toolkit';

export const InitialState = {
    medicineData: [
        {
            id: '1',
            name: 'analgin',
            price: '250$',
            quantity: '5',
            description:
                'Medtronic plc is an American medical device company. The company s operational and executive headquarters are in Minneapolis, Minnesota, and its legal headquarters are in Ireland due to its acquisition of Irish-based Covidien in 2015.',
            company: 'Medtronic'
        },
        {
            id: '2',
            name: 'Askofen',
            price: '250$',
            quantity: '5',
            description: 'afjaihacjbacabcajkbcasjkbcakjbcakjcbda',
            company: 'Medtronic'
        },
        {
            id: '3',
            name: 'Ketonal',
            price: '250$',
            quantity: '5',
            description: 'afjaihacjbacabcajkbcasjkbcakjbcakjcbda',
            company: 'Medtronic'
        }
    ],
    medicineDataFilter: []
};

export const medicinSlice = createSlice({
    name: 'medicine',
    initialState: InitialState,
    reducers: {
        addMedicine: (state, { payload }) => {
            const { medicineData } = state;
            medicineData.push(payload);
        },

        filterMedicine: (state, { payload }) => {
            state.medicineDataFilter = state.medicineData.filter((item) =>
                item.name.toUpperCase().includes(payload.toUpperCase())
            );
        }
    }
});

export default medicinSlice.reducer;
export const { addMedicine, filterMedicine } = medicinSlice.actions;
