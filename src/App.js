import './App.css';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'

import { PhotoCamera } from '@material-ui/icons';


function App() {
  return (
    <>
    <CssBaseline/>
    <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera/>
        <Typography variant='h6'>Photo Album</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
        <Container maxWidth="sm">
          <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
            Photo Album
          </Typography>
          <Typography variant='h5' align="center" color="textSecondary" paragraph>
            Hello Everyone. This is a Photo album. i am trying to put long content.Hello Everyone. This is a Photo album. i am trying to put long content.Hello Everyone. This is a Photo album. i am trying to put long content.Hello Everyone. This is a Photo album. i am trying to put long content.Hello Everyone. This is a Photo album. i am trying to put long content.
          </Typography>
        </Container>
      </div>
    </main>
    </>
  );
}

export default App;
