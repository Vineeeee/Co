import { ContriesPage } from './ContriesPage.jsx'
import {Header} from './Header.jsx'
import { ThemeProvider } from 'styled-components'
import { useSelector } from "react-redux"
import { selectThemeLight } from "../redux/theme/slice"

const MainPage = () => {

    const themeLight = useSelector(selectThemeLight);
    const themeVariables = useSelector(state => state.themeVariables)

    return(
        <>
        <ThemeProvider theme={{ ...themeVariables, themeLight }} >
        <Header/>
        <ContriesPage theme={themeVariables} themeLight={themeLight}/>
        </ThemeProvider>
        </>
    )
}

export {MainPage}