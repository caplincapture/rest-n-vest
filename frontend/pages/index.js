  
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Link from '../src/Link';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
      <TextField fullWidth id="outlined-basic" label="Input your text" variant="outlined" />
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
}