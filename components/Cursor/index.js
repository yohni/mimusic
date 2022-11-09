/* eslint-disable react/display-name */
import { Box } from '@mui/material'
import React from 'react'

const Cursor = React.forwardRef((props, ref) => (
  <Box
    sx={{
      width: '24px',
      height: '24px',
      border: '4px solid #fff',
      borderRadius: '100%',
      position: 'fixed',
    }}
    ref={ref}
  />
))

export default Cursor
