import { ContryPage } from "./ContryPage"
import { MainPage } from "./MainPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () =>{
    return(
    <BrowserRouter basename='/Co'>
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route exact path="/post/:name" element={<ContryPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export { AppRoutes }