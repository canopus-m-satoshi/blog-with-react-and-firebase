import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  )
}

export default App
