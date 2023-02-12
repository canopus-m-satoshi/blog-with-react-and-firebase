import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }

  return (
    <div>
      <p>Login to start</p>
      <Button onClick={signInWithGoogle} variant="contained">
        Sign in With Google
      </Button>
    </div>
  )
}
export default Login
