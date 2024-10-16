import { configureStore } from '@reduxjs/toolkit';
import hamsterReducer from './slices/Slice';

const store = configureStore({
    reducer: {
        hamster: hamsterReducer,
    },
});

export default store;