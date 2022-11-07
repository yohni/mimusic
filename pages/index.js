import { Box } from '@mui/material'
import Head from 'next/head'
import Hero from '../components/Hero'
import Navs from '../components/Navs'
import Playlist from '../components/Playlist'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import Cursor from '../components/Cursor'

export default function Home() {
  let tl = gsap.timeline()
  let cursor = useRef(null)
  let posX = 0
  let posY = 0
  let mouseX = 0
  let mouseY = 0

  useEffect(() => {
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10
        posY += (mouseY - posY) / 10
        tl.set(cursor, {
          css: {
            left: posX,
            top: posY,
          },
        })
      },
    })
    document.addEventListener('mousemove', function (e) {
      mouseX = e.pageX
      mouseY = e.pageY
    })
  })
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

      <Cursor ref={(el) => (cursor = el)} />
    </div>
  )
}
