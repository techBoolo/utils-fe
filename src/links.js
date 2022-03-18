import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Links = (props) => {

  return (
    <Box>
      <Link to='/dns' component={RouterLink}>dns-resolve/reverse</Link>
    </Box>
  );
};

export default Links
