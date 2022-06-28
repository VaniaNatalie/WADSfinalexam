import './feedback.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Feedback() {
  return (
    <div className="container">
      <div className="small-container">
          <h1 className="h1-text">Feedback</h1>
          <Box pt={2}>
              <TextField
                  required
                  sx={{
                      '& label.Mui-focused': {
                          color: '#ffffff',
                      },
                      '& .MuiInput-underline:after': {
                          borderBottomColor: '#ffffff',
                      },
                      width: 500
                      }}
                  id="standard-required"
                  label="Enter feedback"
                  variant="standard"
              />
          </Box>

          <Box pt={7}>
              <Button
                  sx={{
                  color: '#312113',
                  backgroundColor: '#ab7343',
                  minWidth: '200px',
                  minHeight:'50px',
                  "&:hover":{
                      backgroundColor: '#b37a4a'
                  },
                  }}>Send</Button>

          </Box>


      </div>
    </div>
  );
}

export default Feedback;