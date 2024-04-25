import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home.jsx'
import Register from "./Components/Register.jsx"
import Form from './Components/Form.jsx'
import Blog from './Components/Blog.jsx'
import About from "./Components/About.jsx"
import Forgotpass from "./Components/Forgotpass.jsx"
import Resetpass from './Components/Resetpass.jsx'
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/form" element={<Form />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/resetpass" element={<Resetpass />} />
      <Route path="/forgotpass" element={<Forgotpass />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
