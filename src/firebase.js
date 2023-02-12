// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCWLkujoXcIS3c5nq1eIlU3vWNsK2MzEFY',
  authDomain: 'blog-with-react-and-fire-5f3da.firebaseapp.com',
  projectId: 'blog-with-react-and-fire-5f3da',
  storageBucket: 'blog-with-react-and-fire-5f3da.appspot.com',
  messagingSenderId: '757464036096',
  appId: '1:757464036096:web:a91586e05c5e057246f9e5',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
