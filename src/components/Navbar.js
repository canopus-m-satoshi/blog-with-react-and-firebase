import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 text-white flex items-center justify-center gap-4 p-2">
      <Link to="/" className="text-white hover:text-green-500">
        Home
      </Link>
      <Link to="/createpost" className="text-white hover:text-green-500">
        Create Post
      </Link>
      <Link to="/login" className="text-white hover:text-green-500">
        Login
      </Link>
    </nav>
  )
}
export default Navbar
