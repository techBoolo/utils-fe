import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';

import { resolvedns, reversedns } from '../../services/dns.js';

const Dns = (props) => {
  const[ hostname, setHostname ] = useState('')
  const[ ips, setIps ] = useState([])
  const [resolveError, setResolveError] = useState(null)

  const [ ip, setIp ] = useState('');
  const [ hostnames, setHostnames ] = useState([]);
  const [reverseError, setReverseError] = useState(null)



  const handleResolve = async (ev) => {
    ev.preventDefault();
    try {
      const addresses = await resolvedns(hostname);
      setIps(addresses.ips)
    } catch (error) {
      setResolveError({ message: error.response.data.error.message, _status: 'error' })
      setTimeout(() => setResolveError(null), 5000)
      setIps([])
    }
  }
  const handleReverse = async (ev) => {
    ev.preventDefault();
    try {
      const { hostnames } = await reversedns(ip)
      setHostnames(hostnames);
    } catch (error) {
      setReverseError({ message: error.response.data.error.message, _status: 'error' })
      setTimeout(() => setReverseError(null), 5000)
      setIp('')
    }
  }
  const handleHostnameChange = (ev) => {
    setHostname(ev.target.value)
    setIps([])
  }
  const handleIpChange = (ev) => {
    setIp(ev.target.value)
    setHostnames([])
  }
  return (
    <Stack spacing={4} divider={<Divider flexItem />}>
      <Typography variant='h6'>DNS</Typography>
      <Box>
        <Typography>Resolve:</Typography>
        { resolveError && <Alert severity={resolveError._status}>{resolveError.message}</Alert> }
        <Box component='form' onSubmit={handleResolve} sx={{ mb: 2, display: 'flex', flexDirection: 'column'}}>
          <TextField
            size='small'
            label='hostname'
            margin='normal'
            value={hostname}
            onChange={handleHostnameChange}
            sx={{ mb: 2}}
          />
          <Button type='submit' variant='outlined'>Resolve</Button>
        </Box>
        <Box sx={{ mb: 2}}>
          {
            ips && ips.length > 0 &&
            <>
              <Typography>Ips:</Typography>
                <ul>
              {
                ips.map(ip => (
                  <li key={ip}>{ip}</li>
                ))
              }
                </ul>
            </>
          }
        </Box>
      </Box>

      <Box>
        <Typography>Reverse:</Typography>
        <Box sx={{ my: 1}}>
          { reverseError && <Alert severity={reverseError._status}>{reverseError.message}</Alert> }
        </Box>
        <Box component='form' onSubmit={handleReverse} sx={{ mb: 2, display: 'flex', flexDirection: 'column'}}>
          <TextField
            size='small'
            label='ip'
            margin='normal'
            value={ip}
            onChange={handleIpChange}
            sx={{ mb: 2}}
          />
          <Button type='submit' variant='outlined'>Reverse</Button>
        </Box>
        <Box sx={{ mb: 2}}>
          {
            hostnames && hostnames.length > 0 &&
            <>
              <Typography>Hostnames:</Typography>
                <ul>
              {
                hostnames.map(hostname => (
                  <li key={hostname}>{hostname}</li>
                ))
              }
                </ul>
            </>
          }
        </Box>
      </Box>
    </Stack>
  );
};

export default Dns;
