import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setUserLoggedIn } = userSlice.actions;

export default userSlice.reducer;