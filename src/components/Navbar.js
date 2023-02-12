import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="bg-yellow-600 text-white flex items-center justify-center gap-4 p-2">
      <Link to="/" className="text-white hover:text-green-500">
        <FontAwesomeIcon icon={faHouse} className="pr-2" />
        Home
      </Link>
      <Link to="/createpost" className="text-white hover:text-green-500">
        <FontAwesomeIcon icon={faFilePen} className="pr-2" />
        Create Post
      </Link>
      <Link to="/login" className="text-white hover:text-green-500">
        <FontAwesomeIcon icon={faArrowRightToBracket} className="pr-2" />
        Login
      </Link>
    </nav>
  )
}
export default Navbar
