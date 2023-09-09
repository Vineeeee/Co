import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Header } from './Header'
import { useSelector } from "react-redux"
import { selectThemeLight } from "../redux/theme/slice"
import { styled } from 'styled-components'
import { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SpanCard } from './StylesForContries'

async function getPost(name) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    return await response.json()
}

export const ContryPage = ()=>{
    const [post, setPost] = useState({})

    const {name} = useParams()

    const themeLight = useSelector(selectThemeLight);
    const themeVariables = useSelector(state => state.themeVariables)
    
    useEffect(() => {
        async function fetchData() {
            const posts = await getPost(name)
            setPost(posts)
        }

        fetchData()
    }, [])

    return(
        <>
        <Header />
        <ButtonContainer theme={themeVariables} themeLight={themeLight}>
        <Link to={`/`}>
        <ButtonHome theme={themeVariables} themeLight={themeLight}>
            <FontAwesomeIcon icon={faLongArrowLeft}/> Back</ButtonHome>
            </Link>
        </ButtonContainer>
        <MainContry theme={themeVariables} themeLight={themeLight}>
        <ContentMain>
            <FlagContry src={post[0]?.flags.svg}/>
            <ContainerInfo>
            <H1Contry theme={themeVariables} themeLight={themeLight}>{post[0]?.name?.common}</H1Contry>
            <ParagraphContry theme={themeVariables} themeLight={themeLight}>
                <SpanCard>Population: </SpanCard>{post[0]?.population.toLocaleString()}<br></br>
                <SpanCard>Region: </SpanCard>{post[0]?.region}<br></br>
                <SpanCard>Sub Region: </SpanCard>{post[0]?.subregion}<br></br>
                <SpanCard>Capital: </SpanCard>{post[0]?.capital}
            </ParagraphContry>
            </ContainerInfo>
            <ParagraphContry theme={themeVariables} themeLight={themeLight}>
            <SpanCard>Top Level Domain:</SpanCard> {post[0]?.tld}<br></br>
            <SpanCard>Currencies: </SpanCard>{post[0]?.currencies && Object.keys(post[0].currencies).map((currencyCode, index) => (
        <span key={currencyCode}>
            {post[0].currencies[currencyCode].name}
            {index < Object.keys(post[0].currencies).length - 1 ? ', ' : ''}
        </span>
    ))}<br></br>
        <SpanCard>Languages: </SpanCard>
    {post[0]?.languages && Object.keys(post[0].languages).map((languageCode, index) => (
        <span key={languageCode}>
            {post[0].languages[languageCode]}
            {index < Object.keys(post[0].languages).length - 1 ? ', ' : ''}
        </span>
    ))}
            </ParagraphContry>
            {post[0]?.borders?.length > 0 && <BordersContriesContainer>
            <ParagraphContry theme={themeVariables} themeLight={themeLight}>
            Border Contries: <ul> {post[0]?.borders?.map((contry,index)=>
                <LiBordersContries theme={themeVariables} themeLight={themeLight}>
                    {contry}
                </LiBordersContries>
            )}
            </ul>
        </ParagraphContry>
        </BordersContriesContainer>}
            </ContentMain>
            
        </MainContry>
        </>
    )}

    const MainContry = styled.main`
    transition: 0.2s;
    background-color: ${({ theme,themeLight }) => themeLight ? theme.colors.White : theme.colors.VeryDarkBlue};
    
    `

    const ContentMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
    @media (max-width: 877px) {
    display: flex;
    flex-direction:column;
  }
    ` 

    const H1Contry = styled.h1`
    margin: 0 40px;
    color: ${({ theme,themeLight }) => themeLight ?  theme.colors.VeryVeryDarkBlue : theme.colors.White};
    `

    const LiBordersContries = styled.li`
    display: inline-block;
    margin: 5px;
    flex-wrap: wrap;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 1px 1px 5px;
    color: ${({ theme,themeLight }) => themeLight ? theme.colors.VeryVeryDarkBlue : theme.colors.White};
    background-color: ${({ theme,themeLight }) => themeLight ? theme.colors.White : theme.colors.VeryDarkBlue } ;
    `

    const ParagraphContry = styled.p`
    margin: 20px 40px ;
    color: ${({ theme,themeLight }) => themeLight ?  theme.colors.VeryVeryDarkBlue : theme.colors.White}
    `

    const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    `
    const FlagContry = styled.img`
    width: 250px;
    min-height: 168px;
    max-height: 168px;
    `

    const ButtonHome = styled.button`
    padding: 5px 30px;
    transition: 0.2s;
    border: none;
    border-radius: 7px ;
    cursor: pointer;
    box-shadow: 1px 1px 3px;
    color: ${({ theme,themeLight }) => themeLight ?  theme.colors.VeryVeryDarkBlue : theme.colors.White};
    background-color: ${({ theme,themeLight }) => themeLight ? theme.colors.White : theme.colors.VeryDarkBlue};
    &:hover{
        opacity: 0.5;
    }
    `

    const BordersContriesContainer = styled.div`
    display: flex;
    justify-content: center;
    `


    const ButtonContainer = styled.div`
    transition: 0.2s;
    display: flex;
    padding: 10px;
    background-color: ${({ theme,themeLight }) => themeLight ? theme.colors.White : theme.colors.VeryDarkBlue};
    `
