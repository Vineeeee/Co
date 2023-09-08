import { ContryPage } from "./ContryPage"
import { Header } from "./Header"
import { MainPage } from "./MainPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const AppRoutes = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route exact path="/post/:name" element={<ContryPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export { AppRoutes }