import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"


function App() {


  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App