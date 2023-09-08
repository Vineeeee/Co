import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: {
        DarkBlue: "hsl(209, 23%, 22%)",
        VeryDarkBlue: "hsl(207, 26%, 17%)",
        VeryVeryDarkBlue: "hsl(200, 15%, 8%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)"
    },
    width:{
    HomepageItems: "14px",
    DetailPage: "16px",
    Mobile: "375px",
    Desktop: "1440px"
    } 
}

const ThemesSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {}
})

export default ThemesSlice.reducer