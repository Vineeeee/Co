import { ContryPage } from "./ContryPage"
import { MainPage } from "./MainPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/<ContresAPIGithubPages>" element={<MainPage/>}/>
            <Route exact path="/post/:name" element={<ContryPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export { AppRoutes }