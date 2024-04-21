import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home.jsx'
import Register from "./Components/Register.jsx"
import Form from './Components/Form.jsx'
import Blog from './Components/Blog.jsx'
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/form" element={<Form />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
