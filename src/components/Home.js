import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Home = () => {
  return (
    <Container sx={{ py: 4, px: 2 }} className="bg-blue-200 w-full h-screen">
      <Box
        sx={{
          mx: 'auto',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          bgcolor: 'white',
          boxShadow: 3,
        }}>
        <div>
          <h1>Title</h1>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi porro
          animi ducimus fuga omnis, nesciunt tenetur a optio blanditiis velit ut
          inventore sunt voluptate, recusandae sit, dolore totam laboriosam
          iste.
        </div>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <h3 className="text-xl font-bold">@name</h3>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
export default Home
