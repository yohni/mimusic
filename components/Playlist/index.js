import { Container } from '@mui/material'
import React from 'react'
import { dummySongs } from './constants'
import Item from './Item'

export default function Playlist() {
  return (
    <Container maxWidth="lg">
      {dummySongs.map((song) => (
        <Item key={song.rank} {...song} />
      ))}
    </Container>
  )
}
