import { v4 as uuidv4 } from 'uuid';

export const route = [
    {
        id: uuidv4(),
        name: 'Home',
        path: '/'
    },
    {
        id: uuidv4(),
        name: 'New Medicine',
        path: '/addmedicine'
    },
    {
        id: uuidv4(),
        name: 'Shop',
        path: '/shop'
    }
];
