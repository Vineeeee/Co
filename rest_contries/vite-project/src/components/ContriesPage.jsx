import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MainContries,ContainerFilters,ContainerList,FilterContry,SpanCard,Flags,H3InCard,LiMain,ParagraphCard,SelectRegion,UlMain, } from './StylesForContries'

// FUNÇÃO PARA ADQUIRIR O API DOS PAISES
async function getP() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    return await response.json()
}

export const ContriesPage = (props)=>{
    
    const [posts, setPost] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("none");

const filteredCountries = posts.filter((country) => {
    if (selectedRegion === "none") {
      return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    }else if (selectedRegion === "ukraine") {
        return country.name.common.toLowerCase()=== selectedRegion.toLowerCase();
      }
     else {
      return (
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
        country.region.toLowerCase() === selectedRegion.toLowerCase()
      );
    }
  });

const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

useEffect(()=>{
    async function fetchData() {
        const post = await getP()
        setPost(post)
    }fetchData()
},[])

    return(
        <MainContries themes={props} >
            <ContainerFilters>
            <FilterContry themes={props} type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <SelectRegion themes={props} onChange={handleRegionChange} value={selectedRegion}>
            <option value="none">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="ukraine">Nazi contry</option>
        </SelectRegion>
        </ContainerFilters>
            <UlMain>
                {filteredCountries.length > 0 ? filteredCountries.map((contry, index)=>
                <LiMain themes={props} key={index}><Link to={`/post/${contry.name.common}`}>
                    <Flags src={contry.flags.svg}/>
                    <ContainerList>
                    <H3InCard themes={props}>{contry.name.common}</H3InCard>
                    <ParagraphCard themes={props}><SpanCard>Population: </SpanCard>{contry.population.toLocaleString()}</ParagraphCard>
                    <ParagraphCard themes={props}><SpanCard>Region: </SpanCard>{contry.region}</ParagraphCard>
                    <ParagraphCard themes={props}><SpanCard>Capital: </SpanCard>{contry.capital}</ParagraphCard>
                    </ContainerList></Link>
                </LiMain>
                ): <H3InCard themes={props}>País não encontrado.</H3InCard>}
            </UlMain>
        </MainContries>
    )
}
