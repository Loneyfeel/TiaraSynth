import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from "../../../widgets/content/home/index.js";

const AppRoutes = () => (
    <Routes>
        <Route index element={<Home/>}/>
    </Routes>
)
export default AppRoutes