import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home.jsx'
import Register from "./Components/Register.jsx"
import Blog from './Components/Blog.jsx'
import Login from "./Components/Login.jsx"
import Login1 from "./Components/Login1.jsx"
import About from "./Components/About.jsx"
import Authors from "./Components/Authors.jsx"
import Forgotpass from "./Components/Forgotpass.jsx"
import Resetpass from './Components/Resetpass.jsx'
import './App.css'
import './Button.css'

const App = () => {  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/login1" element={<Login1/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/resetpass" element={<Resetpass />} />
      <Route path="/forgotpass" element={<Forgotpass />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
