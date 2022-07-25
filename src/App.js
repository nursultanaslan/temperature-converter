import {
  Typography,
  Stack,
  Paper,
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button
} from '@mui/material';
import React from 'react';
import { useState } from 'react';

function App() {
  const [birim, setBirim] = useState(0)
  const [birim2, setBirim2] = useState(0)

  const [degrees, setDegrees] = useState(0)
  const [result, setResult] = useState(0)

  const convert = () => {
    let convertedValue = 0;
    if (birim === 0 && birim2 === 0)
      convertedValue = degrees
    else if (birim === 0 && birim2 === 1)
      convertedValue = ((degrees - 32) / 1.8)
    else if (birim === 0 && birim2 === 2)
      convertedValue = ((degrees + 459.67) * 5 / 9)
    else if (birim === 0 && birim2 === 3)
      convertedValue = degrees + 459.67
    else if (birim === 1 && birim2 === 0)
      convertedValue = (degrees * 9 / 5) + 32
    else if (birim === 1 && birim2 === 1)
      convertedValue = degrees
    else if (birim === 1 && birim2 === 2)
      convertedValue = degrees + 273.15
    else if (birim === 1 && birim2 === 3)
      convertedValue = (degrees * 9 / 5) + 491.67
    else if (birim === 2 && birim2 === 0)
      convertedValue = (degrees * 9 / 5) - 459.67
    else if (birim === 2 && birim2 === 1)
      convertedValue = degrees - 273.15
    else if (birim === 2 && birim2 === 2)
      convertedValue = degrees
    else if (birim === 2 && birim2 === 3)
      convertedValue = degrees * 9 / 5
    else if (birim === 3 && birim2 === 0)
      convertedValue = degrees - 459.67
    else if (birim === 3 && birim2 === 1)
      convertedValue = (degrees * 5 / 9) - 273.15
    else if (birim === 3 && birim2 === 2)
      convertedValue = degrees * 5 / 9
    else if (birim === 3 && birim2 === 3)
      convertedValue = degrees

    setResult(convertedValue)

  }



  return (
    <div className="App">
      <header className="App-header">
        <Stack style={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h3" paragraph style={{ textAlign: 'center', fontFamily: 'inherit' }}>
            Temperature Converter
          </Typography>

          <Paper elevation={4} style={{
            marginBottom: 4, padding: 20, display: 'flex', gap: '10px',
            alignItems: 'flex-end'
          }}>

            <Box padding={3} style={{ textAlign: 'left' }}>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                Type
              </Typography>
              <FormControl variant="standard" style={{ minWidth: 100 }}>
                <Select onChange={(e) => setBirim(e.target.value)}>
                  <MenuItem value={0}>Fahrenheit</MenuItem>
                  <MenuItem value={1}>Celcius</MenuItem>
                  <MenuItem value={2}>Kelvin</MenuItem>
                  <MenuItem value={3}>Rankine </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box padding={3} style={{ textAlign: 'left' }}>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                Degrees:
              </Typography>
              <TextField onChange={e => setDegrees(e.target.value)} variant='standard' placeholder="0" />

            </Box>
            <Box padding={3} style={{ textAlign: 'left' }}>
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                Type
              </Typography>
              <FormControl variant="standard" style={{ minWidth: 100 }}>
                <Select onChange={(e) => setBirim2(e.target.value)}>
                  <MenuItem value={0}>Fahrenheit</MenuItem>
                  <MenuItem value={1}>Celcius</MenuItem>
                  <MenuItem value={2}>Kelvin</MenuItem>
                  <MenuItem value={3}>Rankine </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box padding={3} style={{ textAlign: 'left' }} >
              <Button onClick={convert} variant="contained" >Convert</Button>
            </Box>
            <Box padding={3} style={{ textAlign: 'left' }} >
              <Typography variant="body2" style={{ fontWeight: 'bold' }}>
                Result:
              </Typography>
              <TextField value={result} variant='standard' placeholder="0" />
            </Box>

          </Paper>


        </Stack>
      </header>
    </div>
  );
}

export default App;
