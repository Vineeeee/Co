import { styled } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { changeBoolean, selectThemeLight } from "../redux/theme/slice"

const Theme = ()=>{

    const dispatch = useDispatch()
    const themeLight = useSelector(selectThemeLight);
    const themeVariables = useSelector(state => state.themeVariables)


    const handleClick = ()=>{
        dispatch(changeBoolean())
    }

    return(
        <ThemeMode onClick={handleClick}>
            <FontAwesomeIcon  style={{color: themeLight?themeVariables.colors.VeryDarkBlue:themeVariables.colors.White, transition:"0.5s"
}} icon={themeLight? faMoon: faSun}/>
            <ParagraphTheme theme={themeVariables} themeLight={themeLight}>
                {themeLight?"Dark mode":"Light mode"}
            </ParagraphTheme>
        </ThemeMode>
    )
}

const ThemeMode = styled.div`
font-weight: 800;
align-self: center;
margin-right: 40px;
display: flex;
gap: 10px;
cursor: pointer;
`

const ParagraphTheme = styled.p`
line-height: 15px;
transition: 0.5s;
color: ${({ theme,themeLight }) => themeLight ?  theme.colors.VeryVeryDarkBlue : theme.colors.White};
`

export {Theme}