import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function BasicDateRangePicker({value,setValue}) {


  return (

    <div style={{ padding:'20px'}}>
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Start Date', end: 'End Date' }}
    >
      <DateRangePicker
        value={value}
        // formatDate={(date) => console.log(date.toISOString())}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
    </div>

  );
}