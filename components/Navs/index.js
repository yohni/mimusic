import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

export default function Navs() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent={'space-between'}
        alignItems="center"
        py={5}
      >
        <Link
          href="https://instagram.com/achmadyohni"
          underline="none"
          color={'inherit'}
        >
          <Typography
            component="h3"
            fontWeight={600}
            fontSize={24}
            letterSpacing="0.025em"
            fontStyle={'italic'}
          >
            Mimusic
          </Typography>
        </Link>
        <Box display="flex" flexDirection={'row'} gap={4}>
          <Link
            href="https://instagram.com/achmadyohni"
            underline="none"
            color={'inherit'}
          >
            <Typography component="span" fontSize={16}>
              Instagram
            </Typography>
          </Link>
          <Link
            href="mailto:yohni.123@gmail.com"
            underline="none"
            color={'inherit'}
          >
            <Typography component="span" fontSize={16}>
              Contact
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}
