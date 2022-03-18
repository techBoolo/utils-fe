import Router from './router.js';
import Links from './links.js';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Typography sx={{ my: 2}}>Utils</Typography>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flex: 1, mr: 2}}><Links /></Box>
        <Box sx={{ flex: 2}}><Router /></Box>
      </Box>
    </>
  );
}

export default App;
