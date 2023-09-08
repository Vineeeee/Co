import { styled } from 'styled-components'


// ESTILO PARA O MAIN DA PAGINA
export const MainContries = styled.main`
    padding-top: 20px;
    transition: 0.2s;
    min-height: 90vh;
    background-color: ${({ themes }) => themes.themeLight ? themes.theme.colors.White : themes.theme.colors.VeryDarkBlue};
    @media (max-width: 495px) {
        
    }
    
`;

// ESTILO PARA LISTAS

export const UlMain = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

export const LiMain = styled.li`
margin: 20px;
max-width: 250px;
height: 320px;
border-radius: 10px;
transition: 0.3s;
box-shadow: 1px 1px 5px;
background-color: ${({themes}) => themes.themeLight ? themes.theme.colors.VeryLightGray : themes.theme.colors.DarkBlue};
&:hover{
    opacity: 0.6;
}
`

export const ContainerList = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
`

export const H3InCard = styled.h3`
margin-bottom: 10px;
color: ${({themes})=> themes.themeLight? themes.theme.colors.VeryVeryDarkBlue : themes.theme.colors.White };
`

export const ParagraphCard = styled.p`
font-size: ${({themes})=> themes.theme.width.HomepageItems};
color: ${({themes})=> themes.themeLight? themes.theme.colors.VeryVeryDarkBlue : themes.theme.colors.White };
`

export const SpanCard = styled.span`
font-weight: 800;
`

//ESTILO PARA AS BANDEIRAS

export const Flags = styled.img`
width: 250px;
min-height: 168px;
max-height: 168px;
border-radius: 10px;
box-shadow: 1px 1px 2px 0px;
`

//ESTILOS PARA FILTROS

export const FilterContry = styled.input`
padding: 10px;
padding-right: 150px;
border: none;
border-radius: 5px;
box-shadow: 1px 1px 5px;
color: ${({themes})=> themes.themeLight? themes.theme.colors.VeryVeryDarkBlue : themes.theme.colors.White };
background-color: ${({themes}) => themes.themeLight ? themes.theme.colors.VeryLightGray : themes.theme.colors.DarkBlue};
&::placeholder{
    color: ${({themes})=> themes.themeLight? themes.theme.colors.VeryVeryDarkBlue : themes.theme.colors.White };
}
`

export const SelectRegion = styled.select`
padding: 7px;
border-radius: 10px;
border: none;
box-shadow: 1px 1px 5px;
background-color: ${({themes}) => themes.themeLight ? themes.theme.colors.VeryLightGray : themes.theme.colors.DarkBlue};
color: ${({themes})=> themes.themeLight? themes.theme.colors.VeryVeryDarkBlue : themes.theme.colors.White };
`

export const ContainerFilters = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 20px;
@media (max-width: 495px) {
       display: flex;
       flex-direction: column;
       gap: 20px;
    }
`