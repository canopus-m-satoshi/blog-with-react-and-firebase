import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../firebase'

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

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDeletePost = async (id) => {
    await deleteDoc(doc(db, 'posts', id))
    window.location.href = '/'
    setOpen(false)
  }

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
            {post.author.id === auth.currentUser.uid && (
              <Button
                variant="contained"
                color="error"
                onClick={() => handleOpen()}>
                Delete
              </Button>
            )}
          </Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {'Are you sure to delete this post?'}
            </DialogTitle>
            <DialogActions>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDeletePost(post.id)}
                autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      ))}
    </Container>
  )
}
export default Home
