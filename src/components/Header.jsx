import { styled } from "styled-components"
import { Theme } from "./Theme"
import { useSelector } from "react-redux"
import { selectThemeLight } from "../redux/theme/slice"

const Header = () =>{

    const themeLight = useSelector(selectThemeLight)
    const themeVariables = useSelector(state=> state.themeVariables)

    return(
        <ContainerHeader theme={themeVariables} themeLight={themeLight} >
            <Title theme={themeVariables} themeLight={themeLight} >Where in the world?</Title>
            <Theme/>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
height: 70px;
border-bottom:10px;
transition: 0.2s;
background-color: ${({ theme,themeLight }) => themeLight ? theme.colors.White : theme.colors.VeryDarkBlue } ;
`

const Title = styled.h2`
font-weight: 800;
align-self: center;
margin-left: 40px;
color: ${({ theme,themeLight }) => themeLight ?  theme.colors.VeryVeryDarkBlue : theme.colors.White};
@media (max-width: 877px) {
    font-size: 20px;
  }
`

export {Header}

