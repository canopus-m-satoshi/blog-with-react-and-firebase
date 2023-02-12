import { getAuth, signOut } from 'firebase/auth'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate()

  const auth = getAuth()

  const signout = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      navigate('/login')
    })
  }

  return (
    <div>
      <p>Logout</p>
      <Button onClick={signout} variant="contained">
        Logout
      </Button>
    </div>
  )
}
export default Logout
