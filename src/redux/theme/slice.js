import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    themeLight: true
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{
        changeBoolean: (state, action) =>{
            state.themeLight = !state.themeLight;
        }
    }
})

export const {changeBoolean} = themeSlice.actions;

export default themeSlice.reducer;

export const selectThemeLight = state => state.theme.themeLight