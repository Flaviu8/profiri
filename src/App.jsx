import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Navigation from "./components/navbar/Navigation"
import Footer from './components/footer/Footer'
import Terms from "./pages/terms/Terms"


function App() {


  return (
    <>
       <Navigation />
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>       
        <Route path="/termeni" element={<Terms />}></Route>   
      </Routes>
      <Footer/>
    </>
  )
}

export default App
