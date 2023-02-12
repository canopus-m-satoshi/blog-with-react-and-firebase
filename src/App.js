import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  )
}

export default App
