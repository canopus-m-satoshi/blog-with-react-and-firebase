import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [postText, setPostText] = useState('')
  const navigate = useNavigate()

  const createPost = async () => {
    await addDoc(collection(db, 'posts'), {
      title: title,
      postText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    })

    navigate('/')
  }

  return (
    <Container>
      <Box
        sx={{
          width: 600,
          height: 400,
          my: 10,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          bgcolor: 'background.level1',
        }}>
        <h1>Post article</h1>
        <div>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Articl Title</InputLabel>
            <Input
              id="component-helper"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
        </div>
        <div>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Write down contents"
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <Button variant="contained" onClick={createPost}>
          Post
        </Button>
      </Box>
    </Container>
  )
}
export default CreatePost
