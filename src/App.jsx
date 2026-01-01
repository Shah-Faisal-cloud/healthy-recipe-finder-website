import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import DetailedRecipe from "./pages/DetailedRecipe"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/recipes/:slug" element={<DetailedRecipe />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
export default App