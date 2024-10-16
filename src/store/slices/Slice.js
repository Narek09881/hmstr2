import { createSlice } from '@reduxjs/toolkit';
export const perTap = 1;
export const reEnergy = 1;
export const maxEnergy = 4000;
const Slice = createSlice({
    name: 'hamster',
    initialState: {
        balance: 0,
        energy: 4000,

    },
    reducers: {
        incrementBalance: (state) => {
            if (state.energy > 0) {
                state.balance += perTap;
            }
        },
        incrementEnergy: (state) => {
            if (state.energy < maxEnergy) {
                state.energy += 1;
            }
        },
        decrementEnergy: (state) => {
            if (state.energy > 0) {
            state.energy -= reEnergy;
            }
        },
    },
});

export const { incrementBalance, incrementEnergy, decrementEnergy } = Slice.actions;
export default Slice.reducer;