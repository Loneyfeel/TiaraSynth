import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from "../../../pages/home/index.js";
import About from "../../../pages/about/index.js";
import Collections from "../../../pages/collections/index.js";
import Marketplace from "../../../pages/marketplace/index.js";
import Authorization from "../../../pages/authorization/index.js";
import Privacy from "../../../pages/privacy/index.js";
import Contact from "../../../pages/contact/index.js";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
        <Route index element={<About/>}/>
        <Route index element={<Collections/>}/>
        <Route index element={<Marketplace/>}/>
        <Route index element={<Authorization/>}/>
        <Route index element={<Privacy/>}/>
        <Route index element={<Contact/>}/>
    </Routes>
)
export default AppRoutes