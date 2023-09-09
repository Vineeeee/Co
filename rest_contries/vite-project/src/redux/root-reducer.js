import { combineReducers } from "redux";
import themeSlice from "./theme/slice"
import themesSlice from "./theme/theme-slice";

const rootReducer = combineReducers({theme: themeSlice, themeVariables: themesSlice})

export default rootReducer