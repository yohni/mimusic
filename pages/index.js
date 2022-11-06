import { Box } from '@mui/material'
import Head from 'next/head'
import Hero from '../components/Hero'
import Navs from '../components/Navs'
import Playlist from '../components/Playlist'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Music Playlist</title>
        <meta name="description" content="My top 10 music playlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main">
        <Navs />
        <Hero />
        <Playlist />
      </Box>
    </div>
  )
}
