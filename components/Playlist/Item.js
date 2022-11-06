import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Item({ title, rank, artist, album, year }) {
  return (
    <Box py={4}>
      <Typography component="h3" fontSize={88}>
        {title}
      </Typography>
      <Typography
        sx={{
          color: '#a0a0a0',
        }}
        component="span"
        fontSize={28}
      >
        {artist} &bull; {album} &bull; {year}
      </Typography>
    </Box>
  )
}
