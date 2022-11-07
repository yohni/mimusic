/* eslint-disable react/display-name */
import { Box } from '@mui/material'
import React from 'react'

const Cursor = React.forwardRef((props, ref) => (
  <Box
    sx={{
      border: '4px solid #fff',
      borderRadius: '100%',
      position: 'absolute',
    }}
    ref={ref}
  />
))

export default Cursor
