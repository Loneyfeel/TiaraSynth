
import './styles/global.sass'

import AppRoutes from "../share/components/Routes/AppRoutes.jsx";
import Header from "../widgets/header/index.js";
import Footer from "../widgets/footer/index.js";

function App() {

  return (
    <>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </>
  )
}

export default App
