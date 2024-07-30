import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home.jsx'
import Register from "./Components/Register.jsx"
import Blog from './Components/Blog.jsx'
import Login from "./Components/Login.jsx"
import About from "./Components/About.jsx"
import Authors from "./Components/Authors.jsx"
import Forgotpass from "./Components/Forgotpass.jsx"
import Account from "./Components/Account.jsx"
import Modal from "./Components/Modal.jsx"
import Settings from "./Components/Settings.jsx"
import Update from "./Components/Update.jsx"
import './App.css'
import './Button.css'
import "./Extra.css"

const App = () => {  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/account" element={<Account />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/Update/:id" element={<Update />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/forgotpass" element={<Forgotpass />} />
    </Routes>
  )
}

export default App
