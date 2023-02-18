import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const Home = () => {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'))

      setPostList(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      )
    }

    getPosts()
  }, [])

  return (
    <Container
      sx={{
        py: 4,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}
      className="bg-blue-200 w-full h-screen">
      {postList.map((post) => (
        <Box
          sx={{
            width: '100%',
            maxWidth: 600,
            mx: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            bgcolor: 'white',
            boxShadow: 3,
          }}
          key={post.id}>
          <div>
            <h1>{post.title}</h1>
          </div>
          <div>{post.postText}</div>

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <h3 className="text-xl font-bold">@{post.author.username}</h3>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  )
}
export default Home
