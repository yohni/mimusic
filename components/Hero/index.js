import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function Hero() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '80vh',
          position: 'relative',
        }}
        pt={10}
        pb={6}
        display="flex"
        flexDirection="column"
        justifyContent={'center'}
      >
        <Box>
          <Typography
            component="h1"
            fontSize={92}
            lineHeight={1.2}
            letterSpacing={16}
            textTransform="capitalize"
          >
            Where words fail,
          </Typography>
          <Typography
            component="h1"
            fontSize={92}
            lineHeight={1.2}
            letterSpacing={16}
            textTransform="capitalize"
          >
            music speaks
          </Typography>
        </Box>
        <Box mt={4}>
          <Typography
            component="small"
            fontSize={24}
            letterSpacing={12}
            fontWeight={300}
          >
            Hans Christian Andersen
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
